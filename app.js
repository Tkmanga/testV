let categorias = {};
let resultado = {};
const fetch = require("node-fetch");
const fs = require("fs");
const archivo = "texto.txt";
let txtAdicional = "\nAqui va mas info";

function buscar() {
  if (fs.existsSync(archivo)) {
    fs.appendFile(archivo, txtAdicional, (err) => {
      if (err) throw "no se pudo adjuntar mas texto";
      console.log("Archivo creado/modificado");
    });
  } else {
    buscar();
  }
}

function init() {
  fetch("https://api.mercadolibre.com/categories/MLA1720")
    .then((res) => res.json())
    .then((res) => imprimirEnConsol(res));
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
  let nombreCategoria = consultar(obj[0]["category_id"]);

  obj.forEach((element) => {
    console.log(
      `${element["id"]} ${element["title"]} ${element["category_id"]}`
    );
  });
}

function consultar() {}

init();
