function mostrarMeDatos() {
  console.log(
    fetch("datos.json")
      .then((res) => res.json())
      .then((res) => imprimirEnConsol(res))
  );
}
function imprimirEnConsol(datos) {
  let obj = JSON.parse(JSON.stringify(datos));
  console.log(obj);
  for (const prop in obj) {
    if (Object.keys(prop) === "site_id") {
      console.log("lo tenemos");
    }
  }

  for (let index = 0; index < Object.keys(obj); index++) {
    console.log(index);
    console.log("asd");
  }
  console.log("probando");
}
mostrarMeDatos();
