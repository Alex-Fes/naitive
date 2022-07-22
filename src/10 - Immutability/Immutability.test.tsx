import {makeHairstyle, moveUser, upgradeUserLaptop, UserType, UserWithLaptopType} from "./Immutability";


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

