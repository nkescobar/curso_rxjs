import { Observer, Observable, Subscriber } from 'rxjs';

const observer: Observer<any> = {
  next: value  => {
    console.log('next: ', value);
  },
  error: error => {
    console.warn('Error: ', error);
  },

  complete: () => {
    console.info('Completado! ');
  },
}

const intervalo$ = new Observable<number>(_subscriber => {
  // Crear un contador 1,2,3,4,5 .....
  let count = 0;
  const interval =setInterval(()=>{
    count++;
    _subscriber.next(count);
    console.log(count);
  }, 1000);

  setTimeout(()=> {
    _subscriber.complete();
  }, 2500);
  return() => {
    clearInterval(interval);
    console.log('intervalo destruido');
  }
});

const subs = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs.add(subs2.add(subs3));
setTimeout(()=> {
  subs.unsubscribe();
 // subs2.unsubscribe();
 // subs3.unsubscribe();

}, 6000);
