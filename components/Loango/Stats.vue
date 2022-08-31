<template>
	<div class="grid grid-cols-4 gap-5">
		<template v-for="(s, i) in stats" :key="`stat-${i}`">
			<div
				class="group rounded p-5 shadow-md shadow-gray-500/10 hover:shadow-indigo-500/20 hover:shadow-lg transition-all duration-300"
			>
				<div class="flex justify-between items-center">
					<div>
						<p class="text-sm text-gray-400">{{ s.label }}</p>
						<h2 class="text-3xl font-medium mt-2">{{ s.stat }}</h2>
					</div>
					<div class="inline-block p-5 bg-gray-50 group-hover:bg-indigo-50 rounded-full">
						<Micon :icon="s.icon" class="w-6 h-6 text-gray-500 group-hover:text-indigo-500" />
					</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script setup>
	const stats = ref([
		{ label: "Total Users", stat: "7", icon: "bi:shield" },
		{ label: "Total Customers", stat: "3,450", icon: "bi:people" },
		{ label: "Total Loans", stat: "23,450", icon: "bi:coin" },
		{ label: "Total Branches", stat: "4", icon: "bi:building" },
	]);
</script>

<style></style>
