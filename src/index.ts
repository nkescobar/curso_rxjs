
import { of, from, Observer} from 'rxjs';

/** Of = toma argumentos y genera una secuencia 
 *from = array, primise, iterable, observable.
*/

const observer: Observer<any> = {
  next: value  => {
    console.log('next: ', value);
  },
  error: error => {
    console.error('Error: ', error);
  },

  complete: () => {
    console.info('Completado! ');
  },

}

//const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);
// const source$ = from('Nasly');

const source$ = from(fetch('https://api.github.com/users/nkescobar'));

source$.subscribe(async(resp) => {
  console.log(resp);

  const dataResp = await resp.json();
  console.log(dataResp);
});
