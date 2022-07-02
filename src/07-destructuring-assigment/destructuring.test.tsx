


export type StreetType = {
    title: string
}
type AddressType = {
    street: StreetType
}
type LessonType = {
    title: string
}
export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: AddressType
}

let props: ManType;
beforeEach(() => {
    props = {
        name: 'Alex',
        age: 35,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Dvinskaya street'
            }
        }
    }
})
test('', () => {
    // const age = props.age;
    // const lessons = props.lessons;

    const {age, lessons} = props;
    const {title} = props.address.street;

    expect(age).toBe(35);
    expect(lessons.length).toBe(3);
    expect(title).toBe('Dvinskaya street')
})
test('', ()=>{
    let l1 = props.lessons[0];
    let l2 = props.lessons[1];
    // let [ls1, ls2] = props.lessons;

    const [ls1,...rest] = props.lessons

    expect(l1.title).toBe('1');
    expect(l2.title).toBe('2');
    expect(rest.length).toBe(2)
    expect(rest[1].title).toBe('3')
})