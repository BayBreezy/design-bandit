<template>
	<Popover class="relative">
		<PopoverButton
			class="p-2 outline-none focus:ring focus:ring-blue-200 relative rounded-full transition-all bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600"
		>
			<div class="top-0 right-0 absolute rounded-full h-2 w-2 bg-blue-700"></div>
			<Micon icon="ph:bell" class="w-5 h-5" />
		</PopoverButton>
		<transition name="fade-down">
			<PopoverPanel class="absolute -left-44 -bottom-60 z-10 w-[200px]">
				<ul class="p-1 border border-slate-100 rounded-lg shadow-lg bg-white space-y-2">
					<template v-for="(n, i) in notifications" :key="`notification-${i}`">
						<li class="flex items-start space-x-3 cursor-pointer p-2 rounded-lg hover:bg-blue-100 transition-all">
							<img :src="n.image" :alt="`Image for ${n.name}`" class="w-8 h-8 rounded-full" />

							<div>
								<h1 class="text-sm font-medium">{{ n.name }}</h1>
								<p class="line-clamp-1 text-xs text-slate-500">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis hic ducimus.
								</p>
							</div>
						</li>
					</template>
				</ul>
			</PopoverPanel>
		</transition>
	</Popover>
</template>

<script setup>
	import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
	const notifications = [
		{ name: "John Doe", image: "https://randomuser.me/api/portraits/med/men/22.jpg" },
		{ name: "Sasha Laing", image: "https://randomuser.me/api/portraits/med/women/4.jpg" },
		{ name: "Simone James", image: "https://randomuser.me/api/portraits/med/women/22.jpg" },
		{ name: "Steve Anthony", image: "https://randomuser.me/api/portraits/med/men/30.jpg" },
	];
</script>
