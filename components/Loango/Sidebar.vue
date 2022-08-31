<template>
	<div class="space-y-2 h-full flex-1">
		<template v-for="(n, i) in nav" :key="`sideNavItem-${i}`">
			<LoangoSidebarItem :item="n" />
		</template>
	</div>
</template>

<script setup>
	const nav = [
		{ name: "Dashboard", icon: "bi:grid-1x2" },
		{
			name: "Customers",
			icon: "bi:people",
			items: [
				{ name: "Create", icon: "bi:plus" },
				{ name: "List", icon: "bi:list-task" },
			],
		},
		{
			name: "Branches",
			icon: "bi:building",
			items: [
				{ name: "Create", icon: "bi:plus" },
				{ name: "List", icon: "bi:list-task" },
			],
		},
		{
			name: "Loan Products",
			icon: "bi:box",
			items: [
				{ name: "Create", icon: "bi:plus" },
				{ name: "List", icon: "bi:list-task" },
			],
		},
		{
			name: "Users",
			icon: "bi:person-badge",
			items: [
				{ name: "Create", icon: "bi:plus" },
				{ name: "List", icon: "bi:list-task" },
			],
		},
		{
			name: "Reports",
			icon: "bi:bar-chart-line",
			items: [
				{ name: "Active Loans", icon: "bi:dot" },
				{ name: "Customer Information", icon: "bi:dot" },
				{ name: "Arrears Report", icon: "bi:dot" },
				{ name: "Repayments", icon: "bi:dot" },
			],
		},
		{
			name: "Import/Export",
			icon: "bi:arrow-down-up",
			items: [
				{
					name: "Loans",
					icon: "bi:coin",
					items: [
						{ name: "Import", icon: "bi:cloud-upload" },
						{ name: "Export", icon: "bi:cloud-download" },
					],
				},
				{
					name: "Customers",
					icon: "bi:people",
					items: [
						{ name: "Import", icon: "bi:cloud-upload" },
						{ name: "Export", icon: "bi:cloud-download" },
					],
				},
				{
					name: "Payments",
					icon: "bi:wallet",
					items: [
						{ name: "Import", icon: "bi:cloud-upload" },
						{ name: "Export", icon: "bi:cloud-download" },
					],
				},
			],
		},
		{
			name: "Configuration",
			icon: "bi:gear",
			items: [
				{ name: "Collaterals", icon: "bi:house" },
				{ name: "Job Titles", icon: "bi:bookmark" },
				{ name: "Loan Purpose", icon: "bi:diamond" },
				{ name: "ID Types", icon: "bi:credit-card-2-front" },
				{ name: "Payment Methods", icon: "bi:cash" },
				{ name: "Payment Periods", icon: "bi:calendar-check" },
				{ name: "Processing Fees", icon: "bi:cash-coin" },
			],
		},
	];
</script>

<style></style>
