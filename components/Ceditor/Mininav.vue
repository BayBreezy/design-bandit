<template>
	<div>
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
</script>

<style></style>
