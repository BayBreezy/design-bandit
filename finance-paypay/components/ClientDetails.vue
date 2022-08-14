<template>
	<div class="rounded-2xl bg-white py-4 px-6 w-full">
		<div class="flex items-center justify-between">
			<h1 class="font-medium text-sm">Client Details</h1>
			<button class="group">
				<Micon icon="mdi:dots-horizontal" class="w-5 h-5 group-hover:rotate-90 transition-all duration-300" />
			</button>
		</div>
		<!-- Customer avatar -->
		<div class="flex mt-5 space-x-5">
			<img src="/1.jpg" alt="Customer face" class="w-16 h-16 rounded-full" />
			<div>
				<h1 class="font-semibold">Jay White</h1>
				<a class="text-slate-400 text-sm font-light" href="mailto:jaywhite@test.com">jaywhite@teest.com</a>
			</div>
		</div>
		<Divider class="my-6" />
		<h1 class="font-medium text-sm flex items-center space-x-2">
			<span> Moonlight Agency Ltd </span>
			<Micon icon="mdi:check-decagram" class="w-3 h-3 text-sky-500" />
		</h1>
		<p class="text-slate-400 text-sm font-light mt-2">Lot 56 Main Street, Kingston Jamaica</p>
		<button
			class="w-full rounded-xl text-sm font-semibold text-primary hover:bg-primary-100 transition-all bg-primary-50 py-4 mt-7"
		>
			Add Customer
		</button>
	</div>
</template>
