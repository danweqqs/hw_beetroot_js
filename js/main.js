'use strict';

let userName = 'Daniil';
let userSurname = 'Sorokin';
let fullName = userName + ' ' + userSurname;
let userFullName = `${userName} ${userSurname}`;

// let 1name = 'Daniil';
// let user-name = 'Daniil';
// let const = 'Daniil';
// let let = 'Daniil';
// let user name = 'Daniil';

// варіанти коментарів:

// однорядковий (Ctrl + /)

/*
   багаторядковий
   (Shift + Alt + A)
*/

let user = prompt('Enter your name:');
alert(`Привіт, ${user}!`);

const current_year = new Date().getFullYear();
let birthYear = prompt('Enter your year of birth:');
let age = current_year - birthYear;
alert(`You are ${age} years old.`);

let side = prompt('Enter the length of the side of the square (centimeter):');
let perimeter = side * 4;
alert(`Perimeter of the square = ${perimeter} centimeter`);

let radius = prompt('Enter the radius of the circle (centimeter):');
let circleArea = Math.PI * radius ** 2;
alert(`Circle area = ${circleArea.toFixed(2)} centimeter²`);

let distance = prompt('Enter the distance between cities (km):');
let time = prompt('How many hours do you want to arrive?');
let speed = distance / time;
alert(`To make it, you need to move at a speed of ${speed.toFixed(1)} km/h`);

const USD_TO_EUR = 0.86;
let dollars = prompt('Enter amount in USD:');
let euros = dollars * USD_TO_EUR;
alert(`${dollars} USD = ${euros.toFixed(2)} EUR`);


console.log('That*s all.');
