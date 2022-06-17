import {students, StudentsType} from "../02-object-test/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02-object-test/02_cityType";


export const addSkill = (students: StudentsType, skill: string) => {
    students.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentsType) {
    s.isActive = true;
}

export const doesStudentLive = (s: StudentsType, sityName: string) => {
    return students.address.city.cityTitle === sityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}
export const toFireStuff = (building: GovernmentBuildingType, stuffCountToFire: number) => {
building.stuffCount -= stuffCountToFire;
}
export const toHireStuff = (building: GovernmentBuildingType, stuffCountToHire: number) => {
    building.stuffCount += stuffCountToHire;
}

export function createMessage (props: CityType) {
        //return "Hello " + props.title + " citizens. I want you be happy. All " + props.citizensNumber + " men";
        return `Hello ${props.title} citizens. I want you be happy. All ${props.citizensNumber} men`;
}