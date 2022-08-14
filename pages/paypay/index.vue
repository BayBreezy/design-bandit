<template>
	<div class="min-h-screen bg-gray-100">
		<PaypayNavbar />
		<main class="mx-auto max-w-7xl pb-16 px-5 lg:px-0">
			<!-- Title -->
			<div class="w-full flex items-center justify-between mt-5 lg:mt-8">
				<div class="flex items-center text-sm text-gray-400">
					<span>
						<span class="text-primary">Invoices</span> / edit invoice
						<span class="font-semibold">(INV-2022-010)</span></span
					>
				</div>
				<PaypayManageInvoice />
			</div>
			<!-- Main Section cards -->
			<section class="lg:mt-10 mt-7 flex justify-between flex-col lg:flex-row gap-10">
				<div class="basis-[70%] rounded-2xl bg-white p-4 lg:p-8">
					<!-- Company -->
					<PaypayCompanyAddress />
					<!-- Invoice Number & Billed To -->
					<PaypayBilledTo />
					<!-- Detail Headder -->
					<div class="w-full flex items-center justify-between mt-7">
						<div class="text-sm">
							<h1 class="font-semibold">Item Detail</h1>
							<span class="text-gray-400 text-sm">Type item below</span>
						</div>
						<button
							class="px-5 py-3 rounded-xl bg-slate-50 hover:bg-primary-100 transition-all text-primary text-sm font-semibold flex items-center"
						>
							<Micon icon="mdi:tune-variant" class="w-4 h-4 mr-2" />
							<span>Customize</span>
						</button>
					</div>
					<!-- Item Table -->
					<PaypayInvoiceTable />
				</div>
				<div class="space-y-10">
					<!-- client details -->
					<PaypayClientDetails />
					<!-- amount due -->
					<PaypayAmountDue />
					<div class="flex gap-x-5 w-full max-w-full">
						<button
							class="px-5 py-5 w-full rounded-2xl bg-white hover:bg-primary-50 transition-all text-primary font-semibold flex items-center justify-center"
						>
							<Micon icon="ion:md-eye" class="w-5 h-5 mr-3" />
							<span>Previews</span>
						</button>
						<button
							class="px-5 py-5 w-full rounded-2xl bg-white hover:bg-primary-50 transition-all text-primary font-semibold flex items-center justify-center"
						>
							<Micon icon="majesticons:file-download" class="w-5 h-5 mr-3" />
							<span>Download</span>
						</button>
					</div>
					<div>
						<button
							@click="$refs.sendModal.open"
							class="px-5 py-5 w-full rounded-2xl bg-primary hover:bg-primary-700 transition-all text-white font-semibold flex items-center justify-center"
						>
							<span>Send Invoice</span>
						</button>
					</div>
				</div>
			</section>
		</main>
		<PaypayBottombar />
		<PaypaySendModal ref="sendModal" />
	</div>
</template>

<style>
	html {
		font-size: 15px;
	}
</style>

<script setup></script>
