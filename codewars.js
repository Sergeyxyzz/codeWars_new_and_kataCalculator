// заменим T на U
function DNAtoRNA(dna) {
    return dna.replaceAll(/T/g, 'U')
}

// получим количество положительных чисел и сумму отрицательных чисел
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}
countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]) // [8, -50]

// Получим только 2 слова и между ними поставим точку. Мое решение
function abbrevName(name){
    const arrNames = name.split(' ')
    const one = arrNames[0].match(/\w/).join().toUpperCase()
    const two = arrNames[1].match(/\w/).join().toUpperCase()
    let result = `${one}.${two}`
    return result
}
abbrevName("EMgkCMYIHROjjDgZ liWBWVtLtAaTnQoOhASmm") // E.L

// То же самое, но решение более компактное
const abbrevName2 = name => name.match(/\b\w/g) // получил массив, который содержит по первой букве каждого слова
                                 .join('.')// разбил массив на строку, разделив его точкой
                                 .toUpperCase() // возвел в верхний регистр
abbrevName2("EMgkCMYIHROjjDgZ liWBWVtLtAaTnQoOhASmm") // E.L

// удалил все пробелы из строки, моё решение
function noSpace(x){
    return x.replaceAll(/\s/g,'')
}
noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" ) // 88Bifk8hB8BB8BBBB888chl8BhBfd

// проверка на четное число или нет, моё решение
function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd'
}
evenOrOdd(2) // Even (значит четное)

// возьмем все true из массива и посчитаем их количество, моё решение 
function countSheeps(sheep) {
    let result = 0
    sheep.forEach(elem => {
        if (elem === true) {
            ++result
        }
    })

    return result
}
countSheeps([undefined,null,false,true,true,false,null,undefined]) // 2

// повторим строку s, количеством раз - n. моё решение
function repeatStr (n, s) {
    return s.repeat(n);
}
repeatStr(5, "Hello") // HelloHelloHelloHelloHello

// МЕТОД REDUCE!!!! ПОЛУЧИЛ CРЕДНЕЕ АРИФМЕТИЧЕСКОЕ ЗНАЧЕНИЕ СУММЫ МАССИВА, мое решение
function findAverage(array) {
    let result = null
    const reducerFunction = function(accumulator, element) {
        const newTotal = accumulator + element
        return newTotal
    }
    result = array.reduce(reducerFunction, 0)
    return array.length < 1 ? 0 : result / array.length
}
findAverage([1,2,3,4,5]) // 3

// тоже метод reduce, не мое решение, но более короткий вариант
var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}

// перевернул значения чисел, моё решение 
function invert(array) {
    const newArr = []
    array.forEach(elem => {
        if (elem < 0) {
            newArr.push(elem = elem - elem - elem)
        } else if (elem > 0) {
            newArr.push(elem = elem - elem - elem)
        } else if (elem === 0) {
            newArr.push(elem)
        } else {
            newArr = []
        }
    })

    return newArr
}
invert([1,-2,3,-4,5]) // [-1,2,-3,4,-5]

// то же самое, но чужое решение
const invert2 = array => array.map(num => -num);
 
// получим сумму чисел где каждое будет возведено в квадрат, мое решение
function squareSum(numbers){
    let result = 0
    numbers.forEach(elem => {
        result += elem**2
    })

    return result
}
squareSum([0, 3, 4, 5]) // 50

// та же самая задача, но лучшее решение (не мое)
function squareSum2(numbers){
    return numbers.reduce(function(sum, n){
        return (n*n) + sum;
    }, 0)
}

// проверил находится ли одинаковое количество букв 'o' и 'x' независимо от регистра, мое решение
function XO(str) {
    let arr = str.toLowerCase().split('')
    let x = []
    let o = []
    
    arr.forEach(elem => {
        if (elem === 'x') {
            x.push(elem)
        } else if (elem === 'o') {
            o.push(elem)
        }
    })

    return x.length === o.length ? true : false
} 
XO("Ooxx") // true

