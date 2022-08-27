import { GlobalCmComponent } from "codemirror-editor-vue3";
// language
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/dart/dart.js";
// theme
import "codemirror/theme/dracula.css";
export default defineNuxtPlugin((app) => {
	app.vueApp.use(GlobalCmComponent);
});
