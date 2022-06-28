
import {interval, Observer, timer} from 'rxjs';

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


const fecha = new Date();
fecha.setSeconds(fecha.getSeconds() + 5);

const interval$ = interval(1000);
const timer1$ = timer(2000);
const timer2$ = timer(fecha);

console.log('INicio');
// interval$.subscribe(observer);
timer2$.subscribe(observer);

console.log('FIn');




