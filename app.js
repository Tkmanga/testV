function mostrarMeDatos() {
  fetch("datos.json")
    .then((respuesta) => respuesta.json())
    .then((respuesta) => console.log(respuesta));
}

mostrarMeDatos();
