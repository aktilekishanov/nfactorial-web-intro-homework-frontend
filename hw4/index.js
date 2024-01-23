
// TASK 1
function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}
  

// TASK 2
function pow(x, n) {
    let res = 1;
    for ( i = 0; i < n; i++)
        res *= x;
    return res;
}


// TASK 3
let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
);

// // TASK 4 
// let arr = [5, 2, 1, -10, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr); // 8, 5, 2, 1, -10


// // TASK 5
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// let names = users.map(items => items.name);
// alert( names ); // Вася, Петя, Маша


// // TASK 6

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));

// alert( usersMapped[0].id );// 1
// alert( usersMapped[0].fullName ); // Вася Пупкин


// // TASK 7

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// const getAverageAge = (array) => {
//     let sum = 0;
//     array.forEach(element => sum += element.age);
//     return sum / array.length;
// }

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28