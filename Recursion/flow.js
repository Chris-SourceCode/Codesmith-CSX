// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: flow

Write a function that takes an array of functions and a number that will be piped through all those functions. The input number passes through the first function, whose output is passed as input to the second function, whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.

Input 1: {Number} input - number flowing through all functions
Input 2: {Array} funcArray - array of functions to pass input through
Output: {Number} - final output of final function


*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

// function flow(input, funcArray, i = 0) {
//   if (!funcArray[i]) return input;
//   return flow(funcArray[i](input), funcArray, i + 1)
// }

// ========================== SOLUTION 2 ======================================
// ================================================================================

// const flow = (input, funArr, i = 0) => funArr[i]? flow(funArr[i](input), funArr, i + 1) : input;

// ========================== SOLUTION 3 ======================================
// ================================================================================

// const flow = (input, funcArr) => {
//   if (!funcArr[0]) return input;
//   return flow(funcArr[0](input), funcArr.slice(1));
// }

// ========================== SOLUTION 4 ======================================
// ================================================================================

// const flow = (input, funcArr) => {
//   if (funcArr.toString() === [].toString()) return input;
//   return flow(funcArr[0](input), funcArr.slice(1));
// }

// ========================== SOLUTION 5 ======================================
// ================================================================================

const flow = (input, funcArr, i = 0) => {
	if (i in funcArr === false) return input;
	return flow(funcArr[i](input), funcArr, i + 1);
};

// ========================== SOLUTION 6 ======================================
// ================================================================================

const flow = (input, funcArr, i = 0) => {
	if (i === funcArr.length) return input;
	return flow(funcArr[i](input), funcArr, i + 1);
};

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) {
	return num * 2;
}
function add7(num) {
	return num + 7;
}
function modulo4(num) {
	return num % 4;
}
function subtract10(num) {
	return num - 10;
}
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7
