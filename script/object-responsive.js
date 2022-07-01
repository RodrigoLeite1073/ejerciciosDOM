const d = document;
const w = window;

export default function responsiveMedia(
  id,
  mediaQuerry,
  mobileContent,
  desktopContent
) {
  let breakpoint = w.matchMedia(mediaQuerry);

  if (breakpoint.matches) d.getElementById(id).innerHTML = desktopContent;
  else d.getElementById(id).innerHTML = mobileContent;
}
