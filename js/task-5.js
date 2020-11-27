'use strict';

let deliveryCountry, deliveryPrice;
let message;

deliveryCountry = prompt('Введите страну доставки товара');

console.log(deliveryCountry);

if (deliveryCountry === null) {
  alert('Отменено пользователем')
} else {
  switch (deliveryCountry.toLowerCase()) {
    case 'китай':
      deliveryPrice = 100;
      alert(`Страна доставки: ${deliveryCountry}. Транспортные расходы составят ${deliveryPrice} кредитов`);
      break;

    case 'чили':
      deliveryPrice = 250;
      alert(`Страна доставки: ${deliveryCountry}. Транспортные расходы составят ${deliveryPrice} кредитов`);
      break;

    case 'австралия':
      deliveryPrice = 170;
      alert(`Страна доставки: ${deliveryCountry}. Транспортные расходы составят ${deliveryPrice} кредитов`);
      break;

    case 'индия':
      deliveryPrice = 80;
      alert(`Страна доставки: ${deliveryCountry}. Транспортные расходы составят ${deliveryPrice} кредитов`);
      break;

    case 'ямайка':
      deliveryPrice = 120;
      alert(`Страна доставки: ${deliveryCountry}. Транспортные расходы составят ${deliveryPrice} кредитов`);
      break;

    default:
      alert('В Вашей стране доставка не доступна!');
  }
}
