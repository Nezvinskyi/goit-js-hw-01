'use strict';

const total = 100;
let ordered = 50;

if (ordered > total) {
  console.log ('На складе недостаточно товаров!');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер');
}

ordered = 20;
console.log(ordered > total
  ? 'На складе недостаточно товаров!'
  : 'Заказ оформлен, с вами свяжется менеджер');

ordered = 100;
console.log(ordered > total
  ? 'На складе недостаточно товаров!'
  : 'Заказ оформлен, с вами свяжется менеджер');

ordered = 130;
console.log(ordered > total
  ? 'На складе недостаточно товаров!'
  : 'Заказ оформлен, с вами свяжется менеджер');


