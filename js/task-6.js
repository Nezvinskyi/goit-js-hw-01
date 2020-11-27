'use strict';

let input = 0;
let total = 0;

while (input != null) {
  input = prompt('Введи число');

  if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += Number(input);
  }

}
 
console.log('Общая сумма:', total);
