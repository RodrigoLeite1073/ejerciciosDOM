const d = document;

export default function searchFilter(input, selector) {
  const $input = d.querySelector(input);

  $input.addEventListener("change", (e) => {
    if ($input.value === "") alert("");
    //d.querySelectorAll(selector).forEach((el) => el.remove("filter"));
  });
  d.addEventListener("keyup", (e) => {
    if (e.target.value === "Escape") e.target.value = "";

    if (e.target.matches(input)) {
      d.querySelectorAll(selector).forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
    }
  });
}
