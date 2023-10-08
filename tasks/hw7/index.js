
// task1
/*
let word = 'js';

console.log(word.toUpperCase());

// task2

const stringArray = (arr, str) => {

    console.log(arr.filter(el=> el.toLowerCase().startsWith(str.toLowerCase())));
}

stringArray(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
stringArray(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
stringArray(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

// task3

let num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// task4


console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));


// task5

function randomArray () {
    let arr = [];
    for (let i = 1; i < 10; i++ ) {
        arr.push(Math.round(Math.random()*10));
        console.log(arr);
}
}

randomArray();


// task6

function getRandomArrNumbers(randomNum) {
    let arr = [];
    for (let i = 0; i < Math.floor(randomNum/2); i++ ) {
        arr.push(Math.round(Math.random()*randomNum));
        
}
console.log(arr);


}
getRandomArrNumbers(7);


// task7

function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

console.log(getRandomInt(5, 10));

// task8

let currentDate = new Date();

console.log(currentDate);

// task9

let currentDate = new Date();
console.log(+currentDate);
let day = currentDate.getDate();
console.log(day);
// let days73 = 73 * 24 * 60 * 60 * 1000;
// let searchDate = currentDate + days73;
// let daysAfter73 = new Date(searchDate);
// console.log(daysAfter73);

let futureDate = currentDate.setDate(73+day);


console.log(futureDate);


*/



// task10



function userDate () {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let myDate = new Date(); 

    let hour = myDate.getHours(); 
    let minute = myDate.getMinutes(); 
    let second = myDate.getSeconds(); 

    let fullDate = `Сегодня: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} - это ${days[myDate.getDay()]} 
    Время: ${hour}:${minute}:${second}`;

    console.log(fullDate);
}

userDate();