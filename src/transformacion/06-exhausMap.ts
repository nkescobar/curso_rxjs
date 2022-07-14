
 import { fromEvent, interval, take } from "rxjs";
 import { exhaustMap } from 'rxjs/operators';
 
 /**exhausMap
  * SOlo mantiene una supscripcion activa antes de añadir
  *  otra supscripcion para que emita los valores
  */
 
  const click$ = fromEvent(document, 'click');
  
  const interval$ = interval(500).pipe(take(3));
  
  click$
  .pipe(
    exhaustMap(() => interval$), //Solo mantiene uno activo
  )
  .subscribe(console.log);