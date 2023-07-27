'use strict';
console.log('localStorage.js file was loaded');

const els = {
  num1: document.getElementById('num1'),
  btn1: document.getElementById('btn1'),
  btn2: document.getElementById('btn2'),
};

let sk1Storage = localStorage.getItem('sk1');
if (sk1Storage === null) {
  sk1Storage = 0;
}
let numVal = Number(sk1Storage);
els.num1.textContent = numVal;
els.btn1.addEventListener('click', () => {
  numVal = numVal + 5;
  els.num1.textContent = numVal;
  localStorage.setItem('sk1', numVal);
});
els.btn2.addEventListener('click', () => {
  numVal = numVal - 5;
  els.num1.textContent = numVal;
  localStorage.setItem('sk1', numVal);
});
