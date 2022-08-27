<template>
	<div class="h-screen bg-[#1E1E1E] text-gray-100">
		<!-- Header at top -->
		<header class="h-24 flex justify-between items-center px-10 border-b-2 border-gray-700/50">
			<NuxtLink to="#" class="flex items-center space-x-4">
				<img src="/ceditor-icon.png" alt="Ceditor Icon" class="rounded-full w-10 h-10" />
				<h1 class="font-medium text-xl">Ceditor</h1>
			</NuxtLink>
			<div class="flex items-center space-x-4">
				<button class="text-gray-400 hover:text-gray-100 transition-all">
					<Micon icon="material-symbols:account-circle-outline" class="w-7 h-7" />
				</button>
				<button class="text-gray-400 hover:text-gray-100 transition-all">
					<Micon icon="ph:bell" class="w-7 h-7" />
				</button>
				<button class="bg-[#2599FB] text-white px-5 py-2 rounded text-sm">Share</button>
			</div>
		</header>
		<!-- Main Body -->
		<main class="h-[calc(100vh-92px)] flex">
			<!-- Mini Nav -->
			<div class="h-full shrink-0 w-32 border-r-2 border-gray-700/50 pt-10 pb-20 flex flex-col">
				<nav class="w-full flex flex-col items-center justify-center space-y-10">
					<template v-for="(m, i) in miniNav" :key="`miniNavMain-${i}`">
						<NuxtLink
							class="w-full text-gray-500 hover:text-gray-100 transition-all flex items-center justify-center border-l-4 border-transparent hover:border-[#2599FB]"
							:to="m.link"
						>
							<Micon :icon="m.icon" class="w-7 h-7" />
						</NuxtLink>
					</template>
				</nav>
				<div class="grow"></div>
				<button class="w-full flex justify-center text-gray-500 hover:text-gray-100 transition-all">
					<Micon icon="bi:gear" class="w-7 h-7" />
				</button>
			</div>

			<!-- Second nav -->
			<div
				class="h-full shrink-0 w-72 border-r-2 border-gray-700/50 pt-10 pb-20 flex flex-col px-5"
			>
				<button
					class="w-full text-sm bg-gray-800 hover:bg-gray-700 transition-all flex py-2 items-center justify-center space-x-2 rounded"
				>
					<span>New</span>
					<Micon icon="bi-plus" class="w-5 h-5" />
				</button>
				<div class="mt-5 w-full space-y-4">
					<treeview :nodes="nodes" :config="config">
						<template #before-input="prop">
							<span class="" v-if="prop.node.icon">
								<Micon :icon="prop.node.icon" class="w-4 h-4" />
							</span>
						</template>
					</treeview>
				</div>
			</div>

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
								class="flex items-center justify-between rounded hover:bg-slate-800 px-4 py-1.5 w-52"
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
	import treeview from "vue3-treeview";

	const miniNav = [
		{ icon: "bi:code-square", link: "#", name: "Code" },
		{ icon: "ph:git-branch", link: "#", name: "Branch" },
		{ icon: "heroicons-outline:briefcase", link: "#", name: "Case" },
		{ icon: "bi:archive", link: "#", name: "Archive" },
		{ icon: "bi:lightbulb", link: "#", name: "Idea" },
	];

	const openFiles = ref([
		{ name: "main.dart", icon: "vscode-icons:file-type-dartlang" },
		{ name: "builder.py", icon: "vscode-icons:file-type-python" },
		{ name: ".gitignore", icon: "vscode-icons:file-type-git" },
	]);
	const config = ref({
		roots: ["d", "app", "runner", "idea", "music"],
		padding: 20,
		openedIcon: {
			type: "img",
			height: 15,
			width: 15,
			src: "https://api.iconify.design/ph:folder-open-fill.svg?color=white",
		},
		closedIcon: {
			type: "img",
			height: 15,
			width: 15,
			src: "https://api.iconify.design/ph:folder-simple-fill.svg?color=white",
		},
	});
	const nodes = ref({
		d: { text: ".dart_tool", children: ["none"] },
		mac: { text: "Macos", children: ["none"] },
		lib: { text: "lib", children: ["none"] },
		main: { text: "main.dart", type: "file", icon: "vscode-icons:file-type-dartlang" },
		android: {
			text: "android",
			children: ["lib", "main"],
			state: {
				opened: true,
			},
		},
		ios: {
			text: "ios",
			children: ["builder", "gitignore"],
			state: {
				opened: true,
			},
		},
		builder: { text: "builder.py", type: "file", icon: "vscode-icons:file-type-python" },
		gitignore: { text: ".gitignore", type: "file", icon: "vscode-icons:file-type-git" },
		linux: { text: "linux", children: ["none"] },
		app: {
			text: "app",
			type: "folder",
			children: ["mac", "android", "ios", "linux"],
			state: {
				opened: true,
			},
		},
		runner: {
			text: "Runner.xcode",
			type: "folder",
			children: ["none"],
		},
		idea: {
			text: ".idea",
			type: "folder",
			children: ["none"],
		},
		music: {
			text: "music player.proj",
			type: "folder",
			children: ["none"],
		},
	});

	const code = ref(`import 'package:google_fonts/google_fonts.dart';

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
	}`);

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

	const image = ref("/ceditor-icon.png");
	const meta = useGetMeta("Ceditor", "Code editor app created by Amirhosein Panahi", image);

	useHead({
		title: "Ceditor",
		meta: meta,
	});

	onMounted(() => {
		setTimeout(() => {
			useFavicon(image);
		}, 150);
	});
</script>

<style scoped>
	.tree {
		@apply font-light text-sm w-full;
	}
	:deep(.tree-level) {
		@apply !space-y-4 !mt-4;
	}
	:deep(.node-wrapper) {
		@apply space-x-2 items-center;
	}
	:deep(.CodeMirror *) {
		/*          ^
	*/
		font-family: monospace;
		font-size: 14px;
	}
</style>
