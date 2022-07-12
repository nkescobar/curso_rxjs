

import { fromEvent, interval, map, skip, takeUntil, takeWhile } from 'rxjs';
// TakeUntil
/** Nos permite emitir valores hasta que otro observable emita su primer valor */

const boton = document.createElement('button');

boton.innerHTML = 'Detener timer';

document.querySelector('body').append(boton);


const counter$ = interval(1000);

//SKIP

/** SIrve para saltar u omitir x cantidad de emisiones iniciales  */

const clickBtn$ = fromEvent(boton, 'click')
.pipe(
  skip(1)
);

counter$
.pipe(
  takeUntil(clickBtn$)
)
.subscribe({
  next: value => console.log('next ', value),
  complete: () => console.log('Complete!')
})


