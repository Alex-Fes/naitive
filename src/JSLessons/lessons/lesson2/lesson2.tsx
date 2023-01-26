

console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// function sum (a: number) {
//     return function (b: number) {
//         return a + b;
//     }
// }
//
// console.log(sum(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// function makeCounter () {
//     let count = 0
//     return function () {
//       return  ++count
//     }
// }
// const counter = makeCounter()
// const counter1 = makeCounter()
// console.log(counter())
// console.log(counter())
// console.log(counter1())
// console.log(counter())

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// function makeCounter (num: number) {
//     let count = num
//     return {
//         increase: function (){
//            return ++num
//         },
//         decrease: function (){
//             return --num
//         },
//         reset: function () {
//             return  num = 0
//         },
//         set: function (value: number) {
//             return num = value
//         }
//     }
// }
// const count = makeCounter(0)
//
// console.log(count.increase())
// console.log(count.increase())
// console.log(count.increase())
// console.log(count.decrease())
// console.log(count.reset())
// console.log(count.set(5))

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10


function superSum (...arg: any) {
    let count = arg[0]
    let sum = 0
    function plus (a: number, b: number) {
        return a + b
    }
    if ( arg[0] === 0) return 0
    else {
        for( let i = 0; i < count; i++) {
           sum += arg[0]
        }
    }
    return sum
}

// function superSum (num: number, ...args: any[]) {
// //     let sum = 0
// //     let count = num
// //     function counter (...args: any[]) {
// //         return sum += args[0]
// //     }
// //     if(num === 0) return num
// //     else {
// //         sum += args[0]
// //         return counter(count -1 , ...args)
// //     }
// // return sum
//
//     // return function curry(func) {
//     //
//     //     return function curried(...args) {
//     //         if (args.length >= func.length) {
//     //             return func.apply(this, args);
//     //         } else {
//     //             return function(...args2) {
//     //                 return curried.apply(this, args.concat(args2));
//     //             }
//     //         }
//     //     };
//     // }
//
//     // let sum = num;
//     // function f(n: any) {
//     //     if (arguments.length === 0) {
//     //         return sum;
//     //     }
//     //     if (arguments.length > 1) {
//     //         for (let i = 0; i < arguments.length; i++) {
//     //             sum += arguments[i];
//     //         }
//     //     } else {
//     //         sum += n;
//     //     }
//     //     return f;
//     // }
//     // return f;
//
//     // let result = 0
//     // // function sum(result: number, arg: number) {
//     // //          return result + arg
//     // //      }
//     //
//     // if(num === 0) {
//     //     return 0
//     // } else {
//     //     for( let i = 0; i < num; i++){
//     //         superSum( ...arg)
//     //     }
//     // }
//
//     // function sum(result: number, arg: number) {
//     //     return result + arg
//     // }
//     // for( let i = 0; i < num; i++) {
//     //
//     // }
//     // if(num === 0) {
//     //         return 0
//     //     } else {
//     //     return function carried (...args: any) {
//     //          let result = 0
//     //         if (num <= args.length) {
//     //             return result + args
//     //         }
//     //         else {
//     //             return function (...args1: any) {
//     //                 // @ts-ignore
//     //                 return curried.apply(this, args.concat(...args1))
//     //             }
//     //         }
//     //     }
//     //
//     // }
//
// }
//
console.log(superSum(0)) //0
// @ts-ignore
console.log(superSum(3)(2)(5)(3)) //10
// @ts-ignore
console.log(superSum(3)(2)(5,3)) //10
// @ts-ignore
console.log(superSum(3)(2,5,3)) //10
// @ts-ignore
console.log(superSum(3)(2,5)(3)) //10
// @ts-ignore
console.log(superSum(3)(2,5)(3,9)) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// function flattenDeep(arr: Array<any>) {
//     let flattened: any[] = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             flattened = flattened.concat(flattenDeep(arr[i]));
//         } else if (arr[i] === '' || arr[i] === ' ' || arr[i] === undefined) {
//             flattened.splice(1, arr[i])
//         } else {
//             flattened.push(arr[i]);
//         }
//     }
//     return flattened
// }
//
// let result = flattenDeep([1, 2, [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], '', ' ' , , [3, [4, [5, [6]]]]])
// console.log(result)

// just a plug
export default () => {}