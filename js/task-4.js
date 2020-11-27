'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let askQuantity, totalPrice, message;


askQuantity = prompt('Сколько дроидов Вы хотели бы купить?');
totalPrice = askQuantity * pricePerDroid

if (askQuantity === null) {
  message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else {
  message = `Вы купили ${askQuantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`
}


alert(message);