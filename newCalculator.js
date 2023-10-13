function calculator(string) {
    const operator = string.match(/[\*+-\/]/g) // математический оператор
    const digits = string.split(/[\/\*\+-]/g) // цифры в виде строки - ПРОМЕЖУТОЧНЫЙ МАССИВ
    const newDigits = [] // проверяем на арабскую цифру или NaN, основной рабочий массив
    let rome1 = null
    let rome2 = null
    let preResult = [] // массив римских чисел
    let convertToRomanFromArabic = null // результат арабских переводим в римские
    let result = null

    digits.map(digit => { // вырезал пробелы лишние
        newDigits.push(digit.trim())
    })

    const RomeDigits = {
        '': '0',
        'I': '1',
        'II': '2',
        'III': '3',
        'IV': '4',
        'V': '5',
        'VI': '6',
        'VII': '7',
        'VIII': '8',
        'IX': '9',
        'X': '10',
        'XI': '11',
        'XII': '12',
        'XIII': '13',
        'XIV': '14',
        'XV': '15',
        'XVI': '16',
        'XVII': '17',
        'XVIII': '18',
        'XIX': '19',
        'XX': '20',
        'XXI': '21',
        'XXII': '22',
        'XXIII': '23',
        'XXIV': '24',
        'XXV': '25',
        'XXVI': '26',
        'XXVII': '27',
        'XXVIII': '28',
        'XXIX': '29',
        'XXX': '30',
        'XXXI': '31',
        'XXXII': '32',
        'XXXIII': '33',
        'XXXIV': '34',
        'XXXV': '35',
        'XXXVI': '36',
        'XXXVII': '37',
        'XXXVIII': '38',
        'XXXIX': '39',
        'XL': '40',
        'XLI': '41',
        'XLII': '42',
        'XLIII': '43',
        'XLIV': '44',
        'XLV': '45',
        'XLVI': '46',
        'XLVII': '47',
        'XLVIII': '48',
        'XLIX': '49',
        'L': '50',
        'LI': '51',
        'LII': '52',
        'LIII': '53',
        'LIV': '54',
        'LV': '55',
        'LVI': '56',
        'LVII': '57',
        'LVIII': '58',
        'LIX': '59',
        'LX': '60',
        'LXI': '61',
        'LXII': '62',
        'LXIII': '63',
        'LXIV': '64',
        'LXV': '65',
        'LXVI': '66',
        'LXVII': '67',
        'LXVIII': '68',
        'LXIX': '69',
        'LXX': '70',
        'LXXI': '71',
        'LXXII': '72',
        'LXXIII': '73',
        'LXXIV': '74',
        'LXXV': '75',
        'LXXVI': '76',
        'LXXVII': '77',
        'LXXVIII': '78',
        'LXXIX': '79',
        'LXXX': '80',
        'LXXXI': '81',
        'LXXXII': '82',
        'LXXXIII': '83',
        'LXXXIV': '84',
        'LXXXV': '85',
        'LXXXVI': '86',
        'LXXXVII': '87',
        'LXXXVIII': '88',
        'LXXXIX': '89',
        'XC': '90',
        'XCI': '91',
        'XCII': '92',
        'XCIII': '93',
        'XCIV': '94',
        'XCV': '95',
        'XCVI': '96',
        'XCVII': '97',
        'XCVIII': '98',
        'XCIX': '99',
        'C': '100'
    }
    const romeNums = Object.keys(RomeDigits)
    for (const num of romeNums) { // если аргументы не арабские числа - в промежуточные переменные получу буквы римских чисел
        if (newDigits[0] === num) {
            rome1 = RomeDigits[num]
        }
        if (newDigits[1] === num) {
            rome2 = RomeDigits[num]
        }
    }

    // в промежуточный массив пушу римские значение, чтобы дальше провести вычисления и видоизменить их
    preResult.push(rome1)
    preResult.push(rome2)

    

    // решение на арабские цифры
    if (typeof newDigits[0] === 'string' && typeof newDigits[1] === 'string') { 
        if (operator[0] == '+') {
            result = +newDigits[0] + +newDigits[1] + []
        } else if (operator[0] == '-') {
            result = +digits[0] - +digits[1] + []
        } else if (operator[0] == '*') {
            result = +newDigits[0] * +newDigits[1] + []
        } else if (operator[0] == '/') {
            result = Math.trunc(+newDigits[0] / +newDigits[1]) + []
        } 
    } 

    // решение на римские цифры
    if (preResult[0] !== null && preResult[1] !== null) {
        for (const num of romeNums) { // переберу объект чтобы получить подходящие значения
            if (operator[0] == '+') {
                convertToRomanFromArabic = +preResult[0] + +preResult[1] + [] // результат в виде числа записываю в промежуточную переменную
                if (convertToRomanFromArabic === RomeDigits[num]) {
                    result = num // конвертирую число в римскую цифру
                }
            } else if (operator[0] == '-') {
                convertToRomanFromArabic = +preResult[0] - +preResult[1] + []
                if (convertToRomanFromArabic === RomeDigits[num]) {
                    result = num
                } else if (convertToRomanFromArabic <= 0) {
                    result = ''
                }
            } else if (operator[0] == '*') {
                convertToRomanFromArabic = +preResult[0] * +preResult[1] + []
                if (convertToRomanFromArabic === RomeDigits[num]) {
                    result = num
                }
            } else if (operator[0] == '/') {
                convertToRomanFromArabic = Math.trunc(+preResult[0] / +preResult[1]) + []
                if (convertToRomanFromArabic === RomeDigits[num]) {
                    result = num
                } 
            } 
        }

    }

    console.log(digits, newDigits, preResult)

    if (digits[0].match(/[A-Z]/) && digits[1].match(/[0-9]/)) {
        throw Error
    }
    if (digits[0].match(/[0-9]/) && digits[1].match(/[A-Z]/)) {
        throw Error
    }

    if (result == null || string.length <= 2 || operator.length > 1 || digits[0] > 10 || digits[1] > 10 || preResult[0] > 10 || preResult[1] > 10 || newDigits[1] == 0 || newDigits[0] == 0) {
        throw Error
    } else {
        return result
    }

}

console.log(calculator('5/1'))


