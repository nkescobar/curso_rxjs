import { ajax } from "rxjs/ajax";



const url = 'https://httpbin.org/delay/1';

ajax.get(url, {
  'Content-type': 'application/json',
  'mi-token': 'ABC'
});

ajax.post(url, {
  id: 1,
  nombre: 'Nasly'
}, {
  'Content-type': 'application/json',
  'mi-token': 'ABC'
}).subscribe({
  next: response => {
    console.log('Response POst: ', response);
  }
});

ajax.put(url, {
  id: 1,
  nombre: 'Nasly'
}, {
  'Content-type': 'application/json',
  'mi-token': 'ABC'
}).subscribe({
  next: response => {
    console.log('Response PUt: ', response);
  }
});

ajax.delete(url, {
  'Content-type': 'application/json',
  'mi-token': 'ABC'
}).subscribe({
  next: response => {
    console.log('Response Delete: ', response);
  }
})

ajax({
  url,
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    'mi-token': 'ABC'
  },
  body: {
    id: 1,
    nombre: 'Nasly'
  }

}).subscribe({
  next: response => {
    console.log('Response POST : ', response);
  }
});