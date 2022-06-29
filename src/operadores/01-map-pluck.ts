import { range, fromEvent } from 'rxjs';
import {map, pluck} from 'rxjs/operators';


range(1,5).pipe(
  map<number,string>((value: number) => (value * 10).toString())
  )
.subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
  map((event: KeyboardEvent) => event.code)
)


const keyupPluck$ = keyup$.pipe(
  pluck('target', 'baseURI')
);

const keyupMapTo$ = keyup$.pipe(
  map(()=> 'tecla presionada')
);


keyup$.subscribe(code => console.log('keyup ', code));

keyupCode$.subscribe(code => console.log('map ', code));
keyupPluck$.subscribe(code => console.log('pluck ', code));