// то же самое, но лучшее решение
function XO2(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

// обычная интерполяция, мое решение
function greet(name){
    return `Hello, ${name} how are you doing today?`
}

// получить элементы которые имеют длину равную четырем, мое решение
function friend(friends){
    let arrResult = [] 
    friends.filter(elem => {
        if (elem.length === 4) {
            arrResult.push(elem)
        }
    })
    return arrResult
}
friend(["Ryan", "Kieran", "Mark"]) // Ryan, Mark

// то же самое, но лучшее решение (не мое)
function friend2(friends){
    return friends.filter(n => n.length === 4)
}

// получим сумму всех чисел от 1 до num, мое решение
var summation = function (num) {
    let result = 0
    for (let i = 0; i <= num; i++) {
        result += i
    }

    return result
}
summation(8) // 36

// получил идеальное следующее числов в квадрате, если дробное то вернет -1, мое решение
function findNextSquare(sq) {
    let result = (Math.sqrt(sq) + 1) ** 2
    if (result !== Math.round(result)) {
        result = -1
    }
    return result
}

findNextSquare(25) // 36

// разбил массив на пары и если попался одиночный символ то добавил нижнее подчеркивание. мое решение
function solution(str){
   let arr = str.match((/\w{2}/g))
   let preArr = str.split('')
   let lastElem = 0
   if (preArr.length % 2 === 1) {
    lastElem = preArr.pop()
    arr.push(lastElem + '_')
   } 
   if (str === '') {
    arr = []
   }

   return arr
}
solution("abcdefg") // ["ab", "cd", "ef", "g_"]

// то же самое, лучшее решение (не мое)
function solution2(s){
    return (s+"_").match(/.{2}/g)||[] // точка означает любой единичный символ, {2} означает что их надо разбить по 2, || [] означает что если ничего нет то пустой массив отдай
}

// РЕГУЛЯРКА, ГРУППИРОВКА, ЗАМЕНА!!! $1 - ЛОВИТ ПЕРВЫЕ 3 ЦИФРЫ, $2-ЛОВИТ ВТОРЫЕ 3 ЦИФРЫ, $3 - ЛОВИТ ПОСЛЕДНИЕ 4 ЦИФРЫ!!!. КАВЫЧКИ РАБОТАЮТ КАК ИНТЕРПОЛЯЦИЯ ВНУТРИ МОЖНО ПИСАТЬ ЧТО УГОДНО
function createPhoneNumber(numbers){
    return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,`($1) $2-$3`)
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"

// ЗАПОЛНЕНИЕ ОБЪЕКТА! СТРОКА -> МАССИВ -> ОБЪЕКТ. В объект внести ключ:значение с количество повторяющихся символов, лучшее решение, не мое.
function count (string) {  
    var count = {};
    string.split('').forEach(elem => {
       count[elem] ? count[elem]++ : count[elem] = 1; // перед знаком вопроса задали ключ, после вопроса задаются значения
    });
    return count;
  }
count('abcAa') // {a: 2, b: 1, c: 1, A: 1}

// получим одно четное число из бесконечного нечетных или одно нечетное число из бесконечного количества четных. мое решение
function findOutlier(integers){
    const odds = []
    const even = []
    let result = []

    integers.forEach(elem => {
        if (elem % 2 === 0) {
            even.push(elem)
        } else {
            odds.push(elem)
        }
    })

    if (odds.length > even.length) {
        result = even[0]
    } else {
        result = odds[0]
    }

    return result
}
findOutlier([2,6,8,10,3]) // 3

// то же самое, но лучшее решение (не мое)
function findOutlier2(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
}

// РИМСКИЕ ЦИФРЫ ТРАНСФОРМАЦИЯ (не мое решение)
function solution(number){
    var map = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    var output = '';
   
     for (var i in map) { // i - ключ объекта, map[i] - значение объекта
       while (number >= map[i]) { // пока number (аргумент) больше или равен значению объекта map (арабским цифрам)
         output += i; // в output складываются ключи в виде римских цифр
         number -= map[i]; // а сам number (аргумент) вычитает кажду итерацию значения объекта, т.е. арабскую цифру. при достижении 0 цикл остановится и получим нужный output
       }
     }
     return output;
}
solution(4) // IV

// получил числа в квадрате
function squareDigits(num){
    let result = (num + []).split('')
    let newArr = []
    result.filter(elem => {
        elem = +elem
        newArr.push(elem ** 2)
    })
    newArr = newArr.join('')
    return +newArr 
}
squareDigits(2112) / 4114

// цифры 0-4 меняем на 0 а цифры 6-9 меняем на 1. мое решение
function fakeBin(x){
    return x.replaceAll(/[0-4]/g, 0).replaceAll(/[5-9]/g, 1)
}

fakeBin('45385593107843568') // 01011110001100111

// Number.isInteger(year / 100) - является ли число целым. выводим век. но можно было задачу решить проще const century = year => Math.ceil(year/100)
function century(year) {
    return Number.isInteger(year / 100) ? year / 100 : Math.trunc((year / 100) + 1)  
}

century(1900) // 19

// вычислим является ли число идеальным квадратом, мое решение
var isSquare = function(n){
    return n < 0 || (!(Number.isInteger(Math.sqrt(n)))) ? false : true
}

isSquare(0) // true

// (значение числа меняется с отрицательного на положительное и с положительного на отрицательное если перед ним поставить минус)
function makeNegative(num) {
    return num < 0 ? num : -num
}

makeNegative(5) // -5

// расчет аренды автомобиля по дням с учетом скидок
function rentalCarCost(d) {
    if (d >= 7) {
        return d * 40 - 50
    } else if (d >= 3 && d <= 7) {
        return d * 40 - 20
    } else {
        return d * 40
    }
}

rentalCarCost(3) // 100