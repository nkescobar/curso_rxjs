

// DIstinc
/**NOs deja pasar unicamente los valores que no han sido
 * previamente emitidos por mi observable  */

 import { distinct, from, of } from "rxjs";

 const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);
 
 numeros$
 .pipe(
   distinct()// aplica el ===
 )
 .subscribe(console.log);
 
 
 interface Personaje {
   nombre: string;
 }
 
 const personajes:Personaje[] = [
   {nombre: 'Megaman'},
   {nombre: 'X'},
   {nombre: 'Zero'},
   {nombre: 'Dr willy'},
   {nombre: 'X'},
   {nombre: 'Megaman'},
   {nombre: 'Kathy'},
   {nombre: 'Kathy'},
   {nombre: 'Megaman'},
   {nombre: 'JUlian'},
   {nombre: 'Megaman'},
   {nombre: 'Megaman'},
   {nombre: 'Megaman'},
   {nombre: 'Megaman'},
   {nombre: 'Megaman'},
 
 ]
 
 from(personajes)
 .pipe(
   distinct(personaje => personaje.nombre)
 )
 .subscribe(console.log);