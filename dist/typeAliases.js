"use strict";
// type MyName = 'sojib' | 'saiful';
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
    ],
    isLoggedIn: true,
};
// console.log(person);
// typeof person.phone === "string" || person.phone.map((val)=> console.log(val));
// not proper solution
if (Array.isArray(person.phone)) {
    person.phone.map(function (val) { return val.toLowerCase(); });
}
else {
    person.phone.toLowerCase();
}
