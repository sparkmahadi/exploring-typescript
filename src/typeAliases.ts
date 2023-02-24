// type MyName = 'sojib' | 'saiful';

// let myName : MyName = "sojib"

// type arr = MyName[];

// const arr: arr = ["sojib"];

// type Players = [string, string, number, boolean, string];
// let players : Players;
// players = ["Messi", "Ronaldo", 3456, true, "Hello"]


// // type Add = (num1: number, num2: number, num3?: number) => number;

// // const add : Add = (num1, num2, num3=0)=> (num1 + num2 + (num3 || 0));

// // using type elias in objects

type Address = {
    presentAddress: string;
    permanentAddress: string
}
type Favourites = {
    type: "food" | "player" | "singer" | "actor";
    value: string;
}[];

type Auth = {
    isLoggedIn: boolean
}

type Person = {
    name: string;
    age: number;
    phone: string | string[];
    email: string;
    address: Address;
    favourites: Favourites;
} & Auth;

const person: Person = {
    name: 'John',
    email: 'john@example.com',
    age: 33,
    phone: ["134"],
    address: {
        presentAddress: 'example',
        permanentAddress: 'example'
    },
    favourites: [
        {
            type: 'food',
            value: 'Biriyani'
        },
        {
            type: 'player',
            value: 'Messi'
        },
    ],
    isLoggedIn: true,
}

// console.log(person);

// typeof person.phone === "string" || person.phone.map((val)=> console.log(val));
// not proper solution

if(Array.isArray(person.phone)){
    person.phone.map((val)=> val.toLowerCase());
}
else{
    person.phone.toLowerCase();
}
