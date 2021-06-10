module.exports = class Nodo {
    nombre = null;
    tipo = null;
    hijos = [];

    constructor(nombre, tipo, hijos = []) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.hijos = hijos;
    }
}