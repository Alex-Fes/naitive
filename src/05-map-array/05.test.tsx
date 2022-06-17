import {createGreetingMessage, ManType} from "./05_map";

let people: Array<ManType> = [];

beforeEach(()=> {
    people = [
        {name: 'Kolya Ivanov', age: 23},
        {name: 'Petya Sidorov', age: 34},
        {name: 'Misha Pavlov', age: 42},
    ]
})

test('should get array with greeting message', ()=>{
    const message = createGreetingMessage(people);

    expect(message.length).toBe(3);
    expect(message[0]).toBe('Hello Kolya. How are you?');
    expect(message[1]).toBe('Hello Petya. How are you?');
    expect(message[2]).toBe('Hello Misha. How are you?');
})
