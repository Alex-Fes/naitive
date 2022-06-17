



export type StudentsType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type LocalCityType ={
    cityTitle: string
    country: string
}
type TechType = {
    id: number
    title: string
}

export const students: StudentsType = {
    id: 1,
    name: 'Aleksei',
    age: 36,
    isActive: true,
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