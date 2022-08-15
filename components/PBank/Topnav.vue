<template>
	<div class="bg-blue-700 w-full sticky top-0 left-0 hidden lg:block">
		<div class="max-w-7xl mx-auto">
			<nav class="flex items-center justify-center space-x-8">
				<template v-for="(n, i) in nav" :key="`navItem-${i}`">
					<NuxtLink
						v-if="!n.items"
						class="text-blue-100 flex items-center space-x-3 border-b-2 border-transparent hover:border-white py-5 text-sm"
						to="#"
					>
						<Micon :icon="n.icon" class="w-5 h-5" />
						<span> {{ n.name }} </span>
					</NuxtLink>
					<Menu v-else as="div" class="relative">
						<MenuButton
							class="text-blue-100 flex items-center space-x-3 border-b-2 border-transparent hover:border-white py-5 text-sm"
						>
							<Micon :icon="n.icon" class="w-5 h-5" />
							<span> {{ n.name }} </span>
							<Micon icon="bi:chevron-down" class="w-3 h-3" />
						</MenuButton>
						<transition name="fade-down">
							<MenuItems
								as="div"
								class="absolute border border-slate-100 text-sm w-[200px] flex flex-col items-start -bottom-30 -right-5 bg-white shadow-md rounded-md p-2"
							>
								<MenuItem v-for="(item, k) in n.items" :key="`subItem-${k}`" v-slot="{ active }">
									<NuxtLink
										to="#"
										:class="{ 'bg-blue-100 text-blue-800': active, 'text-slate-500': !active }"
										class="flex items-center space-x-3 py-2.5 px-3 rounded-md w-full"
									>
										<span>{{ item }}</span>
									</NuxtLink>
								</MenuItem>
							</MenuItems>
						</transition>
					</Menu>
				</template>
			</nav>
		</div>
	</div>
</template>

<script setup>
	import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
	const nav = [
		{ name: "Dashboard", icon: "bi:ui-checks-grid" },
		{
			name: "Accounts",
			icon: "bi:card-checklist",
			items: ["Operative Account", "Deposit Account", "Loan Account", "Investment Account"],
		},
		{
			name: "Beneficiary",
			icon: "bi:people",
			items: ["All Beneficiaries", "Add Beneficiary"],
		},
		{
			name: "Transactions",
			icon: "cil:transfer",
			items: ["Transfer Funds", "All Transactions", "Recurring Instructions", "Pending Transactions"],
		},
		{
			name: "Pension",
			icon: "iconoir:coin",
			items: ["Member Access", "Sponsor Access", "Employer Access", "Fund Manager Access"],
		},
	];
</script>
