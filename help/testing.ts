
let num: number = 10
const nam: string = "HELLO"

interface User {
    name: string
    id: number
}

const user1: User = {
    name: "acho",
    id: 10
}

class User {
    name: string
    id: number

    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }
}

const user2: User = new User("hey", 10)


type fakeBool = true | false

let bool: fakeBool = true

type humanState = "sitting" | "walking" | "running"
let state: humanState = "sitting"

function getLength(obj: string | string[]): number {
    return obj.length
}

function wrapInArray(obj: string | string[]): string | string[] {
    if(typeof obj == "string") {
        return [obj]
    } else {
        return obj
    }
}

type NumberArray = Array<number>
type StringArray = Array<string>
type ObjectWithNameArray = Array<{name: string}>

interface Backpack<Type> {
    addObject: (obj: Type) => void
    getType: () => Type
}

declare const Backpack: Backpack<string>
const type = Backpack.getType()

declare const bp: Backpack<number>
bp.addObject(10)
// const error = Backpack.addObject(10)

// TYPESCRIPT 
