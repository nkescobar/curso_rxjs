import { Observer, Observable, Subject } from 'rxjs';

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

const intervalo$ = new Observable<number>(_subs => {
  const intervalId = setInterval(
    ()=> _subs.next(Math.random()), 1000);

    return () => {
      clearInterval(intervalId);
      console.log('Intervalo destruido');
    }
});

/**
 * 1 Casteo multiple
 * 2 Tambien es un observer
 * 3 Next, error, complete
 */
const subject$ = new Subject();

const subscription =intervalo$.subscribe(subject$);

const subs = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3000)