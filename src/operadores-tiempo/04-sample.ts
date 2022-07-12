import { interval, fromEvent, sample } from 'rxjs';

//Sample

/** EMite el ultimo valor emitido por el
 *  observable hasta que el otro observable que esta dentro del sample emita otro valor */

const interval$ = interval(5000);
const click$ = fromEvent(document, 'click');

interval$.pipe(
  sample(click$)
).subscribe(console.log);