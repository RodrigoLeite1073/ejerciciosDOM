const d = document;

export default function contactFormValidation() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return regex.exec($input.value)
          ? d.getElementById($input.name).classList.remove("is-active")
          : d.getElementById($input.name).classList.add("is-active");
      } else if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();

    //alert("enviando formulario");

    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    fetch("https://formsubmit.co/ajax/peru3dblender@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        $response.innerHTML = `<p>${json.message}</p>`;
        console.log(json);
        $loader.classList.add("none");
        $response.classList.remove("none");
        $form.reset();
      })
      .catch((err) => {
        console.error(err);
        let message = err.statusText || "Ocurrió un error";
        $response.innerHTML = `<p>Error: ${err.status}, ${message}</p>`;
        $loader.classList.add("none");
        $response.classList.remove("none");
      });

    /*setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();

      setTimeout(() => $response.classList.add("none"), 3000);
    }, 3000);*/
  });
}
