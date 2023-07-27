'use strict';
console.log('axios.js file was loaded');

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
  })
  .catch(console.warn);
