import { debounceTime, fromEvent, map, distinctUntilChanged } from 'rxjs';
import { pluck } from 'rxjs/operators';


//DebounceTime
// NOs ayuda a que podamos contar cuantas milesimas de segundo han pasado desde la ultima emision 
// NOs ayuda a controlar la cantidad de emisiones 

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
  debounceTime(3000),
)
.subscribe(console.log);

const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$
.pipe(
  debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
  )
.subscribe(console.log)
