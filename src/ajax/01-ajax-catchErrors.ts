
import { ajax, AjaxError } from 'rxjs/ajax'
import { catchError, of, pluck } from 'rxjs';


const url = 'https://api.github.com/userXXXs?per_page=5';


const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response;
}
const fetchPromesa = fetch(url);

fetchPromesa
  .then(manejaErrores)
  .then(response => response.json())
  .then(console.log)

  .catch(err => console.warn('Error en usuarios', err))

const atrapaError = (err: AjaxError) => {
  console.warn('Error en: ', err.message)
  return of([]);
}

ajax(url)
  .pipe(
    pluck('response'),
    catchError(atrapaError)
  )
  .subscribe(
    {
      next: response => {
        console.log('response', response)
      },
      complete: () => console.log('COmplete'),
    }
  );


