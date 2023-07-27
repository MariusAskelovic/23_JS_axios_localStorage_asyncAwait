'use strict';
console.log('axiosPost.js file was loaded');

const url = 'https://jsonplaceholder.typicode.com/users';

// create new post

const newPostObj = { title: 'foo', body: 'bar', userId: 1 };

// siusti fetch posta kad sukurti nauja posta
fetch(url, {
  method: 'POST',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify(newPostObj),
})
  .then((resp) => resp.json())
  .then((result) => {
    console.log('result ===', result);
  })
  .catch((error) => {
    console.warn('ivyko klaida:', error);
  });
