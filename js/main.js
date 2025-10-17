'use strict';

// 1
let age = +prompt('Введіть ваш вік:');

if (isNaN(age) || age < 0) {
    alert('Некоректні дані');
} else if (age <= 11) {
    alert('Ви дитина');
} else if (age <= 17) {
    alert('Ви підліток');
} else if (age <= 59) {
    alert('Ви дорослий');
} else if (age <= 120) {
    alert('Ви пенсіонер');
} else {
    alert('Ви, мабуть, безсмертний');
}

// 2
let numKey = prompt('Введіть число від 0 до 9 для визначення символу, який розташований на цій клавіші:');
switch (numKey) {
    case '0': alert(')'); break;
    case '1': alert('!'); break;
    case '2': alert('@'); break;
    case '3': alert('#'); break;
    case '4': alert('$'); break;
    case '5': alert('%'); break;
    case '6': alert('^'); break;
    case '7': alert('&'); break;
    case '8': alert('*'); break;
    case '9': alert('('); break;
    default: alert('Некоректне число');
}

// 3
let start = +prompt('Початок діапазону:');
let end = +prompt('Кінець діапазону:');

if (isNaN(start) || isNaN(end)) {
    alert('Некоректні дані!');
} else if (end < start) {
    alert('Кінець має бути більшим за початок!');
} else {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    alert(`Сума чисел: ${sum}`);
}

// 4
let a = +prompt('Введіть перше число для пошуку НСД:');
let b = +prompt('Введіть друге число для пошуку НСД:');

while (b !== 0) {
    let remainder = b;
    b = a % b;
    a = remainder;
}

alert(`НСД: ${a}`);

// 5
let n = +prompt('Введіть число для підрахунку усіх дільників:');
let result = '';

for (let i = 1; i <= n; i++) {
    if (n % i == 0) result += i + ' ';
}

alert('Дільники: ' + result);

// 6
let num = prompt('Введіть п’ятирозрядне число:');

if (num.length !== 5 || isNaN(num)) {
    alert('Некоректне число!');
} else if (num[0] === num[4] && num[1] === num[3]) {
    alert('Це паліндром!');
} else {
    alert('Це не паліндром!');
}

// 7
let purchase = +prompt('Введіть суму покупки:');
let discount = 0;

if (purchase >= 200 && purchase < 300) discount = 3;
else if (purchase >= 300 && purchase < 500) discount = 5;
else if (purchase >= 500) discount = 7;

let total = purchase - (purchase * discount / 100);
alert(`До оплати: ${total} грн (знижка ${discount}%)`);

// 8
let positive = 0, negative = 0, zero = 0, even = 0, odd = 0;

for (let i = 1; i <= 10; i++) {
  let n = +prompt(`Введіть число ${i}:`);

  if (n > 0) positive++;
  else if (n < 0) negative++;
  else zero++;

  if (n % 2 === 0) even++;
  else odd++;
}

alert(`додатніх: ${positive}, від'ємних: ${negative}, нулів: ${zero}, парних: ${even}, непарних: ${odd}`);


// 9
let day = 1;

while (confirm(`День №${day}. Хочеш побачити наступний?`)) {
  day++;
  if (day > 7) day = 1;
}

// 10
alert('Загадай число від 0 до 100');

let min = 0;
let max = 100;

while (true) {
  let guess = Math.floor((min + max) / 2);
  let reply = prompt(`Твоє число більше, менше чи дорівнює ${guess}? (>, <, =)`);

  if (reply === '=') {
    alert(`Твоє число: ${guess}`);
    break;
  } else if (reply === '>') {
    min = guess + 1;
  } else if (reply === '<') {
    max = guess - 1;
  }
}

// 2️⃣ Таблиця множення -------------------- (🔁 подвійний цикл)
for (let i = 2; i <= 9; i++) {
    console.log(`Таблиця множення для ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('-------------------');
}


// 3️⃣ Наступна дата ----------------------
let day1 = +prompt('Введіть день:');
let month = +prompt('Введіть місяць:');
let year = +prompt('Введіть рік:');

let date = new Date(year, month - 1, day1);
date.setDate(date.getDate() + 1);

alert(`Наступна дата: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`);