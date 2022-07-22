const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBouncingClientRect,
    limitsStage = $stage.getBouncingClientRect;

  switch (e.keyCode) {
    case 37:
      if (limitsBall.left > limitsStage.left) {
        x--;
        e.preventDefault();
      }
      break;
    case 38:
      if (limitsBall.top > limitsStage.top) {
        y--;
        e.preventDefault();
      }
      break;
    case 39:
      if (limitsBall.right < limitsStage.right) {
        y++;
        e.preventDefault();
      }
      break;
    case 40:
      if (limitsBall.bottom > limitsStage.bottom) {
        x++;
        e.preventDefault();
      }
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x}px, ${y * 10}px)`;
}

export function shortcuts(e) {
  if (e.altKey) {
    if (e.key === "a") alert("activado alerta");
  }
}
