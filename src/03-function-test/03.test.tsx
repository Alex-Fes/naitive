import {StudentsType} from "../02-object-test/02";
import {addSkill, doesStudentLive, makeStudentActive} from "./03";


let students: StudentsType;
beforeEach(()=> {
    students =  {
        id: 1,
        name: 'Aleksei',
        age: 36,
        isActive: false,
        address: {
            streetTitle: 'Mejevoi 5',
            city: {
                cityTitle: 'Saint-Petersburg',
                country: 'Russia'
            }

        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            }, {
                id: 2,
                title: 'CSS'
            }, {
                id: 3,
                title: 'React'
            }
        ]
    }
})

test('new tech skill should added to students', () => {
    expect(students.technologies.length).toBe(3)
    addSkill(students, 'JS')
    expect(students.technologies.length).toBe(4)
    expect(students.technologies[3].title).toBe('JS')
    expect(students.technologies[3].id).toBeDefined()
})


test('student must be is active', ()=>{
    expect(students.isActive).toBe(false)
    makeStudentActive(students)
    expect(students.isActive).toBe(true)

})

test('does student live in city?', ()=>{

   let result1 = doesStudentLive(students, 'Moscow')
   let result2 = doesStudentLive(students, 'Saint-Petersburg')
    expect(result1).toBe(false)
    expect(result2).toBe(true)

})