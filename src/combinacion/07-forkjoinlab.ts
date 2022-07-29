import { forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';


const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'nkescobar';

forkJoin({
  usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
  repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`),
  gist: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),

}).subscribe({
  next: response => {
    console.log('response', response);
  },
  error: error => {
    console.warn('Error: ', error);
  },
}
)