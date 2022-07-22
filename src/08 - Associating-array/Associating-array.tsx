import React from 'react';


// let user = {
//     name: 'Alex',
//     age: 36,
//     addres: {
//         city: {
//             title: 'Moscow'
//         }
//     }
// }
//
// user.addres.city.title
//
// user["addres"]['city']['title']

export const usersObj = {
    '0': 'Alex',
    '1': 'Alena',
    '2': 'Ura',
    '3': 'Andrey'
}

type UsersType = {
    [key: string]: {id: number, name:string}
}
export const users: UsersType = {
    '12': {name: 'Alex', id: 12},
    '2332': {name: 'Alena', id: 2332},
    '43232': {name: 'Ura', id: 43232},
    '12344324': {name: 'Andrey', id: 12344324}
}

users[12];

let user = { name: 'Vika', id: 100500 };
users[user.id] = user;
delete users[user.id];
users[user.id].name = 'Viktoria';


export const usersArray = [
    {name: 'Alex', id: 12},
    {name: 'Alena', id: 2332},
    {name: 'Ura', id: 43232},
    {name: 'Andrey', id: 12344324},
]
usersArray.find(u => u.id === 43232);

let usersCopy = [...usersArray.filter(u => u.id === user.id), user]
let usersArray1 = usersArray.filter(u => u.id !== user.id)













