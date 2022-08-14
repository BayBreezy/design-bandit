<template>
	<div>
		<div class="overflow-x-auto relative">
			<table class="w-full text-left my-6">
				<thead>
					<tr class="border-y">
						<th class="text-sm font-normal py-3 text-slate-400">Item Name</th>
						<th class="text-sm font-normal py-3 text-slate-400">Hours</th>
						<th class="text-sm font-normal py-3 text-slate-400">Rate/hr</th>
						<th class="text-sm font-normal py-3 text-slate-400">Tax</th>
						<th class="text-sm font-normal py-3 text-slate-400">Line Total</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b">
						<td class="py-3 whitespace-nowrap lg:w-[35%] lg:pr-6">
							<input placeholder="Name" type="text" name="item_name" id="item_name" class="w-full block mb-3 input" />
							<input placeholder="Description" type="text" name="item_name" id="item_name" class="input" />
						</td>
						<td class="py-3 align-top lg:w-[15%] lg:pr-6">
							<input placeholder="1" type="number" name="hours" id="hours" class="input" />
						</td>
						<td class="py-3 align-top lg:w-[15%] lg:pr-6">
							<input placeholder="$ 0.00" type="number" name="rate" id="rate" class="input" />
						</td>
						<td class="py-3 align-top lg:w-[15%] lg:pr-6">
							<input placeholder="$ 0.00" type="number" name="tax" id="tax" class="input" />
						</td>
						<td class="py-3 align-top flex items-center space-x-3">
							<input placeholder="$ 20,000.00" type="number" name="line" id="line" class="input" />
							<button class="lg:shrink-0 hover:scale-105 transition-all">
								<Micon icon="ph:plus-circle-fill" class="w-8 h-8 text-primary" />
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="w-full flex justify-between flex-col lg:flex-row space-y-5 lg:space-y-0 gap-x-16">
			<div class="w-full">
				<div class="flex items-center text-sm justify-between">
					<h1 class="font-medium">Payment Method</h1>
					<a class="text-primary font-light hover:underline" href="#">Select Payament</a>
				</div>
				<div class="w-full leading-7 mt-6 px-5 py-3 rounded-2xl bg-slate-50 text-sm">
					<h1 class="font-medium">Wire Transfer</h1>
					<p class="flex items-center justify-between lg:justify-start lg:space-x-2">
						<span class="text-slate-400 font-light"> Account Name: </span>
						<span class="font-semibold">Clara Spence</span>
					</p>
					<p class="flex items-center justify-between lg:justify-start lg:space-x-2">
						<span class="text-slate-400 font-light"> Account Number: </span>
						<span class="font-semibold">0119654323456</span>
					</p>
					<p class="flex items-center justify-between lg:justify-start lg:space-x-2">
						<span class="text-slate-400 font-light"> Routing Number: </span>
						<span class="font-semibold">08643465</span>
					</p>
				</div>
			</div>
			<div class="w-full px-5 lg:px-0">
				<div class="flex justify-between items-center text-sm mb-4">
					<span class="font-medium">Sub Total</span>
					<span class="font-medium">$ 29,000.00</span>
				</div>
				<div class="flex justify-between items-center text-sm mb-4">
					<span class="font-light text-slate-400">Discount</span>
					<span class="font-medium">$ 0.00</span>
				</div>
				<div class="flex justify-between items-center text-sm mb-4">
					<span class="font-light text-slate-400">Tax</span>
					<span class="font-medium">$ 0.00</span>
				</div>
				<div class="w-full h-px bg-slate-300 mt-10 mb-3"></div>
				<div class="flex justify-between items-center mb-4">
					<span class="font-light text-slate-400">Total Amount</span>
					<span class="font-medium">$ 29,000.00</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.input {
		@apply w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm font-medium placeholder:font-light;
	}
</style>
