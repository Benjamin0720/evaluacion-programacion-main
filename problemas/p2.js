/**
 * Problema número 2.
 * 
 * Genera un script/algoritmo/función que sea capaz de transformar los datos de input-p2.csv
 * en un arból de estructura similar al problema de p1 utilizando la estructura de Nodo.js
 */
const fs = require(fs); //Aqui uso la libreria para convertir csv a array
const { isArray } = require("utiles"); //Aqui creo el requerimiento del array
const csv = fs.readFileSync("./src/input-p2.csv") //Digo donde se encuentra el archivo csv
const Nodo = require("./src/Nodo");
const raiz = new Nodo("root", "Raíz");

var array = csv.toString().split("\r\n"); //Aqui declaro la variable

//Agregar a raiz toda la estructura solicitada.
//...

//No supe como desarrollar este problema.
console.log(raiz);