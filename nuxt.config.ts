import { defineNuxtConfig } from "nuxt";

const title = "Design Bandit";
const shortTitle = "Design Bandit";
const description =
	"A collection of beautiful designs taken from different sources & implemented with Nuxt 3 & TailwindCSS :)";
const image = "https://designbandit.behonbaker.com/icon.png";
const url = "https://designbandit.behonbaker.com";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@kevinmarrec/nuxt-pwa"],
	css: ["@/assets/main.css"],
	build: {
		transpile: ["@headlessui/vue"],
	},
	meta: {
		title: title,
		titleTemplate: "%s | Design Bandit",
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				hid: "canonical",
				rel: "canonical",
				href: url,
			},
		],
		meta: [
			{
				hid: "description",
				name: "description",
				content: description,
			},
			{ property: "og:site_name", content: title },
			{ hid: "og:type", property: "og:type", content: "website" },
			{
				hid: "og:url",
				property: "og:url",
				content: url,
			},
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
				hid: "twitter:url",
				name: "twitter:url",
				content: url,
			},
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
		],
	},
	pwa: {
		meta: {
			name: title,
			author: "Behon Baker",
			theme_color: "#059669",
			description: description,
		},
		manifest: {
			name: title,
			short_name: title,
			theme_color: "#059669",
			description: description,
		},
	},
});
