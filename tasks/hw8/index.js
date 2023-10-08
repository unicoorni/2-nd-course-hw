// task1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 console.log(people.sort(((a, b) => a.age > b.age ? 1 : -1)));


// task2

function isPositive(arr) {
   
        if (arr >=0) {
            return true;
        } else {
            return false;
        }
    }

function isMale(arr) {
        for (const key in arr) {
            if (key == "gender" && arr[key] == 'male') {
                return true;
                // console.log(true);
            } else {
                return false;
                // console.log(false);

            }
        }

    }

    const people = [
        {name: 'Глеб', gender: 'male'},
        {name: 'Анна', gender: 'female'},
        {name: 'Олег', gender: 'male'},
        {name: 'Оксана', gender: 'female'}
     ];
     

function filter(arr, ruleFunction) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
    
}
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

// task3

function timeLoop() {

    function currentDate() {
        let date = new Date();  
        console.log(date);
    }
    
    let showDate = setInterval(currentDate,3000);

    
    setTimeout(() => { clearInterval(showDate); console.log('30 секунд прошло'); }, 30000);
}

timeLoop();

// task4

function delayForSecond(callback) {
  setTimeout(callback,1000);    
  
}



delayForSecond(function () {
  console.log('Привет, Глеб!');
})


// task5 ничего не получилось


function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
		if(cb) { 	
            cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}


delayForSecond(sayHi('Глеб'));
