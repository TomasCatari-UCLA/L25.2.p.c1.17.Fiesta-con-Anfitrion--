import Cl_invitado from './Cl_invitado.js';

export default class Cl_anfitrion {
  private hambAnf:number;
  private cervAnf:number;
  private acHambInv:number;
  private acCervInv: number; 

  constructor() {
    this.hambAnf = 10;
    this.cervAnf= 30; 
    this.acHambInv = 0;
    this.acCervInv = 0;
  
  }
  procesarInvitado(i: Cl_invitado): void {

    // req 2 cuantos productos en total de cada uno hay en la fiesta
    this.acHambInv += i.hamburguesa;
    this.acCervInv += i.cervezas

    }

 totalHam(): number{
    return this.acHambInv + this.hambAnf;
  }

  totalCerv(): number{
    return this.acCervInv + this.cervAnf;
  }

}