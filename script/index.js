import topScrollButton from "./buttom_scroll.js";
import countdown from "./cuenta_regresiva.js";
import darkTheme from "./dark-theme.js";
import userDeviceInfo from "./device-detection.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import responsiveMedia from "./object-responsive.js";
import networkStatus from "./red-detection.js";
import { digitalClock, alarm } from "./reloj.js";
import responsiveTester from "./responsive-tester.js";
import { moveBall, shortcuts } from "./teclados.js";
import webcam from "./webcam-detection.js";

const d = document;

const youtubeDescktop = `<iframe width="560" height="315" src="https://www.youtube.com/embed/DD5lLa9NSBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
const youtubeMobile = `<a href='https://youtu.be/DD5lLa9NSBM'>Ver Video</a>`;

const gmapsDescktop = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.0341837722713!2d-77.01924248591585!3d-12.109812391425335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c80c891169bf%3A0xe9f3926699437c6a!2sEl%20Gourmet!5e0!3m2!1ses-419!2spe!4v1656476847560!5m2!1ses-419!2spe" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

const gmapsMobile = `<a href='https://www.google.com.pe/maps/place/El+Gourmet/@-12.1098124,-77.0192425,17z/data=!3m1!4b1!4m5!3m4!1s0x9105c80c891169bf:0xe9f3926699437c6a!8m2!3d-12.1098245!4d-77.017053?hl=es-419'>Ver Mapa</a>`;

d.addEventListener("DOMContentLoaded", () => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Oct 1 2022 00:00 ", "Feliz Nada");
  topScrollButton(".top-scroll-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 720px)",
    youtubeMobile,
    youtubeDescktop
  );
  responsiveMedia("gmaps", "(min-width: 720px)", gmapsMobile, gmapsDescktop);
  responsiveTester("responsive-tester");

  userDeviceInfo("user-device");

  webcam("webcam");
});

darkTheme(".dark-mode-btn", "light-mode");

networkStatus();

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
