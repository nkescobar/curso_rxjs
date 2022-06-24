import { fromEvent, Observer } from 'rxjs';

/**Eventos del DOM
 * Crea un Observable que emite eventos de un tipo
 * específico provenientes del destino del evento dado.
 */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
  next: value => console.log('next: ', value)
};

src1$.subscribe(({x,y}) => {
  console.log(x,y);
});
src2$.subscribe((evento: KeyboardEvent ) => {
  console.log(evento.key);
});