import { from, reduce, scan, map } from 'rxjs';

const numbers = [1,2,3,4,5];

const totalAcumulador = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
}

from(numbers).pipe(
  reduce(totalAcumulador, 0)
).subscribe(console.log)

//Scan
from(numbers).pipe(
  scan(totalAcumulador, 0)
).subscribe(console.log)

interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  {id: 'fher', autenticado: false, token: null},
  {id: 'fher', autenticado: true, token: 'ABC'},
  {id: 'fher', autenticado: true, token: 'ABC123'},
];

const state$ = from( user ).pipe(
  scan<Usuario, any>( (acc: any, cur: any) => {
      return { ...acc, ...cur }
  }, { edad: 33 })
);

const id$ = state$.pipe(
  map( (state: { id: any; }) => state.id )
);

id$.subscribe( console.log );
