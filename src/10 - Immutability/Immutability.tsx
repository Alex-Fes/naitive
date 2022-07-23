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
type CompanyType = { id: number, title: string };
export type WithCompaniesType = UserType & {
    companies: Array<CompanyType>
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

export function updateUserBook(u: UserWithLaptopType & UserWithBooksType,
                               oldBook: string,
                               newBook: string) {
   return  {...u, books: u.books.map(b => b === oldBook ? newBook : b)}
    // let copy = {
    //     ...u,
    //     books: u.books.map(b => {
    //         if (b === oldBook) {
    //             return newBook
    //         } else {
    //             return b
    //         }
    //     })
    // }
    // return copy
}

export function removeUserBook(u: UserWithLaptopType & UserWithBooksType,
                               book: string) {
    return  {...u, books: u.books.filter(b => b !== book)}
}

export function addNewCompany(u: UserWithLaptopType & WithCompaniesType, newCompany: object) {
    return {
        ...u,
        companies: [...u.companies, newCompany]
            //создаем новый массив и в него копируем из старого массива объекты
            // и засовываем новый объект
    }
}

export function changeCompanyTitle(u: UserWithLaptopType & WithCompaniesType,
                              id: number,
                               newTitle: string) {
    return  {...u, companies: u.companies.map(b => b.id === id ? {...b, title: newTitle} : b)}
    // const copy:WithCompaniesType = {
    //     ...u,
    //     companies: u.companies.map(c => {
    //         if(c.id === id) {
    //             return {...c, title: newTitle}
    //         } else return c;
    //     })
    // }
    // return copy
}


export function changeCompanyTitleInAssociationArray (companies: { [key: string] : Array<CompanyType> },
                                                     userName: string,
                                                     id: number,
                                                     newTitle:string) {
    let companyCopy = {...companies};
    companyCopy[userName] = companyCopy[userName].map(c => c.id === id ? {...c, title: newTitle} : c )
    return companyCopy
}







