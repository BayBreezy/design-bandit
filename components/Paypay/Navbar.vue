<template>
	<header class="sticky top-0 z-40 bg-white/75 backdrop-blur-md w-full">
		<div class="mx-auto flex items-center max-w-7xl">
			<NuxtLink class="text-primary font-bold text-2xl p-4 lg:p-0" to="#"> PayPay. </NuxtLink>
			<div class="lg:flex hidden items-center justify-between grow">
				<nav class="flex items-center space-x-10 ml-20">
					<template v-for="(n, i) in menu" :key="`navItem-${i}`">
						<NuxtLink
							@click="active = n.name"
							:class="[active === n.name ? 'border-primary' : 'border-transparent']"
							class="group transition-all duration-300 flex items-center space-x-4 py-7 border-b-2 hover:border-primary"
							to="#"
						>
							<Micon
								:class="[active === n.name ? 'text-primary' : 'text-slate-400']"
								:icon="n.icon"
								class="w-5 h-5 group-hover:text-primary transition-all duration-300"
							/>
							<span
								:class="[active === n.name ? 'text-primary' : 'text-slate-700']"
								class="text-sm group-hover:text-primary transition-all duration-300"
								>{{ n.name }}</span
							>
						</NuxtLink>
					</template>
				</nav>
				<div class="flex items-center space-x-4">
					<button class="p-3 rounded-full hover:bg-primary-100 group bg-slate-100">
						<Micon icon="octicon:bell-fill-24" class="text-slate-400 group-hover:text-primary w-5 h-5" />
					</button>
					<button class="p-3 rounded-full bg-slate-100 hover:bg-primary-100 group">
						<Micon icon="octicon:gear" class="text-slate-400 group-hover:text-primary w-5 h-5" />
					</button>
					<div class="border-l pl-5 l-5">
						<button class="p-3 rounded-full bg-slate-100 hover:bg-primary-100 group">
							<Micon icon="fluent:person-28-filled" class="text-slate-400 group-hover:text-primary w-5 h-5" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
	const menu = useMenu();
	const active = useActiveNavLink();
</script>
