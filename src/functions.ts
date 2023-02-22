// Function Types (parameter, return, anonymous/callback
// function signature, optional parameter/default parameter)

// function add(num1: number, num2: number): number {
//     return (num1 + num2);
// }

// const result = add(10, 30);
// console.log(result);


// const add = function(num1: number, num2: number, num3?: number): number {
//     return (num1 + num2 + (num3 || 0));
// }

// const result = add(10, 30, 40);
// console.log(result);


// const add = function(num1: number, num2: number, num3: number = 50): number {
//     return (num1 + num2 + (num3 || 0));
// }

// const result = add(10, 30);
// console.log(result);


// const add = function(...numbers : number[]): number {
//     return numbers.reduce((pre, cur) => pre + cur, 0)
// }

// const result = add(10, 30, 10);
// console.log(result);