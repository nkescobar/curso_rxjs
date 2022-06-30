
import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';


range(1, 10).pipe(
  filter((value: number, index: number) => {
    return value % 2 === 1
  })
).subscribe(console.log);

interface Personaje {
  tipo: string;
  nombre: string
}

const personajes: Personaje[]= [
  {
    tipo: 'heroe',
    nombre: 'Batman'
  },
  {
    tipo: 'heroe',
    nombre: 'Robin'
  },
  {
    tipo: 'villano',
    nombre: 'Joker'
  }
];

 from(personajes).pipe(
  filter((personaje: Personaje) => personaje.tipo == 'heroe')
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
                .pipe(
                  map((event: KeyboardEvent) => event.code),
                  filter((code: string) => code  === 'Enter')
                );

keyup$.subscribe(console.log);