import { fromEvent, map, tap } from 'rxjs';
const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod vitae arcu a ultrices. Curabitur ut metus consectetur, congue magna quis, rhoncus ligula. Maecenas eu dignissim ligula, ullamcorper scelerisque nibh. Vestibulum vulputate lectus et libero hendrerit bibendum. Fusce vel diam in urna congue convallis. Mauris congue diam eu ligula tempor, vel condimentum nunc ullamcorper. Donec at dui a sem rhoncus vestibulum. Nam luctus vestibulum erat, id congue metus condimentum vitae. Morbi id lobortis dui, sed rhoncus lorem. Mauris pharetra dapibus convallis. Donec dictum lacus in nisl finibus iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi dapibus justo at ex volutpat varius. Curabitur nec metus eu neque gravida aliquam.
<br><br>
Morbi ullamcorper eget lacus vel volutpat. Vivamus mollis orci non placerat rutrum. Nullam at sollicitudin dui. Mauris cursus vestibulum nulla, vel porttitor tortor varius nec. Morbi orci turpis, eleifend quis orci vel, consectetur fermentum libero. Nunc eu orci sit amet nisi molestie tristique eget tristique tortor. Suspendisse pulvinar blandit purus fermentum mattis.
<br><br>
Duis sit amet velit eget libero tincidunt accumsan vehicula quis ante. Cras non vestibulum lectus. Nam mollis sem ac felis porttitor, vel vulputate magna pellentesque. Nullam et vestibulum eros, nec sollicitudin erat. Duis feugiat massa vitae ex iaculis, eu vehicula dui scelerisque. Quisque pellentesque enim id enim porttitor dapibus. Maecenas enim mauris, posuere at accumsan ut, faucibus eget ligula. Aliquam nisi mauris, posuere et felis at, varius tristique ipsum. Suspendisse nec urna mollis, pretium nulla a, rutrum arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dapibus nibh id cursus efficitur.
<br><br>

Donec semper quam elit. Sed at libero at libero elementum venenatis. Proin sagittis nunc a convallis ullamcorper. Nunc sed velit porttitor, sodales nibh id, sagittis lacus. Pellentesque lorem eros, iaculis ac augue ut, sodales rutrum odio. Pellentesque facilisis, justo eget mattis sagittis, turpis neque feugiat purus, ut vehicula metus urna eget augue. Vestibulum dictum sagittis massa. Vestibulum a magna sed erat commodo laoreet id a nunc. Sed tellus ante, viverra id venenatis eu, mollis at ex. Curabitur sem mi, fermentum a nibh id, condimentum porta tellus. Aliquam consectetur pellentesque nunc, sed ultrices nisi dictum porta. Vivamus blandit, velit eu blandit fermentum, turpis eros ullamcorper ipsum, sed lacinia tellus lectus id lorem. Nulla iaculis molestie accumsan. Donec venenatis ex et tempor pulvinar. Duis congue nibh lacus, et vestibulum dui facilisis at. Sed id facilisis diam.
<br><br>

Fusce pretium lacus quis neque vulputate porttitor. Donec sem sem, lacinia cursus nunc vitae, posuere vehicula risus. Phasellus mollis magna posuere, convallis lorem in, eleifend sem. Donec pulvinar ipsum quis ultricies sodales. Duis a nulla feugiat, tincidunt mauris ac, tincidunt dolor. Nullam a fermentum lectus, sodales volutpat quam. Sed convallis elit fringilla, ultrices diam quis, vulputate lorem. Curabitur vitae dignissim est, nec aliquet dui. Fusce ac ante ut diam ullamcorper rutrum quis a libero. Morbi accumsan consequat fermentum.

<br><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget felis diam. Integer tempus bibendum libero, eget suscipit leo rhoncus sollicitudin. Etiam gravida eleifend nulla, sed aliquam elit efficitur quis. In lobortis dolor et massa malesuada, id luctus urna tincidunt. Morbi sodales non tortor sit amet tincidunt. Donec vulputate, risus vitae ultrices aliquam, arcu urna vestibulum tortor, eget ultrices lectus nibh sed enim. Duis pretium eget risus vitae efficitur. Nunc tristique et justo at vulputate. Vestibulum nulla lorem, aliquet eget erat non, venenatis pellentesque erat. In hac habitasse platea dictumst. Nunc dapibus dui massa, et ullamcorper augue lacinia in.
<br><br>

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sodales porttitor vehicula. Cras pharetra aliquet massa ac molestie. Curabitur sed eros at est tincidunt viverra. Curabitur ornare augue a ipsum auctor, vitae pretium augue mollis. Cras dictum gravida nisl. Nulla vitae lacus rhoncus, sagittis est nec, consequat magna. Proin posuere eget erat ac ultrices. Morbi non neque velit. Donec finibus placerat cursus. Ut faucibus faucibus ultrices.
<br><br>

Phasellus non faucibus neque. Cras aliquet augue a augue venenatis, non dapibus quam cursus. Aenean mollis pulvinar purus, vel tempus urna interdum ut. Maecenas facilisis ligula at fringilla consequat. Praesent dapibus ante eget ex fermentum maximus. Donec iaculis, dolor id aliquet tincidunt, ex nisi sagittis erat, sed tempus diam metus quis orci. Vestibulum eget erat lorem. Nulla urna arcu, semper sed augue ut, hendrerit scelerisque risus. Curabitur convallis quis nulla ut dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi.
<br><br>

Curabitur fermentum felis ut iaculis posuere. Duis posuere nisl eget leo placerat efficitur. Quisque sit amet volutpat felis. Vivamus malesuada cursus commodo. Mauris tincidunt leo at placerat tincidunt. Duis quam neque, pretium et sem at, lobortis bibendum ex. Suspendisse vitae nisi pellentesque, tristique felis ac, consequat nisi.
<br><br>

Sed non sem nec diam fringilla sagittis. Sed turpis leo, hendrerit non sodales aliquam, volutpat ut metus. Curabitur nisi diam, lacinia lobortis dapibus a, ornare sit amet ligula. In ullamcorper elit ligula, at feugiat dolor consectetur id. Integer massa massa, faucibus a rutrum sed, blandit suscipit lacus. Quisque fermentum rutrum urna et interdum. Curabitur venenatis massa nec metus hendrerit laoreet. Mauris in luctus enim. Sed semper ullamcorper ligula ac semper. Maecenas ac ipsum at metus facilisis ultrices. Duis lobortis odio non laoreet iaculis. Maecenas a magna eros.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');

progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);


// Funcion que haga el calculo

const calcularPorcentaheScroll = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = event.target.documentElement;
 // console.log({scrollTop,scrollHeight, clientHeight});

  return (scrollTop / (scrollHeight- clientHeight))*100;
}
// Strems

const scroll$ = fromEvent(document, 'scroll');


const progress$ = scroll$.pipe(
  map(event => calcularPorcentaheScroll(event)),
  tap(valor => console.log(valor))
);

progress$.subscribe(porcentaje => {
  progressBar.style.width = `${porcentaje}%`;

});


