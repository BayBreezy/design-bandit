<template>
	<div class="min-h-screen">
		<header class="sticky top-0 w-full bg-white dark:bg-slate-800 border-b dark:border-slate-700">
			<div class="mx-auto max-w-6xl">
				<div class="flex items-center justify-between px-5 lg:px-0">
					<NuxtLink class="text-2xl font-light py-5" to="/">Design Bandit</NuxtLink>
					<div>
						<a class="" href="https://github.com/BayBreezy/tailwind-dashboards">
							<Micon icon="bi:github" class="w-5 h-5" />
						</a>
					</div>
				</div>
			</div>
		</header>
		<main class="pt-10 max-w-6xl mx-auto px-7 lg:px-0">
			<h1 class="text-2xl lg:text-4xl font-medium text-center">Collection Of Designs</h1>
			<h1 class="text-4xl lg:text-6xl font-medium text-center mt-2 mb-20">
				Coded with
				<a target="_blank" class="text-emerald-600" href="https://v3.nuxtjs.org/">Nuxt 3</a>
			</h1>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				<template v-for="(a, i) in apps" :key="`appNumber-${i}`">
					<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm">
						<img
							:src="a.image"
							:alt="`${a.name} Image Design`"
							class="object-cover w-full h-48 object-top"
						/>
						<div class="px-4 py-5 flex flex-col space-y-4">
							<a
								v-if="a.dribble"
								target="_blank"
								class="inline-flex items-center space-x-3"
								:href="a.dribble"
							>
								<Micon icon="bi:dribbble" class="w-5 h-5 text-pink-600" />
								<span class="text-sm text-slate-600">See Dribbble Design</span>
							</a>

							<NuxtLink class="inline-flex items-center space-x-3" :to="a.link">
								<Micon icon="bi:box-arrow-in-up-right" class="w-5 h-5 text-slate-600" />
								<span class="text-sm text-slate-600">View Implementation</span>
							</NuxtLink>
						</div>
					</div>
				</template>
			</div>
		</main>
	</div>
</template>

<script setup>
	const apps = [
		{
			image: "/paypay.png",
			name: "Paypay.",
			dribble: "https://dribbble.com/shots/17264371/attachments/12373135?mode=media",
			link: "/paypay",
		},
		{
			image: "/pbank.png",
			name: "PBank.",
			link: "/pbank",
		},
		{
			image: "/untitledlogin.jpg",
			dribble: "https://dribbble.com/shots/17564792-Log-in-page-Untitled-UI",
			name: "Untitled UI Login.",
			link: "/untitledui-login",
		},
	];
</script>
