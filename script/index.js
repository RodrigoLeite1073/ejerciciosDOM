import topScrollButton from "./buttom_scroll.js";
import countdown from "./cuenta_regresiva.js";
import darkTheme from "./dark-theme.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclados.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Oct 1 2022 00:00 ", "Feliz Nada");
  topScrollButton(".top-scroll-btn");
});

darkTheme(".dark-mode-btn", "light-mode");

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
