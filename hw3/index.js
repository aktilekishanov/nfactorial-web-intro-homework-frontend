"use strict";

// // 1. Работа с операторами

let userCity = prompt("Which city are you from?", "");
if (userCity == "") {
    alert("Please, input your city");
} else {
    alert("You are from " + userCity);
}

// // 2. Работа с условиями

let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2,3');
    break;
}

// 3. Работа с циклами(loops)
// 3.1. For loop

let sum = 0;
for (let i = 0; i <= 100; i += 2) {
    sum += i;
}
console.log(sum);

// 3.2. While loop

sum = 0;
let i = 0;
while (i <= 100){
    sum += i;
    i += 2;
}
console.log(sum);
