<template>
	<div>
		<main class="min-h-screen flex items-center text-gray-800">
			<!-- Form -->
			<div
				class="min-h-screen h-full lg:basis-1/2 md:basis-2/3 w-full md:w-auto flex items-center justify-center md:block"
			>
				<div class="hidden md:flex items-center space-x-2 mt-7 ml-10">
					<Micon icon="ic:round-circle" class="w-4 h-4" />
					<NuxtLink aria-label="Go to Untitled UI Login Page" to="#" class="font-semibold text-2xl"
						>Untitled UI</NuxtLink
					>
				</div>
				<div class="md:mt-32 w-full md:w-auto md:max-w-[400px] mx-auto h-full px-7 md:px-0">
					<img
						src="/untitledui.png"
						alt="Untitled UI Image for Login screen"
						class="object-contain h-24 rounded w-24 mx-auto my-10 md:hidden"
					/>
					<h1 class="font-medium text-4xl text-center md:text-left">Welcome back</h1>
					<p class="mt-5 text-gray-500 text-center md:text-left">
						Welcome back! Please enter your details
					</p>

					<form @submit.prevent="submit" class="mt-10">
						<div class="mb-7">
							<label for="email" class="inline-block font-medium text-gray-500">Email</label>
							<input
								id="email"
								v-model.trim="email"
								name="email"
								required
								type="email"
								placeholder="Enter your email"
								class="w-full px-4 py-3 mt-2 rounded-lg border-gray-300 focus:border-violet-600/40 focus:ring-violet-600/20 focus:ring-4"
							/>
						</div>
						<div>
							<label for="password" class="inline-block font-medium text-gray-500">Password</label>
							<input
								id="password"
								v-model.trim="password"
								name="password"
								required
								type="password"
								placeholder="* * * * * * * *"
								class="w-full px-4 py-3 mt-2 rounded-lg border-gray-300 focus:border-violet-600/40 focus:ring-violet-600/20 focus:ring-4"
							/>
						</div>
						<div class="w-full flex items-center justify-between my-8">
							<div class="space-x-2">
								<input
									v-model="remeber"
									class="border-gray-300 rounded p-2 checked:text-violet-600 focus:ring-violet-600/60"
									type="checkbox"
									name="remember"
									id="remember"
								/>
								<label class="font-medium text-sm text-gray-600" for="remember"
									>Remeber for 30 days</label
								>
							</div>
							<NuxtLink class="text-sm text-violet-500 font-medium" to="#">
								Forgot password
							</NuxtLink>
						</div>
						<div>
							<button class="rounded-lg w-full py-3.5 bg-violet-600 text-white text-sm font-medium">
								Sign In
							</button>
						</div>
					</form>
					<div class="mt-7">
						<button
							class="rounded-lg w-full py-3 border border-gray-200 font-medium text-gray-600 flex justify-center items-center space-x-2"
							type="button"
						>
							<Micon icon="logos:google-icon" class="w-5 h-5" />
							<span> Sign in with Google </span>
						</button>
					</div>
					<div class="text-center mt-7">
						<NuxtLink to="#" class="text-sm"
							>Don't have an account?
							<span class="text-violet-600 font-medium">Sign Up</span></NuxtLink
						>
					</div>
				</div>
			</div>
			<!-- Image -->
			<div
				class="hidden md:flex h-screen md:basis-1/3 lg:basis-1/2 bg-[#F3F4F7] items-center justify-center"
			>
				<img
					src="/untitledui.png"
					alt="Untitled UI Image for Login screen"
					class="object-contain w-[420px] h-[420px]"
				/>
			</div>
		</main>
	</div>
</template>

<script setup>
	const email = ref();
	const password = ref();
	const remeber = ref(true);

	// Submit function
	const submit = () => {
		alert(
			JSON.stringify(
				{
					email: email.value,
					password: password.value,
					remeber: remeber.value,
				},
				null,
				2
			)
		);
	};

	const image = ref("/untitledlogin.jpg");
	const meta = useGetMeta("Untitled UI Login", "Login page designed by Untitled UI", image);
	useHead({
		title: "Untitled UI Login",
		meta: meta,
	});

	onMounted(() => {
		image.value = window.location.origin + "/untitledlogin.jpg";
	});
</script>

<style></style>
