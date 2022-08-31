<template>
	<header class="bg-white sticky top-0 border-b border-gray-100">
		<div class="w-full lg:px-5 h-20 flex items-center justify-between">
			<NuxtLink class="font-medium text-2xl" :to="`#`">
				Loan<span class="text-indigo-500">Go</span>
			</NuxtLink>
			<div class="flex items-center space-x-3">
				<button
					class="text-gray-500 hover:text-indigo-500 hover:bg-indigo-50/50 rounded-full transition-all p-3"
				>
					<Micon icon="bi:bell" class="w-5 h-5" />
				</button>
				<button
					@click="openSearch"
					class="text-gray-500 hover:text-indigo-500 hover:bg-indigo-50/50 rounded-full transition-all p-3"
				>
					<Micon icon="bi:search" class="w-5 h-5" />
				</button>
				<Menu as="div" class="relative">
					<MenuButton
						class="text-gray-600 hover:text-indigo-500 hover:bg-indigo-50/50 rounded-full transition-all p-1"
					>
						<img
							src="https://faces-img.xcdn.link/image-lorem-face-6388.jpg"
							alt="User image"
							class="w-7 h-7 rounded-full object-cover"
						/>
					</MenuButton>
					<transition name="fade">
						<MenuItems
							as="div"
							class="absolute -left-40 bg-white rounded w-48 border border-gray-100 z-20 shadow-lg shadow-gray-300/20"
						>
							<template v-for="(o, i) in options" :key="`accountPoppover-${i}`">
								<MenuItem>
									<button
										class="flex items-center space-x-3 p-3 w-full text-sm text-gray-500 hover:text-indigo-500 transition-all duration-300"
									>
										<Micon :icon="o.icon" class="w-5 h-5" />
										<span> {{ o.name }} </span>
									</button>
								</MenuItem>
							</template>
							<div class="border border-gray-50"></div>
							<MenuItem>
								<button
									class="flex items-center space-x-3 p-3 w-full text-sm text-gray-500 hover:text-red-500 transition-all duration-300"
								>
									<Micon icon="bi:box-arrow-right" class="w-5 h-5" />
									<span> Logout </span>
								</button>
							</MenuItem>
						</MenuItems>
					</transition>
				</Menu>
			</div>
		</div>
		<ClientOnly>
			<!-- Search panel comp -->
			<LoangoSearchpanel ref="searchPanel" />
		</ClientOnly>
	</header>
</template>

<script setup>
	import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
	const options = [
		{ name: "Account", icon: "bi:person" },
		{ name: "Messages", icon: "bi:envelope" },
	];
	const searchPanel = ref();

	const openSearch = () => {
		searchPanel.value.setIsOpen(true);
	};
</script>
