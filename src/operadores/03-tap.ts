import { map, range , tap} from "rxjs";

const numeros$ = range(1,5);

numeros$
.pipe(
  tap(x => {
    console.log('antes  ', x)
    return 100;
  }),
  map(val => val *10),
  tap({
    next: valor => console.log('Despues ', valor),
    complete: ()=> console.log('Termino todo')
  })
)
.subscribe(val => console.log('subs', val));