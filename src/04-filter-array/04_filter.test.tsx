import {CoursesType} from "./04_filter";

test('should take old men then oldest 90', () => {
    const age = [12, 32, 44, 55, 90, 99, 100, 23, 15];

    // const predicate = (age: number) => {
    //     return age > 90;
    // };

    const oldAges = age.filter(age => age > 90);

    expect(oldAges.length).toBe(2);
    expect(oldAges[0]).toBe(99);
    expect(oldAges[1]).toBe(100);
})

test('should take courses chipers 160', () => {
    const courses = [
        {title: 'CSS', price: 120},
        {title: 'JS', price: 150},
        {title: 'REACT', price: 200}];

    // const chipPredicate = (course: CoursesType) => {
    //     return course.price < 160;
    // }
    const chipCourse = courses.filter(course => course.price <160);

    expect(chipCourse.length).toBe(2);
    expect(chipCourse[0].title).toBe( 'CSS');
    expect(chipCourse[1].title).toBe('JS');
    expect(chipCourse[0].price).toBe(120);
    expect(chipCourse[1].price).toBe(150);
});

test('get completed tasks', ()=>{
    const tasks = [
        {id:1 , title: 'Bread', isDone: true},
        {id:2 , title: 'Milk', isDone: false},
        {id:3 , title: 'Salt', isDone: true},
        {id:4 , title: 'Sugar', isDone: false},
    ];

    const comleteTasks = tasks.filter(completed => completed.isDone)
    // const comleteTasks = tasks.filter(completed => !completed.isDone) - отфильтрует не выполненые таски - false

    expect(comleteTasks.length).toBe(2);
    expect(comleteTasks[0].title).toBe('Bread');
    expect(comleteTasks[1].title).toBe('Salt');
    expect(comleteTasks[0].id).toBe(1);
    expect(comleteTasks[1].id).toBe(3);



})