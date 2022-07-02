const d = document,
  n = navigator;

export default function webcam(id) {
  const $video = d.getElementById(id);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((strem) => {
        $video.srcObject = strem;
        $video.play();
      })
      .catch((err) => alert(`deu merda ${err}`));
  }
}
