<template>
	<div>
		<div
			class="h-full shrink-0 w-72 lg:border-r-2 border-gray-700/50 pt-10 pb-20 flex flex-col px-5"
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
	</div>
</template>

<script setup>
	import treeview from "vue3-treeview";

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
</style>
