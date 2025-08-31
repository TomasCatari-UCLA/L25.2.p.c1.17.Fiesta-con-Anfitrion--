export default class Cl_anfitrion {
    constructor() {
        this.hambAnf=10;
        this.cervAnf=30;
        this.acHambInv = 0;
        this.acCervInv = 0;
    }
    procesarInvitado(i) {
        // req 2 cuantos productos en total de cada uno hay en la fiesta
        this.acHambInv += i.hamburguesa;
        this.acCervInv += i.cervezas;
    }
    totalHam() {
        return this.acHambInv + this.hambAnf ;
    }
    totalCerv() {
        return this.acCervInv + this.cervAnf ;
    }
}
