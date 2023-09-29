// task1

function smallerNum(a,b) {
    if (a<b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

smallerNum(2,7);

// task2

function parity(a) {
    if (a%2===0) {
        console.log('Число четное');
    } else {
        console.log('число нечетное');
    }
}

parity(4);
parity(3);

// task3.1

function logSquare(a) {
    console.log(a**2);
}

square(2);

// task3.2

function returnSquare(b) {
    return b**2;
}

square(2);


// task4

let age = prompt('Сколько Вам лет?').trim();


function greeting(age) {
    if (isNaN(age) || age == false ) {
        alert('вы ввели неправильное число')
    } else if (age>=0 && age<=12) {
        alert('Привет, друг!')    
    } else if (age>12) {
        alert('Добро пожаловать!')    
    } else {
        alert('Похоже вы еще не родились')
    }
}

greeting(age);



// task5

let c = prompt('Введите число').trim();
let d = prompt('Введите число').trim();


function isNumber(num1,num2) {
    if (isNaN(num1) || isNaN(num2) || num2 == false || num1 == false) {
        // console.log('Одно или оба значения не являются числом');
        return ('Одно или оба значения не являются числом')    
    } else {
        // console.log(num2*num1);
        return num1*num2;
    }
}

isNumber(c,d);

// task6

let n = prompt('Введите число и я возведу его в куб').trim();

function cube(n) {
    if (isNaN(n) || n == false) {
        console.log('Переданный параметр не является числом');
    } else {
        console.log(n**3);
    }
}
cube(n);


// task7

const circle1 = {
    radius: 2,
    getArea: getArea,
    getPerimeter: getPerimeter,
}
const circle2 = {
    radius: 5,
    getArea: getArea,
    getPerimeter:getPerimeter,
}

function getArea() {
    console.log(this.radius**2 * 3.14);
}

function getPerimeter() {
    console.log(this.radius*2*3.14);
}

circle1.getArea();
circle2.getPerimeter();
