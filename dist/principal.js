import Cl_anfitrion from "./Cl_anfitrion.js";
import Cl_invitado from "./Cl_invitado.js";
const invitado1 = new Cl_invitado("Liz", 5, 0);
const invitado2 = new Cl_invitado("Juan", 0, 10);
const invitado3 = new Cl_invitado("Carla", 5, 20);
const invitado4 = new Cl_invitado("Luis", 10, 10);
const anfitrion = new Cl_anfitrion();
anfitrion.procesarInvitado(invitado1);
anfitrion.procesarInvitado(invitado2);
anfitrion.procesarInvitado(invitado3);
anfitrion.procesarInvitado(invitado4);
let salida = document.getElementById("salida");
if (salida !== null) {
    salida.innerHTML = `
       ${invitado1.nombre} trajo ${invitado1.productos()} productos <br>
       ${invitado2.nombre} trajo ${invitado2.productos()} productos <br>
       ${invitado3.nombre} trajo ${invitado3.productos()} productos <br>
       ${invitado4.nombre} trajo ${invitado4.productos()} productos <br>
       <br>
       En total hay ${anfitrion.totalCerv()} cervezas y ${anfitrion.totalHam()} hamburguesas              
`;
}
else
    console.error("No se pudo encontrar el elemento con el id 'salida'.");
