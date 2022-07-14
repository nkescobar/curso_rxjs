import { fromEvent, tap } from 'rxjs';


// Formulario 

const form = document.createElement('form');

const inputEmail = document.createElement('input');
const inputPass =  document.createElement('input');
const submitBtn = document.createElement('button');
const br1 = document.createElement('br');
const br2 = document.createElement('br');

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@requres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = '123';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail,br1, inputPass,br2,submitBtn , );
document.querySelector('body').append(form);

//STrems

const submitForm$ = fromEvent(form, 'submit')
                    .pipe(
                      tap(ev => ev.preventDefault())
                    )
