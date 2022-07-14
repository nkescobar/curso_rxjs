import { fromEvent, interval, take } from "rxjs";
import { concatMap } from 'rxjs/operators';


const click$ = fromEvent(document, 'click');

const interval$ = interval(500).pipe(take(3));

click$
.pipe(
  concatMap(() => interval$), // Se ejecuta cada observable uno despues del otro
)
.subscribe(console.log);