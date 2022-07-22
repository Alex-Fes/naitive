import React from "react";

export type UserType = {
    name: string
    hair: number
    address: { city: string, house: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}

export function makeHairstyle(u: UserType, power: number) {
    let copy = {...u, hair: u.hair / power}
    // copy.hair = copy.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address, city: city
        }
    }
    // let copy = {...u};
    // copy.address = {...copy.address, city: city}
    // return copy
}

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop, title: title
        }
    }
}

export function changeUserHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address, house: house
        }
    }
}

export function addNewBooks(u: UserWithLaptopType & UserWithBooksType, books: string) {
    return {
        ...u,
        books: [...u.books, books]
    }
}
















