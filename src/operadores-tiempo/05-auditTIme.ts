import { auditTime, fromEvent, map, tap } from 'rxjs';
// eliminar imports alt + shif +o
//AuditTime

/** EMite el ultimo valor que ha sido emitido por un observable en un  tiempo determinado*/

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
  map(({x})=> x),
  tap(val => console.log('tap', val)),
  auditTime(2000)
)
.subscribe(console.log)