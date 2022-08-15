<template>
	<div class="min-h-screen">
		<header class="bg-white/80 border-b border-slate-100">
			<div class="flex items-center justify-between mx-auto max-w-7xl px-5 lg:px-0">
				<NuxtLink class="font-bold text-blue-600 text-2xl" to="#">PBank</NuxtLink>
				<div class="flex items-center py-3 space-x-3">
					<button
						class="p-2 rounded-full transition-all bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600"
					>
						<Micon icon="ep:search" class="w-5 h-5" />
					</button>
					<PBankNotification />
					<PBankUserMenu />
				</div>
			</div>
		</header>
		<PBankTopnav />
		<main class="mx-auto max-w-7xl px-7 lg:px-0 pb-10">
			<section class="mt-10">
				<h1 class="font-medium text-2xl">Active Accounts</h1>
				<div class="grid gap-y-5 lg:gap-y-0 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6">
					<template v-for="a in 4" :key="`accountInfo-${a}`">
						<div
							class="rounded border border-slate-100 hover:border-blue-400/30 cursor-pointer bg-white hover:shadow-lg transition-all hover:shadow-blue-600/10 p-3 py-4 space-y-3"
						>
							<div class="flex items-center space-x-3 text-sm">
								<span class="text-slate-400">Acc#: </span>
								<span class="text-slate-700 font-medium">051-4854-784</span>
							</div>
							<div class="flex items-center space-x-3 text-sm">
								<span class="text-slate-400">Acc name: </span>
								<span class="text-slate-700 font-medium">James Willow</span>
							</div>
							<div class="flex items-center space-x-3 text-sm">
								<span class="text-slate-400">Acc type: </span>
								<span class="text-slate-700 font-medium">Saving</span>
							</div>
							<div class="flex items-center space-x-3 text-sm">
								<span class="text-slate-400">Acc balance: </span>
								<span class="text-slate-700 font-medium">JMD$ 6,015,587.85</span>
							</div>
						</div>
					</template>
				</div>
			</section>
			<section class="mt-10">
				<div class="lg:gap-x-20 space-y-10 lg:space-y-0 lg:flex">
					<!-- Transaction Table -->
					<div class="lg:basis-2/3 w-full lg:w-auto">
						<h1 class="font-medium text-2xl">Recent Transactions</h1>
						<div class="overflow-x-auto mt-5">
							<table class="w-full border border-slate-100">
								<thead class="w-full">
									<tr class="border-y border-slate-100 text-left">
										<th class="pl-2">
											<input class="rounded border-slate-400 focus:ring-blue-200 outline-none" type="checkbox" />
										</th>
										<th class="font-normal text-slate-500 py-4 text-sm">Date</th>
										<th class="font-normal text-slate-500 py-4 text-sm">Credit Account</th>
										<th class="font-normal text-slate-500 py-4 text-sm">Debit Account</th>
										<th class="font-normal text-slate-500 py-4 text-sm">Amount</th>
										<th class="font-normal text-slate-500 py-4 text-sm">Status</th>
									</tr>
								</thead>
								<tbody class="w-full">
									<tr v-for="n in 5" :key="`tableData-${n}`" class="border-b hover:bg-blue-50 border-slate-100">
										<td class="pl-2 whitespace-nowrap">
											<input type="checkbox" class="rounded border-slate-400 focus:ring-blue-200 outline-none" />
										</td>
										<td class="text-sm whitespace-nowrap">Jan 15, 2022</td>
										<td class="flex items-center space-x-2 py-4 whitespace-nowrap">
											<img
												src="https://randomuser.me/api/portraits/med/men/22.jpg"
												alt="Jolly Rancher"
												class="w-7 h-7 rounded-full"
											/>
											<h1 class="text-slate-700 text-sm">Jolly Rancher</h1>
										</td>
										<td class="text-sm text-blue-800 cursor-pointer underline underline-offset-2 whitespace-nowrap">
											Acc# : 051-4854-784
										</td>
										<td class="text-sm whitespace-nowrap">JMD$ 20,500.00</td>
										<td class="text-xs whitespace-nowrap">
											<span
												:class="[n % 2 == 0 ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600']"
												class="px-2 py-1 rounded-md"
												>{{ n % 2 == 0 ? "Pending" : "Sent" }}</span
											>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- Quick Links -->
					<div class="lg:basis-1/3">
						<h1 class="font-medium text-2xl">Quick Links</h1>
						<div class="border border-slate-100 mt-6 px-5 py-3">
							<PBankQuicklinks />
						</div>
					</div>
				</div>
			</section>
			<section class="mt-10">
				<h1 class="font-medium text-2xl">Transaction History</h1>
				<div class="mt-5">
					<PBankHistory />
				</div>
			</section>
		</main>
	</div>
</template>

<script setup>
	const image = ref("");
	const meta = useGetMeta("PBank", "Banking Application Dashboard created from the NCB dashboard interface", image);
	useHead({
		title: "PBank",
		meta: meta,
	});

	onMounted(() => {
		image.value = window.location.origin + "/pbank.png";
	});
</script>
