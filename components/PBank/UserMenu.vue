<template>
	<Menu as="div" class="relative">
		<MenuButton
			class="rounded-full flex items-center justify-center outline-none focus:ring focus:ring-blue-200 transition-all bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600"
		>
			<img
				class="w-8 h-8 rounded-full object-contain"
				src="https://randomuser.me/api/portraits/med/men/22.jpg"
				alt="User image"
			/>
		</MenuButton>
		<transition name="fade-down">
			<MenuItems
				as="div"
				class="absolute z-10 border border-slate-100 text-sm w-[180px] flex flex-col items-start -bottom-30 -left-36 bg-white shadow-md rounded-md p-2"
			>
				<MenuItem v-for="(m, i) in menuitems" :key="`menuItem-${i}`" v-slot="{ active }">
					<NuxtLink
						to="#"
						:class="{ 'bg-blue-100 text-blue-800': active, 'text-slate-500': !active }"
						class="flex items-center space-x-3 py-2.5 px-3 rounded-md w-full"
					>
						<Micon :icon="m.icon" class="w-5 h-5" />
						<span>{{ m.name }}</span>
					</NuxtLink>
				</MenuItem>
			</MenuItems>
		</transition>
	</Menu>
</template>

<script setup>
	import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
	const menuitems = [
		{ name: "Settings", icon: "ph:user-gear" },
		{ name: "Extend Session", icon: "mdi:clock-fast" },
		{ name: "Prevent Logout", icon: "mdi:shield-refresh-outline" },
		{ name: "Logout", icon: "humbleicons:logout" },
	];
</script>
