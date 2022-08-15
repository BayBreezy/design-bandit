<template>
	<ul class="space-y-3">
		<li v-for="(l, i) in links" :key="`quickLink-${i}`">
			<NuxtLink
				to="#"
				class="flex items-center space-x-4 text-slate-600 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 px-5 py-3 rounded-md"
			>
				<Micon :icon="l.icon" class="w-5 h-5" />
				<span class="text-sm">{{ l.name }}</span>
			</NuxtLink>
		</li>
	</ul>
</template>

<script setup>
	const links = [
		{ name: "Transfer Funds", icon: "ri:send-plane-line" },
		{ name: "Transfer Activity", icon: "ph:activity-duotone" },
		{ name: "View Statements", icon: "bi:file-pdf" },
		{ name: "New Account", icon: "ph:sparkle" },
	];
</script>

<style></style>
