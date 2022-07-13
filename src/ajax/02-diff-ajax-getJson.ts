
import { of, catchError } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';


const url = 'https://httpbin.org/delay/1';

const manejaErrores = (response: AjaxError) => {
  console.warn('Error: ', response.message)
  return of({
    ok: false,
    usuarios: []
  })
}
const obs$= ajax.getJSON(url, {
  'Content-type': 'application/json',
  'mi-token': 'ABC'
}).pipe(
  catchError(manejaErrores)
);

const obs2$= ajax(url,).pipe(
  catchError(manejaErrores)
);

obs$
.subscribe(
  {
    next: response => {
      console.log('response', response)
    },
    complete: () => console.log('COmplete'),
  }
);

obs2$
.subscribe(
  {
    next: response => {
      console.log('response ajax', response)
    },
    complete: () => console.log('COmplete'),
  }
);