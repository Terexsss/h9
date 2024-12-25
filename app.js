// app.js

const math = require('./math');

const num1 = 5;
const num2 = 3;

const sum = math.add(num1, num2);
const difference = math.subtract(num1, num2);

console.log(`Сумма: ${sum}`); // Выведет: Сумма: 8
console.log(`Разность: ${difference}`); // Выведет: Разность: 2