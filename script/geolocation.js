const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    opitions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const success = (position) => {
      let cdr = position.coords;
      $id.innerHTML = `
      <h2>Posicion Actual</h2>
      <h3>Latitud: ${cdr.latitude}</h3>
      <h3>Lingitud: ${cdr.longitude}</h3>
      <h3>Margen de error: ${cdr.accuracy.toFixed(2)}mts.</h3>
      <h4><a href="https://www.google.com/maps/@${cdr.latitude},${
        cdr.longitude
      },19z" target="_blank" rel="noopener">Ver en Maps</a></h4>`;
    },
    error = (err) => {
      $id.innerHTML = `<p>${err.message}</p>`;
    };
  n.geolocation.getCurrentPosition(success, error, opitions);
}
