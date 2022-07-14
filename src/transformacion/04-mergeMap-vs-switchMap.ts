import { fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';


const click$ = fromEvent(document, 'click');

const interval$ = interval(1000);

click$.pipe(
 // mergeMap(() => interval$) // Mantiene todas las subscripciones activas 
  switchMap(() => interval$) // Solo mantiene una supscripcion interna activa

).subscribe(console.log)