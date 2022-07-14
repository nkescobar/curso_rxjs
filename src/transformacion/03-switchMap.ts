import { fromEvent, map, debounceTime, Observable, mergeMap } from 'rxjs';
import { ajax } from "rxjs/ajax";
import { GithubUser, GithubUsersResp } from "../interfaces";
import { pluck, switchMap } from 'rxjs/operators';
// Referencias
const body = document.querySelector('body');
const textINput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textINput, orderList);

//helpers

const mostrarUsuarios = (usuarios: GithubUser[]) => {

  orderList.innerHTML = '';
  for (const usuario of usuarios) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = usuario.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = usuario.html_url;
    anchor.text = 'Ver pagina';
    anchor.target = '_blank';
    
    li.append(img);
    li.append(' ');
    li.append(usuario.login);
    li.append(' - ');
    li.append(anchor);
    orderList.append(li);
  }
  
};

const input$ = fromEvent<KeyboardEvent>(textINput, 'keyup');

input$.pipe(
  debounceTime(500),
  //pluck<KeyboardEvent, string>('target', 'value'),
  map<KeyboardEvent, string>(evento => evento.target['value']),

  mergeMap<string, Observable<GithubUsersResp>>(texto => {
    return ajax.getJSON(`https://api.github.com/search/users?q=${texto}`);
  }),
  //pluck('items')
  map<GithubUsersResp, GithubUser[]>(response => response.items)

)
  .subscribe({
    next: response => {
      console.log(response)
      mostrarUsuarios(response);
    }
  })

  const url = 'https://httpbin.org/delay/1?arg=';
  
  input$.pipe(
    pluck('target','value'),
    switchMap(texto => ajax.getJSON(url + texto ))
  ).subscribe({
    next: response => console.log('Response', response )
  })