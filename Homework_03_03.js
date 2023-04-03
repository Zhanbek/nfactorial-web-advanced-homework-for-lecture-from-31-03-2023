/*
Работа с условиями.
1. Перепишите этот блок кода с использованием оператора switch.
let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
*/

let a = +prompt('a?', '');

console.log(a); // string

a = +a;

console.log(a); // number

switch(a) {
    case 0: 
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
        alert('2,3');
        break;
    case 3:
        alert('2,3');
        break;            
}