const d = document;

export default function slider() {
  const $nextBtn = d.getElementById("next"),
    $prevBtn = d.getElementById("prev"),
    $slides = d.querySelectorAll(".slider-slide");

  let i = 0;

  d.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault();

      $slides[i].classList.remove("active");

      i--;

      if (i < 0) {
        i = $slides.length - 1;
      }

      $slides[i].classList.add("active");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $nextBtn) {
      e.preventDefault();

      $slides[i].classList.remove("active");

      i++;

      if (i > $slides.length - 1) {
        i = 0;
      }

      $slides[i].classList.add("active");
    }
  });
}
