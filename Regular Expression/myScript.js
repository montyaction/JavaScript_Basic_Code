console.log("Regular Expression");

let reg = /monty/; // This is a regular expression literal in js
reg = /monty/g;   //g means global
// reg = /monty/i;   //i means case insensitive

// console.log(reg);
// console.log(reg.source);

let str = "This is great code with monty and also monty bro";

// Functions to match expressions
// 1. exec() - This function will return an array for match or null for no match

let result = reg.exec(str);

// result = reg.exec(str);
// console.log(result);

// result = reg.exec(str);
// console.log(result);   ---> We can use multiple exec with global flag

// if (result) {
//     console.log(result);
//     console.log(result.groups);
//     console.log(result.index);
//     console.log(result.input);
//     console.log(result.length);
// }


// 2. - test() - Returns true or false
let result2 = reg.test(str);
// console.log(result2);   ---> This will only print true if the "reg" is there in the string "s"


// 3. match() - It will return an array of results or null
// let result3 = reg.match(str);   ---> This is wrong!!
let result3 = str.match(reg);
// console.log(result3);


// 4. search()  - Returns index of first match else -1
// let result4 = reg.search(str); ---> This is right
let result4 = str.search(reg); // ---> This is right
// console.log(result4);


// 5. replace() - Returns new replaced string with all the replacements (if no flag is given, first match will be replaced)
let result5 = str.replace(reg, 'MOHIT');
console.log(result5);