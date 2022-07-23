import {
    addNewBooks, addNewCompany, changeCompanyTitle, changeCompanyTitleInAssociationArray,
    changeUserHouse,
    makeHairstyle,
    moveUser, removeUserBook, updateUserBook,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./Immutability";
import {usersObj} from "../08 - Associating-array/Associating-array";


test('reference type test', () => {
    let user: UserType = {
        name: 'Alex',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 13
        }
    };
    let awesomeUser = makeHairstyle(user, 2)
    expect(awesomeUser.hair).toBe(18);
    expect(user.hair).toBe(36);
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Alex',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Legion'
        }
    };
    let movedUser = moveUser(user, 'Kiev')
    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade user laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Alex',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Legion'
        }
    };
    let upgradeUser = upgradeUserLaptop(user, 'Macbook')
    expect(user).not.toBe(upgradeUser);
    expect(user.laptop).not.toBe(upgradeUser.laptop);
    expect(user.address).toBe(upgradeUser.address);
    expect(upgradeUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('Legion')
})

test('Move User to another house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Legion'
        },
        books: ['css', 'html', 'js', 'react']
    };
    let changeHouse = changeUserHouse(user, 99)
    expect(user).not.toBe(changeHouse);
    expect(user.laptop).toBe(changeHouse.laptop);
    expect(user.books).toBe(changeHouse.books);
    expect(user.address).not.toBe(changeHouse.address);
    expect(changeHouse.address.house).toBe(99)
    expect(user.address.house).toBe(12)
})

test('Add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Legion'
        },
        books: ['css', 'html', 'js', 'react']
    };
    let changeUserBooks = addNewBooks(user, 'ts')
    expect(user).not.toBe(changeUserBooks);
    expect(user.laptop).toBe(changeUserBooks.laptop);
    expect(user.address).toBe(changeUserBooks.address);
    expect(user.books).not.toBe(changeUserBooks.books);
    expect(changeUserBooks.books[4]).toBe('ts');
})

test('Update js to ts user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Legion'
        },
        books: ['css', 'html', 'js', 'react']
    };
    let changeUserBooks = updateUserBook(user, 'js', 'ts')
    expect(user).not.toBe(changeUserBooks);
    expect(user.laptop).toBe(changeUserBooks.laptop);
    expect(user.address).toBe(changeUserBooks.address);
    expect(user.books).not.toBe(changeUserBooks.books);
    expect(changeUserBooks.books[2]).toBe('ts');
})

test('Remove js from books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Alex',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Legion'
        },
        books: ['css', 'html', 'js', 'react']
    };
    let changeUserBooks = removeUserBook(user, 'js')
    expect(user).not.toBe(changeUserBooks);
    expect(user.laptop).toBe(changeUserBooks.laptop);
    expect(user.address).toBe(changeUserBooks.address);
    expect(user.books).not.toBe(changeUserBooks.books);
    expect(changeUserBooks.books[2]).not.toBe('js');
})

test('Add new company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Alex',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Legion'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'Seaport'}]
    };
    let userCopy = addNewCompany(user, {id:3,title:'Google'})
    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(userCopy.companies.length).toBe(3);
})

test('Change company title', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Alex',
        hair: 36,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Legion'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'Seaport'}]
    };
    let userCopy = changeCompanyTitle(user, 1, 'EPAM-PAM-PAM')
    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.companies).not.toBe(userCopy.companies);
    expect(userCopy.companies[0].title).toBe('EPAM-PAM-PAM');
})

test('Update company in association array', () => {

    let companies = {
        'Alex': [{id: 1, title: 'Epam'}, {id: 2, title: 'Seaport'}],
        'Vova': [{id: 1, title: 'Roe'}, {id: 2, title: 'Flot'}]
    }
   let copy = changeCompanyTitleInAssociationArray(companies, 'Alex', 1, 'EPAM-PAM-PAM')
    expect(copy).not.toBe(companies);
    expect(copy['Alex']).not.toBe(companies['Alex']);
    expect(copy['Vova']).toBe(companies['Vova']);
    expect(copy['Alex'][0].title).toBe('EPAM-PAM-PAM');
})




