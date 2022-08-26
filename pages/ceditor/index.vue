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
			<div class="h-full w-32 border-r-2 border-gray-700/50 pt-10 pb-20 flex flex-col">
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
			<div class="h-full w-72 border-r-2 border-gray-700/50 pt-10 pb-20 flex flex-col px-5">
				<button
					class="w-full text-sm bg-gray-800 hover:bg-gray-700 transition-all flex py-2 items-center justify-center space-x-2 rounded"
				>
					<span>New</span>
					<Micon icon="bi-plus" class="w-5 h-5" />
				</button>
				<div class="mt-10 w-full">
					<template v-for="(d, i) in documents" :key="`document-${i}`">
						<button class=""></button>
					</template>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
	const miniNav = [
		{ icon: "bi:code-square", link: "#", name: "Code" },
		{ icon: "ph:git-branch", link: "#", name: "Branch" },
		{ icon: "heroicons-outline:briefcase", link: "#", name: "Case" },
		{ icon: "bi:archive", link: "#", name: "Archive" },
		{ icon: "bi:lightbulb", link: "#", name: "Idea" },
	];

	const documents = ref([
		{
			name: ".dart_tool",
			type: "folder",
		},
		{
			name: "app",
			type: "folder",
			items: [
				{
					name: "Macos",
					type: "folder",
				},
				{
					name: "android",
					type: "folder",
					items: [
						{
							name: "lib",
							type: "folder",
						},
						{ name: "main.dart", type: "file", icon: "vscode-icons:file-type-dartlang" },
					],
				},
				{
					name: "ios",
					type: "folder",
					items: [
						{ name: "builders.py", type: "file", icon: "vscode-icons:file-type-python" },
						{ name: ".gitignore", type: "file", icon: "vscode-icons:file-type-git" },
					],
				},
				{
					name: "linux",
					type: "folder",
				},
			],
		},
		{
			name: "Runner.xcode",
			type: "folder",
		},
		{
			name: ".idea",
			type: "folder",
		},
		{
			name: "music player.proj",
			type: "folder",
		},
	]);
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

<style></style>
