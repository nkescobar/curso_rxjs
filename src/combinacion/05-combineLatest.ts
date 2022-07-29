import { combineLatest, fromEvent } from "rxjs";
import { map } from 'rxjs/operators';

// const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
// const click$ = fromEvent(document, 'click');

// combineLatest(
//   [
//     keyup$.pipe(pluck('type')),
//     click$.pipe(pluck('type'))
//   ]
// ).subscribe(console.log);

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@email.com';

input2.placeholder = '****';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

const getInputStrem = (elem: HTMLElement) => fromEvent<KeyboardEvent>(elem, 'keyup')
.pipe(
  map<KeyboardEvent, string>(evento => evento.target['value']),
)

combineLatest(
  [
    getInputStrem(input1),
    getInputStrem(input2)
  ]
).subscribe(console.log);
