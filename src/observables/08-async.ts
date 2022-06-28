
import { asyncScheduler} from 'rxjs';



setTimeout(() => {
  console.log('HOla');
}, 3000);


const saludar = () => console.log('HOla mundo');
const saludarNOmbre = (nombre: string) => {
  return console.log(`Hola ${nombre}`);
};

asyncScheduler.schedule(saludar, 2000);

asyncScheduler.schedule(saludarNOmbre, 2000, 'Nasly');

//Intervalo se ejecuta periodicamente en lazos de tiempo

const subs = asyncScheduler.schedule(function(state) {
  console.log('State: ', state);
  this.schedule(state +1, 1000);



}, 3000, 0 );


  // setTimeout(() => {
  //   subs.unsubscribe();
  // }, 6000);


asyncScheduler.schedule(() => subs.unsubscribe(), 6000);