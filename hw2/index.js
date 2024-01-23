// TASK 1

let restaurantName = "Chez Tlek";
const EST_YEAR = 2024;
let address = "Main Street 123, TSE 10001";
let isOpen = true;
let menu = null;

let staff = {
    employer1: {
        name: "Askar",
        age: 21,
        'work position': "Manager"
    },
    employer2: {
        name: "Marat",
        age: 16,
    }
}

console.log(staff);


staff.employer1.salary = 300;
staff.employer2.salary = 100;
staff.employer2['work position'] = 'Server';
delete staff.employer1.age;
delete staff.employer2.age;

console.log(staff);


// TASK 2

let vehicle = {};
console.log(vehicle);

vehicle.brandName = 'BMW';
vehicle.model = 'X5';
console.log(vehicle);

vehicle.model = 'X1';
console.log(vehicle);

delete vehicle['model'];
console.log(vehicle);


// TASK 3

let salaries = {
    John: 100,
    Doe: 150,
    Mark: 200 
}

let sum = 0;

for (let i in salaries) {
    sum = sum + salaries[i];
}

console.log(sum);