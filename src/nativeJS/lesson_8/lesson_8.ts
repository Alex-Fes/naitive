// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {

    return nums.reduce((acc, init) => acc + init, 0)

}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался


    let isTriangle =  a + b >= c && c + a >= b && b + c >= a;

    if (a === c && c === b && b === a) {
        return '10'
    } else if (isTriangle && (a === c || c === b || b === a)) {
        return '01'
    } else if (isTriangle) {
        return '11'
    } else if (!isTriangle) {
        return '00'
    }
    return ''

}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    let arrNumb = number.toString().split('')
    let numb = []
    for (let i = 0; i < arrNumb.length; i++) {
        numb.push(Number(arrNumb[i]))
    }
    return numb.reduce((acc, int) => acc + int, 0)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    const resultArr = arr.reduce(
        (acc, num, index) =>
            index % 2 === 0 ? [acc[0] + num, acc[1]] : [acc[0], acc[1] + num] , [0,0]
    )
    return resultArr[0] > resultArr[1]
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    let result = []
    for ( let i = 0; i < array.length; i++) {
        if (array[i] > 0 &&  array[i] % 1 === 0) {
            result.push(array[i] * array[i])
        }
    }
    return result
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.

    if(N === 0) {
        return 0
    }
    // В return стоит "заглушка", чтоб typescript не ругался
    return N + sumFirstNumbers(N - 1)
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const money = []
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    for (let i = 0; i < banknotes.length; i++) {
        while (amountOfMoney >= banknotes[i]){
            amountOfMoney -= banknotes[i]
            money.push(banknotes[i])
        }
    }
    return money
}