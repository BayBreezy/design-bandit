export const useMenu = () =>
	useState("menu", () => [
		{ name: "Dashboard", icon: "ic:round-grid-view" },
		{ name: "Invoices", icon: "ion:document-text" },
		{ name: "Wallet", icon: "ion:md-wallet" },
		{ name: "Activity", icon: "bi:file-earmark-bar-graph-fill" },
		{ name: "Help", icon: "carbon:phone-filled" },
	]);

export const useActiveNavLink = () => useState("activeNavLink", () => "Invoices");

export const useGetMeta = (
	title: string,
	description = "",
	image = "https://designbandit.behonbaker.com/icon.png"
) => {
	return [
		{
			hid: "description",
			name: "description",
			content: description,
		},
		{ property: "og:site_name", content: title },
		{ hid: "og:type", property: "og:type", content: "website" },
		{
			hid: "og:image:secure_url",
			property: "og:image:secure_url",
			itemprop: "image",
			content: image,
		},
		{
			hid: "og:title",
			property: "og:title",
			content: title,
		},
		{
			hid: "og:description",
			property: "og:description",
			content: description,
		},
		{
			hid: "og:image",
			property: "og:image",
			itemprop: "image",
			content: image,
		},
		//Twitter
		{ name: "twitter:card", content: "summary_large_image" },
		{
			hid: "twitter:title",
			name: "twitter:title",
			content: title,
		},
		{
			hid: "twitter:description",
			name: "twitter:description",
			content: description,
		},
		{
			hid: "twitter:image",
			name: "twitter:image",
			content: image,
		},
	];
};
