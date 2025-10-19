'use strict';

// 2
function showArgumentsCount() {
  let count = 0;

  while (true) {
    let number = prompt("Введіть число (або натисніть Скасувати, щоб завершити):");

    if (number === null || number.trim() === "") {
      break;
    }
    count++;
  }
  alert(`Ви ввели ${count} чисел.`);
}

showArgumentsCount();


// 3
function compareNumbers(a, b) {
  if (a < b) {
    return "Перше число менше за друге.";
  } else if (a > b) {
    return "Перше число більше за друге.";
  } else {
    return "Числа рівні.";
  }
}

let first = Number(prompt("Введіть перше число:"));
let second = Number(prompt("Введіть друге число:"));

alert(compareNumbers(first, second));

// 4
function factorial(number) {
  if (number < 0) {
    alert("Такого факторіалу не існує");
    return;
  }

  if (number === 0 || number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

let userNumber = Number(prompt("Введіть число, для якого потрібно обчислити факторіал:"));

if (isNaN(userNumber)) {
  alert("Будь ласка, введіть коректне число");
} else {
  let result = factorial(userNumber);
  if (result !== undefined) {
    alert(`Факторіал числа ${userNumber} дорівнює ${result}`);
  }
}

// 5
function makeNumber(first, second, third) {
  let result = first + second + third;
  return Number(result);
}

let firstDigit = prompt("Введіть першу цифру:");
let secondDigit = prompt("Введіть другу цифру:");
let thirdDigit = prompt("Введіть третю цифру:");

let numberResult = makeNumber(firstDigit, secondDigit, thirdDigit);
alert("Ваше число: " + numberResult);

// 6
function calculateArea(length, width) {
  if (!width) {
    return length * length;
  } else {
    return length * width;
  }
}

let lengthValue = Number(prompt("Введіть довжину:"));
let widthValue = prompt("Введіть ширину (якщо квадрат - залиште порожнім):");

let area = calculateArea(lengthValue, widthValue ? Number(widthValue) : undefined);
alert("Площа вашої фігури дорівнює: " + area);

// 7
function isPerfectNumber(number) {
  if (number <= 1) {
    return 0;
  }

  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum = sum + i;
    }
  }
  return sum === number;
}

let inputNumber = Number(prompt("Введіть число для перевірки:"));

if (isPerfectNumber(inputNumber)) {
  alert("Це досконале число!");
} else {
  alert("Це не досконале число");
}

// 8 плаче в сторонці
