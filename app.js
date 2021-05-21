let categorias = {};
let resultado = {};
let nombreCategoria = [];
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
  fetch("https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326", {
    Headers: {
      Authorization:
        "Bearer APP_USR-1850140775408492-052114-6b8ecc3a7ad457469737e9f2d1f0c224-101318101",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      resultado = res;
      imprimirEnConsola(resultado);
    });
}
function imprimirEnConsola(datos) {
  let obj = JSON.parse(JSON.stringify(datos));

  for (var key1 in obj) {
    if (key1 == "results") {
      recorrerObjeto(obj[key1]);
    }
  }
}

function recorrerObjeto(obj) {
  obj.forEach((element) => {
    traerNombreCategoria(element["category_id"]).then((r) => console.log(r));
  });
  crearString(obj);
}

function traerNombreCategoria(itemName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        fetch(`https://api.mercadolibre.com/categories/${itemName}`)
          .then((res) => res.json())
          .then((res) => {
            console.log(res.name);
            nombreCategoria.push(res.name);
          })
      );
    }, 3000);
  });
}
function crearString(obj) {
  console.log(nombreCategoria);
  obj.forEach((element, index) => {});
  /*
  console.log(
    `Id: {${element["id"]}} Titulo: {${element["title"]}} Id Categoria: {${element["category_id"]}} Nombre de la categoria ${nombreCategoria}`
  );
  */
}
function imprimirCadena(a) {}

init();
