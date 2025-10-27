'use strict';


let shoppingList = [
    { name: 'iPhone 17', quantity: 1, isBought: false, price: 45000, total: 45000 },
    { name: 'MacBook Air M3', quantity: 1, isBought: true, price: 58000, total: 58000 },
    { name: 'AirPods Pro 2', quantity: 2, isBought: false, price: 12000, total: 24000 },
    { name: 'Apple Watch SE', quantity: 1, isBought: true, price: 12500, total: 12500 }
];

// 1 вивести весь список покупок
function showList() {
    console.log('Список покупок:');

    console.log('Не куплено: ');
    for (let item of shoppingList) {
        if (!item.isBought) {
            console.log(`${item.name} — ${item.quantity} шт × ${item.price} грн = ${item.total} грн`);
        }
    }
    console.log('Куплено: ');
    for (let item of shoppingList) {
        if (item.isBought) {
            console.log(`${item.name} — ${item.quantity} шт × ${item.price} грн = ${item.total} грн`);
        }
    }
}


// 2 позначити товар як куплений
function buyProduct(productName) {
    const product = shoppingList.find(item => item.name.toLowerCase() === productName.toLowerCase());

    if (product) {
        product.isBought = true;
        console.log(`Товар "${product.name}" позначено як куплений.`);
    } else {
        console.log(`Товар "${productName}" не знайдено у списку.`);
    }
}


// 3 видалити товар зі списку
function deleteProduct(productName) {
    const newList = shoppingList.filter(item => item.name.toLowerCase() !== productName.toLowerCase());

    if (newList.length === shoppingList.length) {
        console.log(`Товар "${productName}" не знайдено у списку.`);
    } else {
        shoppingList = newList;
        console.log(`Товар "${productName}" видалено зі списку.`);
    }
}


// 4 додати товар у список або оновити кількість, якщо він уже є
function addProduct(name, quantity, price) {
    const existingProduct = shoppingList.find(item => item.name.toLowerCase() === name.toLowerCase());

    if (existingProduct) {
        existingProduct.quantity += quantity;
        existingProduct.total = existingProduct.quantity * existingProduct.price;
        console.log(`Оновлено кількість: ${existingProduct.name} (${existingProduct.quantity} шт, ${existingProduct.total} грн).`);
    } else {
        shoppingList.push({
            name,
            quantity,
            price,
            total: quantity * price,
            isBought: false
        });
        console.log(`Додано новий товар: ${name}.`);
    }
}


// 5 підрахунок загальної суми всіх товарів
function calcTotalSum() {
    let total = 0;
    for (let item of shoppingList) {
        total += item.total;
    }
    console.log(`Загальна сума покупок: ${total} грн.`);
    return total;
}


// 6 підрахунок суми куплених або некуплених товарів
function calcSumByStatus(isBought) {
    let total = 0;

    for (let item of shoppingList) {
        if (item.isBought === isBought) {
            total += item.total;
        }
    }
    const statusText = isBought ? 'куплених' : 'ще не куплених';
    console.log(`Сума ${statusText} товарів: ${total} грн.`);
    return total;
}

showList();
buyProduct('AirPods Pro 2');
addProduct('iPad Air', 1, 18000);
addProduct('iPhone 17', 1, 45000);
deleteProduct('Apple Watch SE');

showList();

calcTotalSum();
calcSumByStatus(true);
calcSumByStatus(false);
