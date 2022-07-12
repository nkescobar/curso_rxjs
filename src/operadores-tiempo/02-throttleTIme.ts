

//throttleTime ES UTIL PARA CONTROLAR LAS EMISIONES DE OBSERVABLES QUE EMITEN VALORES FRECUENTEMENTE

import { fromEvent, throttleTime, pluck, distinctUntilChanged, asyncScheduler } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
  throttleTime(3000),
)
.subscribe(console.log);

const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$
.pipe(
  throttleTime(1000, asyncScheduler, {
    leading: true,
    trailing: true
  }),
    pluck('target', 'value'),
    distinctUntilChanged()
  )
.subscribe(console.log)
