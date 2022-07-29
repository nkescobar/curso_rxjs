import { concat, interval, take } from 'rxjs';
// concat
/**recibe observables como argumento, iterable o arreglo
 * el concat crea un nuevo observable, 
 */

const interval$ = interval(1000);

concat(
  interval$.pipe(take(3)),
  interval$.pipe(take(2)),
  [1,2,3,4]
  ).subscribe(console.log)
