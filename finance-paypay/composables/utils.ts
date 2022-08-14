export const useMenu = () =>
	useState("menu", () => [
		{ name: "Dashboard", icon: "ic:round-grid-view" },
		{ name: "Invoices", icon: "ion:document-text" },
		{ name: "Wallet", icon: "ion:md-wallet" },
		{ name: "Activity", icon: "bi:file-earmark-bar-graph-fill" },
		{ name: "Help", icon: "carbon:phone-filled" },
	]);

export const useActiveNavLink = () => useState("activeNavLink", () => "Invoices");
