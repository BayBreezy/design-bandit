<template>
	<div class="rounded-2xl bg-white py-4 px-6 w-full">
		<div class="flex items-center justify-between">
			<h1 class="font-medium text-sm">Amount Due <span class="font-light text-slate-400">(USD)</span></h1>
			<button class="group">
				<Micon icon="mdi:dots-horizontal" class="w-5 h-5 group-hover:rotate-90 transition-all duration-300" />
			</button>
		</div>
		<h1 class="font-semibold text-2xl my-4">
			$29,000.00 <span class="font-light text-sm text-slate-400">(Tax Incl.)</span>
		</h1>
		<span class="inline-block px-4 py-3 rounded-full bg-red-50 text-red-500 text-sm">Due on {{ nextMonth }}</span>
		<Divider class="mt-6 mb-8" />
		<div class="flex items-center justify-between">
			<p>Also attach pdf in email</p>
			<label for="pdfemail" class="relative inline-block h-3 w-12">
				<input id="pdfemail" type="checkbox" class="peer sr-only" />
				<span
					class="before:h-6 before:w-6 before:absolute before:top-1/2 before:-translate-y-1/2 before:bg-white before:shadow-md before:rounded-full peer-checked:before:translate-x-6 before:transition-all before:duration-300 absolute inset-0 bg-gray-200 rounded-full cursor-pointer peer-checked:bg-primary transition-all duration-200"
				></span>
			</label>
		</div>
	</div>
</template>

<script setup>
	import dayjs from "dayjs";
	const nextMonth = computed(() => {
		return dayjs().add(1, "month").format("MMM DD, YYYY");
	});
</script>
