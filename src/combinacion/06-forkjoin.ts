/**recibe varios observable como argumentos 
 * retorna el valor cuando todos los observables se completan
 * tienen que ser finitos los observables poque si no nunca se completa
 */

 import { of, interval, take, delay, forkJoin } from 'rxjs';

 const numeros$ = of(1,2,3,4,5);
 const interval$ = interval(1000).pipe(take(3));
 const letras$ = of('a', 'b', 'c').pipe(delay(3500));
 
 forkJoin([
   numeros$,
   interval$,
   letras$
 ]).subscribe(console.log)
 
 forkJoin([
   numeros$,
   interval$,
   letras$
 ]).subscribe(resp => {
   console.log('numeros', resp[0]);
   console.log('intervalos', resp[1]);
   console.log('letras', resp[2]);
 })
 
 forkJoin({
   num: numeros$,
   int: interval$,
   let: letras$
 }
 ).subscribe(resp => {
   console.log('resp', resp);
   console.log('resp numeros', resp.num);
   console.log('resp interval', resp.int);
   console.log('resp letras', resp.let);
 
 })