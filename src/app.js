/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //Llamo a los elementos por su "id" HTML para que interactuen con el JS//

  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuses();
  });
};

//Genero cada matriz con los valores que quiero en cada categoría//

let generateExcuses = () => {
  let articulo = ["Mi"];
  let quien = ["canario", "abuelo", "gato", "vecino", "jefe", "hermano", "ex"];
  let accion = [
    "se comió mi",
    "ha robado mi",
    "destruyó mi",
    "ha vomitado en mi",
    "ha quemado mi"
  ];
  let que = ["proyecto de JavaScript", "llavero", "coche", "portátil", "cena"];
  let como = [
    "mientras dormía!",
    "mientras estaba cenando!",
    "cuando yo no miraba!",
    "mientras estaba en el trabajo!",
    "porque me odia!"
  ];

  //Me devuelve una palabra aleatoria generando un numero random de minimo 0 y como máximo la longitud de mi matriz//

  let numArticulo = Math.floor(Math.random() * articulo.length);
  let numQuien = Math.floor(Math.random() * quien.length);
  let numAccion = Math.floor(Math.random() * accion.length);
  let numQue = Math.floor(Math.random() * que.length);
  let numComo = Math.floor(Math.random() * como.length);

  //Me devuelve mi excusa completa al crear la funcion return concatenando los resultados de cada generacion random de las matrices del paso anterior//

  return (
    articulo[numArticulo] +
    " " +
    quien[numQuien] +
    " " +
    accion[numAccion] +
    " " +
    que[numQue] +
    " " +
    como[numComo]
  );
};
