<template>
	<div>
		<Disclosure v-slot="{ open }" v-if="item.items">
			<DisclosureButton
				class="truncate flex items-center text-left space-x-4 text-sm w-full p-3 hover:text-indigo-500 text-gray-500 hover:bg-indigo-50/50 rounded"
			>
				<Micon :icon="item.icon" class="w-4 h-4" />
				<span class="grow">
					{{ item.name }}
				</span>
				<Micon
					icon="bi:chevron-down"
					class="w-3 h-3 ml-auto transition-all"
					:class="[open ? 'rotate-180' : '']"
				/>
			</DisclosureButton>
			<DisclosurePanel as="div" class="ml-4 border-l pl-2">
				<template v-for="(sub, k) in item.items" :key="`subItem${k}`">
					<LoangoSidebarItem :item="sub" />
				</template>
			</DisclosurePanel>
		</Disclosure>
		<button
			v-else
			class="truncate flex items-center space-x-4 text-sm w-full p-3 hover:text-indigo-500 text-gray-500 hover:bg-indigo-50/50 rounded"
		>
			<Micon :icon="item.icon" class="w-4 h-4" />
			<span>
				{{ item.name }}
			</span>
		</button>
	</div>
</template>

<script setup>
	import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
	const props = defineProps({
		item: Object,
	});
</script>

<style></style>
