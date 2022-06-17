export default function hamburgerMenu(panelBtn, panel, menuLink) {
	const d = document;
	d.addEventListener("click", (e) => {
		if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
			d.querySelector(panel).classList.toggle("is-active");
			d.querySelector(".panel-btn").classList.toggle("is-active");
		}
		else if (e.target.matches(menuLink)) {
			d.querySelector(panelBtn).classList.remove("is-active")
			d.querySelector(panel).classList.remove("is-active");
		}
	});
}
