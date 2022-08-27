<template>
	<div class="h-screen bg-[#1E1E1E] text-gray-100">
		<!-- Mobile menu -->

		<transition name="fade">
			<div v-if="menuOpen" class="fixed inset-0 z-20 bg-[#1E1E1E]">
				<div class="h-16 border-b flex items-center pl-5 border-gray-700/50">
					<button
						@click="menuOpen = false"
						class="text-gray-400 hover:text-gray-100 transition-all lg:hidden"
					>
						<Micon icon="bi:x" class="w-7 h-7" />
					</button>
				</div>
				<div class="flex h-full">
					<CeditorMininav class="h-full" />
					<CeditorSecondnav class="h-full" />
				</div>
			</div>
		</transition>
		<!-- Header at top -->
		<header
			class="h-24 flex justify-between items-center lg:px-10 px-3 border-b-2 border-gray-700/50"
		>
			<NuxtLink to="#" class="flex items-center space-x-4">
				<img src="/ceditor-icon.png" alt="Ceditor Icon" class="rounded-full w-10 h-10" />
				<h1 class="font-medium hidden lg:inline-block text-xl">Ceditor</h1>
			</NuxtLink>
			<div class="flex items-center space-x-4">
				<button class="text-gray-400 hover:text-gray-100 transition-all">
					<Micon icon="material-symbols:account-circle-outline" class="w-7 h-7" />
				</button>
				<button class="text-gray-400 hover:text-gray-100 transition-all">
					<Micon icon="ph:bell" class="w-7 h-7" />
				</button>
				<button class="text-gray-400 hover:text-gray-100 transition-all lg:hidden">
					<Micon icon="carbon:share" class="w-7 h-7" />
				</button>
				<button
					@click="menuOpen = !menuOpen"
					class="text-gray-400 hover:text-gray-100 transition-all lg:hidden"
				>
					<Micon icon="ri:menu-4-fill" class="w-7 h-7" />
				</button>
				<button class="bg-[#2599FB] text-white px-5 py-2 rounded text-sm hidden lg:inline-block">
					<span> Share </span>
				</button>
			</div>
		</header>
		<!-- Main Body -->
		<main class="h-[calc(100vh-92px)] lg:flex">
			<!-- Mini Nav -->
			<CeditorMininav class="hidden lg:block" />

			<!-- Second nav -->
			<CeditorSecondnav class="hidden lg:block" />

			<!-- code editor -->
			<ClientOnly>
				<div class="grow h-full w-full">
					<!-- Tab Bar -->
					<div class="w-full h-16 px-5 flex items-center space-x-2">
						<div class="flex items-center space-x-3 mr-16">
							<button><Micon icon="ri:home-5-line" class="w-6 h-6 opacity-75" /></button>
							<button><Micon icon="ci:chevron-left" class="w-6 h-6 opacity-75" /></button>
							<button><Micon icon="ci:chevron-right" class="w-6 h-6 opacity-75" /></button>
						</div>
						<template v-for="(f, i) in openFiles" :key="`openFile${i}`">
							<button
								class="hidden lg:flex items-center justify-between rounded hover:bg-slate-800 px-4 py-1.5 w-52"
							>
								<div class="flex items-center space-x-2 w-full">
									<Micon :icon="f.icon" class="w-4 h-4" />
									<span class="text-xs">{{ f.name }}</span>
								</div>
								<button>&times;</button>
							</button>
						</template>
					</div>
					<!-- Code editor -->
					<Codemirror
						v-model:value="code"
						:options="cmOptions"
						placeholder="test placeholder"
						style="height: calc(100% - 64px)"
					/>
				</div>
			</ClientOnly>
		</main>
	</div>
</template>

<script setup>
	const openFiles = ref([
		{ name: "main.dart", icon: "vscode-icons:file-type-dartlang" },
		{ name: "builder.py", icon: "vscode-icons:file-type-python" },
		{ name: ".gitignore", icon: "vscode-icons:file-type-git" },
	]);
	const menuOpen = ref(false);

	const code = ref();

	const cmOptions = ref({
		mode: "application/dart", // Language mode
		theme: "dracula", // Theme
		lineNumbers: true, // Show line number
		smartIndent: true, // Smart indent
		indentWithTabs: true,
		indentUnit: 2, // The smart indent unit is 2 spaces in length
		foldGutter: true, // Code folding
		styleActiveLine: true, // Display the style of the selected row
	});

	const image = ref("https://designbandit.behonbaker.com/ceditor-icon.png");
	const meta = useGetMeta("Ceditor", "Code editor app created by Amirhosein Panahi", image);

	useHead({
		title: "Ceditor",
		meta: meta,
	});

	onMounted(() => {
		setTimeout(() => {
			useFavicon(image);
			code.value = `import 'package:google_fonts/google_fonts.dart';
import 'package:flutter/material.dart';
import './constants.dart';
import './screens/screens.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const MyApp());
}

	class MyApp extends StatelessWidget {
	  const MyApp({Key? key}) : super(key: key);

	  // This widget is the root of your application.
	  @override
	  Widget build(BuildContext context) {
	    return MaterialApp(
	      title: 'WhatsApp Clone - WhatsUp',
	      debugShowCheckedModeBanner: false,
	      themeMode: ThemeMode.system,
	      theme: ThemeData(
	        brightness: Brightness.light,
	        primarySwatch: Colors.deepPurple,
	        primaryColor: kPrimaryColor,
	        scaffoldBackgroundColor: Colors.white,
	        textTheme: GoogleFonts.interTextTheme(
	          ThemeData(brightness: Brightness.light).textTheme,
	        ),
	      ),
	      darkTheme: ThemeData(
	        brightness: Brightness.dark,
	        primarySwatch: Colors.deepPurple,
	        accentColor: Colors.deepPurple[500],
	        primaryColor: kPrimaryColor,
	        scaffoldBackgroundColor: Color.fromARGB(255, 15, 3, 36),
	        textTheme: GoogleFonts.interTextTheme(
	          ThemeData(brightness: Brightness.dark).textTheme,
	        ),
	      ),
	      home: const HomeScreen(),
	    );
	  }
	}`;
		}, 150);
	});
</script>

<style scoped>
	:deep(.CodeMirror *) {
		font-family: monospace;
		font-size: 14px;
	}
</style>
