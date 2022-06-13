const menu = document.querySelectorAll(".menu");
menu.forEach((el) => {
	el.addEventListener("click", (e) => {
		e.target.parentElement.classList.toggle("open");
	});
});
