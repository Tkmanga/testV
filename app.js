const fetch = require("node-fetch");
const fs = require("fs");
let resultado = {};
const archivo = "log.txt";

const init = async (id) => {
  const request = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?seller_id=${id}`,
    {
      Headers: {
        Authorization:
          "Bearer APP_USR-1850140775408492-052114-6b8ecc3a7ad457469737e9f2d1f0c224-101318101",
      },
    }
  );
  const data = await request.json();
  imprimirEnConsola(data);
};

const nombreC = async function (id) {
  const request = await fetch(`https://api.mercadolibre.com/categories/${id}`);
  const data = await request.json();
  return data.name;
};

const imprimirEnConsola = async (datos) => {
  let obj = JSON.parse(JSON.stringify(datos));

  for (var key1 in obj) {
    if (key1 == "results") {
      resultado = obj[key1];
    }
  }
  recorrerObjeto(resultado);
};

const recorrerObjeto = async (obj) => {
  obj.forEach((element) => {
    nombreC(element["category_id"]).then((val) => {
      buscar(
        `Id: {${element["id"]}} Titulo: {${element["title"]}} Id Categoria: {${element["category_id"]}} Nombre de la categoria: {${val}}\n`
      );
    });
  });
};

function buscar(texto) {
  if (fs.existsSync(archivo)) {
    fs.appendFile(archivo, texto, (err) => {
      if (err) throw "no se pudo adjuntar mas texto";
      console.log("Archivo creado/modificado");
    });
  } else {
    fs.writeFile("log.txt", texto, { encoding: "utf-8" }, function (error) {
      if (error) {
        console.log(`Error: ${error}`);
      } else {
        console.log("la escritura se a realizado de forma satisfactoria");
      }
    });
  }
}

init("179571326");
