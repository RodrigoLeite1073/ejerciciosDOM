const d = document,
  ls = localStorage;

export default function darkTheme(btn, classLight) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]"),
    moon = "🌝",
    sun = "🌞";

  const setLightMode = () => {
    $selectors.forEach((el) => el.classList.add(classLight));
    $themeBtn.textContent = moon;
    ls.setItem("theme", "light");
  };

  const setDarkMode = () => {
    $selectors.forEach((el) => el.classList.remove(classLight));
    $themeBtn.textContent = sun;
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === sun) {
        setLightMode();
      } else {
        setDarkMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", () => {});
  if (ls.getItem("theme") === null) ls.setItem("theme", "dark");
  if (ls.getItem("theme") === "light") setLightMode();
  else setDarkMode();
}
