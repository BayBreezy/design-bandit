<template>
	<Dialog :open="isOpen" @close="setIsOpen" as="div" class="relative z-20">
		<div class="fixed inset-0 bg-black bg-opacity-25"></div>
		<div class="fixed inset-0 overflow-y-auto">
			<div class="flex min-h-full items-center justify-center p-4">
				<DialogPanel
					class="w-full p-4 max-w-xl transform overflow-hidden rounded-lg bg-white shadow-xl transition-all"
				>
					<div class="relative mb-2">
						<span class="absolute left-4 top-1/2 -translate-y-1/2">
							<Micon icon="bi:search" class="w-5 h-5 text-gray-500" />
						</span>

						<input
							placeholder="Search customers by email & name"
							type="search"
							name="search"
							id="search"
							class="w-full bg-gray-100 rounded-md border-none ring-0 pl-12 px-4 py-3 placeholder:text-gray-400 focus:ring-0"
						/>
					</div>
					<small class="pl-4 text-gray-400">Results</small>
					<ul class="mt-2">
						<template v-for="user in data.results" :key="`user-${user.nat}`">
							<li class="p-2 cursor-pointer group hover:bg-gray-50 rounded">
								<div class="flex items-start space-x-3">
									<img
										:src="user.picture.medium"
										alt=""
										class="rounded-full h-10 w-10 object-cover"
									/>
									<div>
										<h1 class="text-sm text-gray-600 group-hover:text-indigo-500">
											{{ user.name.first }} {{ user.name.last }}
										</h1>
										<p
											class="text-xs text-gray-400 group-hover:text-indigo-400 group-hover:underline"
										>
											{{ user.email }}
										</p>
									</div>
								</div>
							</li>
						</template>
					</ul>
					<div class="mt-4 text-xs text-gray-400">
						<p>
							Press
							<button
								@click="isOpen = false"
								class="border border-indigo-200 rounded outline-none px-2"
							>
								esc
							</button>
							to close
						</p>
					</div>
				</DialogPanel>
			</div>
		</div>
	</Dialog>
</template>

<script setup>
	import { Dialog, DialogPanel } from "@headlessui/vue";
	const { data } = useAsyncData(() => $fetch("https://randomuser.me/api/?results=5"));

	const isOpen = ref(false);

	function setIsOpen(value) {
		isOpen.value = value;
	}

	defineExpose({
		setIsOpen,
	});
</script>
