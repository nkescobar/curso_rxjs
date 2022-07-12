import { fromEvent, map, sampleTime } from 'rxjs';

// SampleTime

// Permite obtener el ultimo valor emitido en un intervalo de tiempo

const click$ = fromEvent<MouseEvent>(document, 'click');


click$
.pipe(
  map(({x,y}) => ({x,y})),
  sampleTime(2000)
)
.subscribe(console.log);