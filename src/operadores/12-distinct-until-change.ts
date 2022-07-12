
// DIstinc
/**NOs deja pasar unicamente los valores que no han sido
 * previamente emitidos por mi observable  */

//DIstinc until CHange
// Emite valores siempre y cuando la emision anterior no sea la misma

import { distinct, distinctUntilChanged, from, of } from "rxjs";

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

numeros$
.pipe(
  distinctUntilChanged()// aplica el ===
)
.subscribe(console.log);


interface Personaje {
  nombre: string;
}

const personajes:Personaje[] = [
  {nombre: 'Megaman'},
  {nombre: 'X'},
  {nombre: 'Zero'},
  {nombre: 'Dr willy'},
  {nombre: 'X'},
  {nombre: 'Megaman'},
  {nombre: 'Kathy'},
  {nombre: 'Kathy'},
  {nombre: 'Megaman'},
  {nombre: 'JUlian'},
  {nombre: 'Megaman'},
  {nombre: 'Megaman'},
  {nombre: 'Megaman'},
  {nombre: 'Megaman'},
  {nombre: 'Megaman'},

]

from(personajes)
.pipe(
  distinctUntilChanged((anterior, actual) => anterior.nombre === actual.nombre)
)
.subscribe(console.log);

