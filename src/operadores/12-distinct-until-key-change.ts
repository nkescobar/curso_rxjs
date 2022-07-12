
//DIstinc until key change
// 

import { distinctUntilKeyChanged, from } from "rxjs";



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
  distinctUntilKeyChanged('nombre')
)
.subscribe(console.log);

