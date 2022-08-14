import { Icon } from "@iconify/vue";

export default defineNuxtPlugin((app) => {
	app.vueApp.component("Micon", Icon);
});
