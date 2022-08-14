<template>
	<div ref="manageMenuRef" class="relative">
		<button
			:class="{ 'bg-primary-100': showManage }"
			@click="showManage = !showManage"
			class="lg:px-5 py-2 px-2 lg:py-3 w-full lg:w-auto rounded-xl bg-white hover:bg-primary-100 transition-all text-primary text-xs font-semibold flex items-center justify-between"
		>
			<span class="hidden lg:block">Manage Invoice</span>
			<Micon
				:class="{ 'rotate-180': showManage }"
				icon="mdi:chevron-down"
				class="w-5 h-5 transition-all duration-300 hidden lg:block"
			/>
			<Micon icon="mdi:dots-vertical" class="w-5 h-5 transition-all duration-300 lg:hidden" />
		</button>
		<transition name="fade-down">
			<div
				v-if="showManage"
				class="absolute -left-40 lg:-left-8 top-10 lg:top-12 z-10 shadow-md w-[180px] rounded-xl bg-white p-1"
			>
				<ul class="text-xs">
					<li
						class="flex items-center space-x-2 p-3 cursor-pointer rounded-lg hover:bg-primary-50 text-slate-500 hover:text-primary-700 transition-all"
					>
						<Micon icon="fluent:person-add-24-filled" class="w-5 h-5" />
						<span>Add Customer</span>
					</li>
					<li
						class="flex items-center space-x-2 p-3 cursor-pointer rounded-lg hover:bg-primary-50 text-slate-500 hover:text-primary-700 transition-all"
					>
						<Micon icon="ic:round-save" class="w-5 h-5" />
						<span>Save Draft</span>
					</li>
				</ul>
			</div>
		</transition>
	</div>
</template>

<script setup>
	const manageMenuRef = ref();
	onClickOutside(manageMenuRef, (event) => (showManage.value = false));
	const showManage = ref(false);
</script>
