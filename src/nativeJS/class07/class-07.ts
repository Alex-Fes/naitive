// 1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

export const repeatString = (str: string, repeat: number, separator: string) => {
    let arrStr = []
    for (let i = 0; i < repeat; i++) {
        arrStr.push(str)
    }
    return arrStr.join(separator).toString()
}


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

export const checkStart = (str: string, underStr: string) => {
    return str.toLowerCase().startsWith(underStr)

}


//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов),
// а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

export const truncateString = (str: string, separator: number) => {
    return str.slice(0, separator) + '...';

}

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

export const getMinLengthWord = (str: string) => {

    // let arrWords = str.split('')
    // let shortestWord = 0;
    // for (let i = 0; i < arrWords.length; i++) {
    //         if(arrWords[i].length > shortestWord){
    //             shortestWord = arrWords[i].length
    //         }
    //
    // }
    // return shortestWord


    // let shortestWord = str.split(' ')
    //     .sort(function (a,b) {return  a.length - b.length})
    // return shortestWord[0]


    let shortestWord = str.split(' ')
        .reduce(function (a, b) {
            return b.length < a.length ? b : a
        })
    return shortestWord
}


//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение,
// где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

export const setUpperCase = (str: string) => {
    let lowerStrArr = str.toLowerCase().split(' ')
    let outArr = [];
    for (let i = 0; i < lowerStrArr.length; i++) {
        outArr.push(lowerStrArr[i].charAt(0).toUpperCase() + lowerStrArr[i].slice(1))
    }
    return outArr.join(' ')
}


// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true

export const isIncludes = (str: string, subStr: string) => {
    let strArr = str.toLowerCase()
    let subStrArr = subStr.toLowerCase()
    for (let i = 0; i < subStrArr.length; i++) {
        if (strArr.indexOf(subStrArr[i]) === -1){
            return false
        }
            }
    return true
}

















