const d = document;
export default function countdown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTime = setInterval(() => {
    let now = new Date().getTime(),
      timeLeft = countdownDate - now,
      days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours = (
        "0" + Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutes = (
        "0" + Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((timeLeft % (1000 * 60)) / 1000)).slice(-2);

    $countdown.innerHTML = `<h3>Faltan: ${days} dias, ${hours} horas, ${minutes} minutos ${seconds} segundos</h3>`;

    if (timeLeft < 0) {
      clearInterval(countdownTime);
      $countdown.innerHTML = `<h2>${finalMessage}</h2>`;
    }
  }, 1000);
}
