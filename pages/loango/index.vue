<template>
	<div class="min-h-screen flex flex-col">
		<LoangoNavbar />
		<main class="flex w-full grow">
			<div class="w-64 border-r h-[calc(100vh-96px)] overflow-y-auto bg-white p-3">
				<LoangoSidebar />
			</div>
			<section class="grow lg:p-5">
				<h1 class="text-3xl font-medium">Welcome back!</h1>
				<p class="text-sm mt-2 text-gray-500">Here is an overview of what is happening today.</p>
				<div class="my-10"></div>
				<LoangoStats />
				<div class="my-10"></div>
				<LoangoLoansdisbursed />
			</section>
		</main>
	</div>
</template>

<script setup></script>

<style></style>
