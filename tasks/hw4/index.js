// task1
let i=1;
while (i<3) {
    console.log('Привет!');
    i++;
}

// task2

for (let i = 1; i < 6; i++) {
    console.log(i);
    
}

task3

for (let i = 7; i < 23; i++) {
    console.log(i);
    
}

// task4

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
}

for (const name in obj) {
    console.log(`${name} - зарплата ${obj[name]} долларов`)
}


// task5 Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация — это проход цикла), и запишите его в переменную num.


let n =1000;
num = 0;
while (n>50) {
    n /=2;
    num++
}

// console.log(num);

// task6

for (let i = 3; i < 31; i+=7) {
    console.log(`сегодня пятница ${i}-e, пора готовить отчет`)
    
}



