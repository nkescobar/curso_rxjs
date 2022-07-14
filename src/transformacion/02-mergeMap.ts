/**Merge Map
 * 
 */

 import { mergeMap, of, interval, take, map, fromEvent, takeUntil } from 'rxjs';

 const letras$ = of('a','b','c');
 
 letras$
 .pipe(
   mergeMap((letra) => interval(1000).pipe(
     map(i => letra +i),
     take(3)
     ))
 )
 .subscribe({
   next: response => console.log('response', response),
   complete: () => console.log('Complete')
 })
 
 const mousedown$ = fromEvent(document, 'mousedown');
 const mouseup$ = fromEvent(document, 'mouseup');
 const interval$ = interval();
  
 mousedown$.pipe(mergeMap(() => interval$.pipe(
   takeUntil(mouseup$))
   )).subscribe(console.log);
  