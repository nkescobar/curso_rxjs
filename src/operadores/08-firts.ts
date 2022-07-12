import { first, fromEvent, of, map } from 'rxjs';

//FIRST

/**Completa el observable con el primer valor que se encuentre en una condiccion  */

const click$=  fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
  map(({clientX, clientY}) => ({clientX, clientY})),
  first(event => event.clientY >= 150)
)
.subscribe({
  next: valor => console.log('next', valor),
  complete: () => console.log('complete'),
});



const numeros$ = of(1,2,3,4,5);

numeros$
.pipe(
  first(value => value > 3)
)
.subscribe({
  next: val => console.log('next: ' ,val),
  complete: () => console.log('Complete'),
})
