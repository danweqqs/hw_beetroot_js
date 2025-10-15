'use strict';

// 1
let a = 0.1;
let b = 0.2;
let result = +(a + b).toFixed(1);
console.log('0.1 + 0.2 =', result);

// 2
let strNum = "1";
let number = 2;
let correctSum = Number(strNum) + number;
console.log('"1" + 2 =', correctSum);

// 3
let flashGb = prompt("Вкажіть обсяг флешки у ГБ:");
let flashMb = flashGb * 1024;
let fileSize = 820;
let filesCount = Math.floor(flashMb / fileSize);
alert(`На флешку поміститься ${filesCount} файлів розміром 820 Мб`);
console.log(`На флешку поміститься ${filesCount} файлів по 820 МБ`);

// 4
let money = prompt("Вкажіть суму грошей у гаманці:");
let price = prompt("Вкажіть ціну однієї шоколадки:");

let countChoco = Math.floor(money / price);
let rest = (money - countChoco * price).toFixed(2);

alert(`Ви можете купити ${countChoco} шоколадок, здача: ${rest} грн`);
console.log(`Можна купити ${countChoco} шоколадок, здача: ${rest}`);


// 5
let numb = +prompt("Введіть тризначне число:");
let reversed = (numb % 10) * 100 + (Math.floor(numb / 10) % 10) * 10 + Math.floor(numb / 100);

alert(`Ваше число задом наперед: ${reversed}`);
console.log(`Задом наперед: ${reversed}`);

// 6
let deposit = +prompt("Введіть суму вкладу (грн):");
let percent = 5;

let income = deposit * (percent / 100) * (2 / 12);
alert(`Нараховані відсотки за 2 місяці: ${income.toFixed(2)} грн (з процентною ставкою депозиту 5% річних)`);
console.log(`Відсотки за 2 місяці: ${income.toFixed(2)} грн`);


// 7
console.log('2 && 0 && 3 →', 2 && 0 && 3); // 0
console.log('2 || 0 || 3 →', 2 || 0 || 3); // 2
console.log('2 && 0 || 3 →', 2 && 0 || 3); // 3