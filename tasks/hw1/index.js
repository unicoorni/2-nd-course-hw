// task1
// let a = 10;
// alert(a);
// a= 20;
// alert(a);

// task2
// let a = '9 января 2007 года';
// alert(a);

// task3
// let a = 2;
// let b = 10;
//  alert(a+b);
//  alert(b - a);
//  alert(b/a);
// alert(b*a);

// task4
// let a = 'Брендан Эйх ';
// alert(a);

// task5
//  let result = 2**5;
//  alert(result);

// task6

// let a = 9;
// let b = 2;
// alert(a%b);

// task7

// let num = 1;
// num +=  5;
// num -= 3;
// num *= 7;
// num /=  3;
// num += 1;
// num -= 1;
// alert(num);

// task8

// let age = prompt('Сколько вам лет??');
// alert(age);

// task9

let user = {
    name: 'caroline',
    age: 21,
    isAdmin: true,
};
console.log(user);

// task9.1
user['city Of Residence'] = 'moscow';

// task9.2

user.age = 3333;

// 9.3

delete user['city Of Residence'];

// task9.4

let info = prompt('какую информацию Вы хотите узнать о пользователе?');
alert(user[info]);

// task10

let name = prompt('как Вас зовут?');

alert(`Привет ${name}!`);
