/**
 * Problema número 1.
 *
 * Necesitamos que obtengas los datos de ./src/input-p1.json y generes funciones que permitan:
 *
 * 1. Retornar todos los nodos que no tienen hijos.
 * 2. Retornar todos los nodos que contienen una cantidad X (parametrizable) de hijos
 * 3. Contabilizar la cantidad de nodos totales
 * 4. Retornar todas las Sedes con 4° Medio que *SI* poseen la *Oferta Tecnología* en sus *Secciones A*
 */

const data = require("./src/input-p1.json");
console.log(data);

var nodossinhijos = []
var nodosconhijos = []
var nodosTotales = []
var sedes = []

1.

function SinHijos(data) {
    if(!data) return false //Aqui frena el codigo para ver si hay datos o informacion para traer
    
    if (!data.hijos[0]) nodossinhijos.push(data) // Si en el nodo no tiene data entonces se pushea, se le da un empuje a nodossinhijos como llame a la variable

    data.hijos.map(hijo => SinHijos(hijo)) //Aqui con la informacion obtenida recorre los nodos para ver cual es sin hijos y aplico la recursion para validar los datos de si tiene hijos o no

    return nodossinhijos // Simplemente se retorna a la variable para ver si el procedimiento se hizo correctamente
}
console.log(SinHijos(data)) // Aqui deberia mostrar en web lo explicado recientemente

2.

function ConHijos(data) {
    if(!data) return false //Aqui frena el codigo para ver si hay datos o informacion para traer

    if (!data.conhijos[1]) nodosconhijos.push(data) // Si en el nodo no tiene data entonces se pushea, se le da un empuje a nodosconhijos como llame a la variable

    data.conhijos.map(conhijos => ConHijos(hijo)) //Aqui con la informacion obtenida recorre los nodos para cer cual es con hijos y aplico la recursion para validar los datos de si tiene hijos o no

    return nodosconhijos //Simplemente se retorna a la variable para si el procedimiento se hizo correctamente
}
console.log(ConHijos(data)) //Aqui deberia mostrar en web lo explicado recientemente

3.

function NodosTotales(data) {
    if(!data) return false //Aqui frena el codigo para ver si hay datos o informacion para traer

    if (!data) contador++ // si hay data entonces se le suma uno al contador, para si ir viendo los nodos totales

    data.hijos.map( hijo => NodosTotales(hijo)) //Aqui con la informacion y/o data obtenida recorre el nodo para ver los nodos totales que hay en cada hijo

    return contador // Aqui retorna al contador para ver cuantos nodos totales hay en esta recursion o funcion
}
console.log(NodosTotales(data)) //Aqui deberia mostrar wn web lo explicado recientemente

4.

function Sedes(data) {
    //No supe como desarrollar este problema
}
console.log(Sedes(data))