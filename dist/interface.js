"use strict";
// // interface Person {
// //     name: string;
// //     email: string;
// // }
// // let person : Person ={
// //     name: 'john',
// //     email: 'john@example.com'
// // }
// // interface is specialized for objects
// interface Add { 
//     (num1: number, num2: number, num3?: number): number
// }
// const add : Add = (num1, num2, num3=0)=> (num1 + num2 + (num3 || 0));
// interface Address {
//     presentAddress: string;
//     permanentAddress: string
// }
// interface Favourites {
//     type: "food" | "player" | "singer" | "actor";
//     value: string;
// };
// interface Auth {
//     isLoggedIn: boolean
// }
// interface Person extends Auth  {
//     name: string;
//     age: number;
//     phone: string | string[];
//     email: string;
//     address: Address;
//     favourites: Favourites[];
// };
// const person: Person = {
//     name: 'John',
//     email: 'john@example.com',
//     age: 33,
//     phone: ["134"],
//     address: {
//         presentAddress: 'example',
//         permanentAddress: 'example'
//     },
//     favourites: [
//         {
//             type: 'food',
//             value: 'Biriyani'
//         },
//         {
//             type: 'player',
//             value: 'Messi'
//         },
//     ],
//     isLoggedIn: true,
// }
// console.log(person);
var friends = ["Arif", "John"];
var user = {
    name: 'john',
    email: 'john@example.com'
};
