export type UserType = {
    name: string
    age: number
}

function incAge(u: UserType) {
    u.age++
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Alex',
        age: 36
    };
    incAge(user);
    expect(user.age).toBe(37);

    let superman = user;
    superman.age = 1000;
    expect(user.age).toBe(1000);
})

test('array reference test', () => {
    let users = [{
        name: 'Alex',
        age: 36
    },
        {
            name: 'Vova',
            age: 30
        }];
    let admins = users;
    admins.push({name:'Kolya', age: 22});
    expect(users[2]).toEqual({name:'Kolya', age: 22});
})

test('value type test', () => {
    let users = [{
        name: 'Alex',
        age: 36
    },
        {
            name: 'Vova',
            age: 30
        }];
    let admins = users;
    admins.push({name:'Kolya', age: 22});
    expect(users[2]).toEqual({name:'Kolya', age: 22});
})











