/*
Работа с циклами(loops).

1. Посчитайте сумму всех четных чисел в промежутке 1-100. Выведите в консоль.
*/

let sum = 0;
for (let i = 2; i < 100; i += 2) {
    sum += i;    
}
console.log(`sum = ${sum}`);

/*
2.  Перепишите цикл for на while.

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/

let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}
