import {GovernmentBuildingType, HouseType} from "../02-object-test/02_cityType";

export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Kolya Ivanov', age: 23},
    {name: 'Petya Sidorov', age: 34},
    {name: 'Misha Pavlov', age: 42},
];

const manTransformator = (man: ManType) => {
    return {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }

}


const devs = [
    {stack: ['css', 'html', 'js', 'tdd', 'react'], firstName: 'Kolya:', lastName: 'Ivanov'},
    {stack: ['css', 'html', 'js', 'tdd', 'react'], firstName: 'Petya:', lastName: 'Sidorov'},
    {stack: ['css', 'html', 'js', 'tdd', 'react'], firstName: 'Misha:', lastName: 'Pavlov'}
]

const devs2 = [
    manTransformator(people[0]),
    manTransformator(people[1]),
    manTransformator(people[2])
]

const devs3 = people.map(manTransformator) // вызываем функцию в условии метода map

const devs4 = people.map(man => ({
    stack: ['css', 'html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}));

const message = people.map(man => `Hello ${man.name.split(' ')[0]}. How are you?`)


export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]}. How are you?`)
}


export function getStreetTitlesOfGovenmentBuildings(buildings: Array<GovernmentBuildingType>) {
    return buildings.map(b => b.address.street.title)
}

export const getHousesOnStreet = (houses: Array<HouseType>) => {
    return houses.map(b => b.address.street.title)
}

export function createGreeting(houses: Array<HouseType>) {
    return houses.map(str => `Hello guys from ${str.address.street.title}`)
}


const names = ['Kolya', 'Vasya', 'Sveta', 'Max'];
const liElement = names.map(n => <li>{n}</li>); // {liElement} можно использовать в JSX разметке как список имен из массива


const users = [{name: 'Kolya'}, {name: 'Vasya'}, {name: 'Sveta'}, {name: 'Max'}];
const usersElement = users.map((u, index) => <li key={index}>{u.name}</li>);








