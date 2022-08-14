<template>
	<div>
		<div>
			<transition name="fade">
				<div v-if="modal" class="fixed inset-0 bg-black bg-opacity-40"></div>
			</transition>
			<transition name="fade-down">
				<div v-if="modal" class="fixed inset-0 overflow-y-auto">
					<div class="flex h-full items-center justify-center p-5">
						<!-- diaload box -->
						<div ref="box" class="w-full max-w-md rounded-xl px-8 py-5 bg-white">
							<h1 class="font-medium text-lg">Send Invoice</h1>
							<p class="text-sm text-slate-500 mt-3">An email will be sent to the customer. Do you want to proceed?</p>
							<div class="text-right mt-4">
								<button @click="close" class="rounded-xl px-5 py-3 text-sm">Cancel</button>
								<button @click="close" class="rounded-xl px-5 py-3 text-sm text-primary bg-primary-100">Send</button>
							</div>
						</div>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script setup>
	const box = ref();
	onClickOutside(box, (event) => (modal.value = false));
	const modal = ref(false);
	const open = () => (modal.value = true);
	const close = () => (modal.value = false);
	defineExpose({ open, close });
</script>
