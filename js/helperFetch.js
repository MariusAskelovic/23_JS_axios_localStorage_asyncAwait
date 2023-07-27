import { getData, getDataAsync } from './modules/getData.js';
console.log('helperFetch.js file was loaded');

const url = 'https://jsonplaceholder.typicode.com/posts';

getData(url).then((posts) => {
  console.log('posts ===', posts);
  //   render(posts);
});

async function init() {
  const posts = await getData(url);
  console.log('posts Init ===', posts);
  const users = getDataAsync('https://jsonplaceholder.typicode.com/users');
  console.log('users ===', users);
  render(posts);
}
init();

const users = getDataAsync('https://jsonplaceholder.typicode.com/users');
// gausim promise
console.log('users ===', users);

function render(arr) {
  console.log('nupiesiau posts HTMLe haha');
}
