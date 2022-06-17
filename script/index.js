import hamburgerMenu from "./menu_hamburguesa.js";

const d = document;
d.addEventListener("DOMContentLoaded", () => {
	hamburgerMenu(".panel-btn", ".panel", ".menu a");
});
