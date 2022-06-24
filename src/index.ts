import { of, range } from 'rxjs';

/**Crea un Observable que emite una secuencia
 *  de números dentro de un rango específico.
 * Emite una secuencia de números en un rango.
 */

const src$ = of (1,2,3,4,5);
const rango$ = range(1,10);

console.log('Inicio');
src$.subscribe(console.log);
console.log('fin');

console.log('Inicio rangce');
rango$.subscribe(console.log);
console.log('fin range');
