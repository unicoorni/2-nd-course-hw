// task1

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 10) break;
    console.log(arr[i]);
}

// task2

const arr = [1, 5, 4, 10, 0, 3];

console.log(arr.indexOf(4));

task3

const array = [1, 3, 5, 10, 20];

console.log(array.join(' '));

// task4

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = []; 
	
	for (let j = 0; j < 3; j++) {
		arr[i].push(1); 
	}
}

console.log(arr);

// task5

const arr = [1, 1, 1];
arr.push(2,2,2);
console.log(arr);

// task6

const arr = [9, 8, 7, 'a', 6, 5];
arr.sort();
arr.pop();
console.log(arr);

// task7

const arr = [9, 8, 7, 6, 5];
let userNum = Number(prompt('Введите число от 1 до 10: '));

if (arr.includes(userNum)) {
    alert('Такое число есть в массиве');
} else {
    alert('Такого числа нет((')
}

// task8

let words = 'abcdef';
const splitWords = words.split('')
const rvrsWords = splitWords.reverse();
console.log(rvrsWords);

// task9

const doubleArr = [[1, 2, 3,],[4, 5, 6]];

unitedArr = [...doubleArr[0], ...doubleArr[1]];
console.log(unitedArr);

// task10

const arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = Math.round(Math.random() * 10);
}
console.log(arr);
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
        sum = arr[i] + arr[i + 1];
    } else {
        sum = arr[i];
    }
    console.log(sum);

}

// task11

function squareArr (arr) {
    console.log(arr.map(el=> (el**2)));
}

const randomArr = [1, 2, 3, 3];

squareArr(randomArr);


// task12

const getLengthWords = arr => arr.map(str => str.length);

console.log(getLengthWords(['один', 'два', 'восемь']));


// task13

function filterPositive(array) {
   
    console.log(array.filter(el => (el<0)));
  }
  
  filterPositive([-1, 0, 5, -10, 56]); 
  filterPositive([-25, 25, 0, -1000, -2]);

// task14

const arr = [];
const evenArr = [];
 for (let i = 0; i < 10; i++ ) {
    arr.push(Math.round(Math.random()*10));
    if (arr[i] % 2 === 0) {
        evenArr.push(arr[i]);
    }
 }
console.log(arr);
console.log(evenArr);