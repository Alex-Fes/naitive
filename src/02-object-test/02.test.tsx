import {CityType} from "./02_cityType";
import {
    demolishHouseOnTheStreet,
    getBuildingsWithStuffCountGreaterThen
} from "../04-filter-array/04_filter";
import {createGreeting, getHousesOnStreet, getStreetTitlesOfGovenmentBuildings} from "../05-map-array/05_map";


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{id: 1, buildAt: 2012, repaired: false, address: {number: 100, street: {title: 'White street'}}},
            {id: 1, buildAt: 2008, repaired: false, address: {number: 100, street: {title: 'Happy street'}}},
            {id: 1, buildAt: 2020, repaired: false, address: {number: 101, street: {title: 'Happy street'}}}],
        governmentBuildings: [{type: 'HOSPITAL', budget: 200000, stuffCount: 200, address: {street:{title:'Central str'}}},
                                {type: "FIRE-STATION", budget: 500000, stuffCount: 1000, address: {street:{title:'South str'}}}],
        citizensNumber: 1000000
    }
})


test('Houses should be destroyed', ()=> {
    demolishHouseOnTheStreet(city, 'Happy street')
    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})


test('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe('White street')

    expect(city.houses[1].buildAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe('Happy street')

    expect(city.houses[2].buildAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].address.street.title).toBe('Happy street')

})

test ('test should contains hospital and fire-station', ()=>{
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe('HOSPITAL')
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].stuffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe('Central str')

    expect(city.governmentBuildings[1].type).toBe('FIRE-STATION')
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].stuffCount).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe('South str')

})



test('List of street title of government buidings', ()=>{
    let streets = getStreetTitlesOfGovenmentBuildings(city.governmentBuildings)
    expect(streets.length).toBe(2);// проверяем сколько объектов в массиве
    expect(streets[0]).toBe('Central str')// проверяем соответствие названия улиц
    expect(streets[1]).toBe('South str')// проверяем соответствие названия улиц
})

test('list of streets titles of houses', ()=> {
    let streets = getHousesOnStreet(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe('White street');
    expect(streets[1]).toBe('Happy street');
    expect(streets[2]).toBe('Happy street');
})



test('building with correct stuff count', ()=>{
    let buildings = getBuildingsWithStuffCountGreaterThen(city.governmentBuildings, 500)
    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})

test('greeting message for streets', ()=>{
    let message = createGreeting(city.houses);
    expect(message.length).toBe(3);
    expect(message[0]).toBe('Hello guys from White street');
    expect(message[1]).toBe('Hello guys from Happy street');
    expect(message[2]).toBe('Hello guys from Happy street');
})