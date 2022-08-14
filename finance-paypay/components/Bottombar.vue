<template>
	<div>
		<div class="fixed bottom-0 left-0 w-full bg-white lg:hidden">
			<div class="flex justify-around items-center">
				<template v-for="(m, i) in menu" :key="`mobilemenu${i}`">
					<NuxtLink
						@click="active = m.name"
						:class="[active == m.name ? 'text-primary' : 'text-slate-500']"
						to="#"
						class="flex flex-col items-center space-y-2 py-2"
					>
						<Micon :icon="m.icon" class="w-5 h-5" />
						<span class="text-[9px]">{{ m.name }}</span>
					</NuxtLink>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup>
	const menu = useMenu();
	const active = useActiveNavLink();
</script>
