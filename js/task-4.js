let credits = 23580;
let pricePerDroid = 3000;
let askQuantity;
let message;

askQuantity = prompt('Сколько дроидов Вы хотели бы купить?');

if (askQuantity === null) {
  message = 'Отменено пользователем!';
} else if (askQuantity * pricePerDroid > credits) {
  message = 'Недостаточно средств на счету!';
} else {
  message = `Вы купили ${askQuantity} дроидов, на счету осталось ${credits - askQuantity * pricePerDroid} кредитов.`
}


alert(message);