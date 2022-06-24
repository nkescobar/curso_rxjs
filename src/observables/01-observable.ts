import { Observable, Observer } from "rxjs";

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

const obs$ = new Observable<string>(_subs => {
  _subs.next('Hola');
  _subs.next('mundo');

  _subs.next('Hola');
  _subs.next('mundo');
  // Forzar un error
  //const a = undefined;
  //a.nombre = 'Nas';

  _subs.complete();
  // No sale despues del complete
  _subs.next('Hola');
  _subs.next('mundo');
});

obs$.subscribe(observer);








