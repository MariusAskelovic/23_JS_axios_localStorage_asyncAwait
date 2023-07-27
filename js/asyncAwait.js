'use strict';
console.log('asyncAwait.js file was loaded');

const url = 'https://jsonplaceholder.typicode.com/users';
const urlPosts = 'https://jsonplaceholder.typicode.com/posts';

function fetchUsers() {
  fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((atsInJs) => {
      console.log('FETCH atsInJs === ', atsInJs);
    })
    .catch((error) => {
      console.warn('FETCH ivyko klaida:', error);
    });
}
// fetchUsers();

async function fetchUsersA() {
  // await - palaukti kol grys atsakymas ir tik tada vykdyti kita eilute

  try {
    const respUsers = await fetch(url);
    const atsInJs = await respUsers.json();
    const respPosts = await fetch(urlPosts);
    const ats = await respPosts.json();
    console.log('userArr === ', atsInJs, 'posts === ', ats.slice(0, 15));
  } catch (error) {
    console.log('FETCH await ivyko klaida: ', error);
  }
}
fetchUsersA();

// async function fetchPosts() {
//   console.log('posts ===', ats);
// }

// fetchPosts();
