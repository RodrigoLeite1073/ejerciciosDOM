const d = document,
  w = window;

export default function smartVideo() {
  console.log("carga funcion");
  const $videos = d.querySelectorAll("video[data-smart-video]");
  const cb = (entries) => {
    console.log("call back");
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      w.addEventListener("visibilitychange", (e) =>
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause()
      );
    });
  };
  const observer = new IntersectionObserver(cb, { threshold: 0.5 });
  $videos.forEach((el) => observer.observe(el));
}
