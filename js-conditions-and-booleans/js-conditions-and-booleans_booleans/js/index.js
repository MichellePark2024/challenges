// let value = 2 == "2"
// value = 2 === "2"
console.log('2 == "2": ',Boolean( 2 == "2"));
console.log('2 === "2": ',Boolean( 2 === "2"));
console.log('2 === 2: ',Boolean( 2 === 2));
console.log('"hello world"', Boolean("hello world"));
console.log('"": ',Boolean(""));
console.log('"true": ', Boolean("true"));


let number = 0;
console.log("0:", Boolean(number));

number = -50;
console.log("-50:", Boolean(number));

number = 50;
console.log("50:", Boolean(number));

console.log("5 > 1:", Boolean(5 > 1));

console.log('"1 > 10":', Boolean("1 > 10"));

console.log('"false": ', Boolean("false"));