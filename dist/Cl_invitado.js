export default class Cl_invitado {
    constructor(n, h, c) {
        this._nombre = n;
        this._hamburguesa = h;
        this._cervezas = c;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set hamburguesa(hamburguesa) {
        this._hamburguesa = +hamburguesa;
    }
    get hamburguesa() {
        return this._hamburguesa;
    }
    set cervezas(cervezas) {
        this._cervezas = +cervezas;
    }
    get cervezas() {
        return this._cervezas;
    }
    //req 1 cuanto productos trajo el invitado
    productos() {
        return this.cervezas + this.hamburguesa;
    }
}
