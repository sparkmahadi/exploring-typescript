"use strict";
var myName = "sojib";
var arr = ["sojib"];
var players;
players = ["Messi", "Ronaldo", 3456, true, "Hello"];
var add = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    return (num1 + num2 + (num3 || 0));
};
var person = {
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
    ]
};
// console.log(person);
