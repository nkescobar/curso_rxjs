import { ajax } from 'rxjs/ajax';
import { startWith, endWith } from 'rxjs';
const loadingDIV= document.createElement('div');
loadingDIV.classList.add('loading');
loadingDIV.innerHTML = 'Cargando';
const body = document.querySelector('body');

ajax.getJSON('https://reqres.in/api/users/2?delay=3')
.pipe(
  startWith(true),
  endWith(false),
)
.subscribe(response=> {
  if (response == true) {
    body.append(loadingDIV);
  }else {
    document.querySelector('.loading').remove();
  }
  console.log('response', response)
})