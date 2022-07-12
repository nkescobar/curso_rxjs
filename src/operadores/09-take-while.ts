import { fromEvent, map, takeWhile } from 'rxjs';
// TakeWHile
/** Permite recibir valores mientras la condicion se cumpla */


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
  map(({x, y}) => ({x,y})),
  //takeWhile(({y}) => y <= 150),
  takeWhile(({y}) => y <= 150, true), // IMPRIME EL ULTIMO VALOR QUE IRRUMPE EL OBSERVABLE
)
.subscribe({
  next: val => console.log('next ', val),
  complete: () => console.log('complete')
})