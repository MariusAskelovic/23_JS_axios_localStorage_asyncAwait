'use strict';
console.log('storageObj.js file was loaded');

const newPostObj = {
  name: 'James',
  age: 55,
  isWorking: false,
};

// ===
// kad irasyt i localStorage objekta arba masyva
// turim paversti ji stringu

// localStorage value turi buti string

// padarom string
const objInString = JSON.stringify(newPostObj);
localStorage.setItem('user', objInString);

// gryzta string
const isStorageGryzo = localStorage.getItem('user');
// verciam i javascript objekta
const objIsString = JSON.parse(isStorageGryzo);
console.log(objIsString);
