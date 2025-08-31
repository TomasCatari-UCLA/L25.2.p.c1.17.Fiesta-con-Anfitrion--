export default class Cl_invitado {
  private _nombre: string;  
  private _hamburguesa: number;
  private _cervezas: number;
  constructor(n:string, h:number, c:number) {
    this._nombre = n;
    this._hamburguesa = h;
    this._cervezas = c;
  }

 set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get nombre(): string {
    return this._nombre;
  }
  set hamburguesa(hamburguesa: number) {
    this._hamburguesa = +hamburguesa;
  }

  get hamburguesa(): number {
    return this._hamburguesa;
  }

   set cervezas(cervezas: number) {
    this._cervezas = +cervezas;
  }

  get cervezas(): number {
    return this._cervezas;
  }

  //req 1 cuanto productos trajo el invitado
productos(): number{
 return this.cervezas + this.hamburguesa
}

}
