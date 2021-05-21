let categorias = {};
let resultado = {};
function mostrarMeDatos() {
  console.log(
    fetch("datos.json")
      .then((res) => res.json())
      .then((res) => imprimirEnConsol(res))
  );
}
function imprimirEnConsol(datos) {
  let obj = JSON.parse(JSON.stringify(datos));
  resultado = obj["results"];
  categorias = obj["available_filters"][0]["values"];

  for (var key1 in obj) {
    if (key1 == "results") {
      recorrerObjeto(obj[key1]);
    }
  }
}

function recorrerObjeto(obj) {
  obj.forEach((element) => {
    //${element["id"]} ${element["title"]} ${element["category_id"]} ${traerNombreCategoria[]}
  });
}

function traerNombreCategoria(a) {
  return categorias[a];
}

function buscarCategoria(params) {}
mostrarMeDatos();
