import {  of} from "rxjs";

 const obs$ = of(...[1,2,3,4,5,6]);
//const obs$ = of([1,2,], {a:1, b:2}, function(){}, true);

console.log('Inicio de obs$');
obs$.subscribe({
  next: (value) => { console.log('next', value) },
  error: () => { /* TODO document why this method 'error' is empty */ },
  complete: () => console.log('terminamos la secuencia')
});

console.log('FIn del obs$');
