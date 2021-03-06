// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped.

*/

// ========================== SOLUTION ======================================
// ================================================================================

// function arrayBuilder(obj) {
// 	const arr = [];
// 	for (const key in obj) {
// 		for (let i = 0; i < obj[key]; i++) {
// 			arr.push(key);
// 		}
// 	}
// 	return arr;
// }

// ========================== SOLUTION 2 ======================================
// ================================================================================

// function arrayBuilder(obj) {
// 	const arr = [];
// 	const keys = Object.keys(obj);
// 	const values = Object.values(obj);
// 	for (const [i, ele] of keys.entries()) {
// 		const subArr = [];
// 		subArr.length = values[i];
// 		subArr.fill(ele);
// 		for (const item of subArr) {
// 			arr.push(item);
// 		}
// 	}
// 	return arr;
// }

// ========================== SOLUTION 3 ======================================
// ================================================================================

// function arrayBuilder(obj) {
// 	const arr = [];
// 	const keys = Object.keys(obj);
// 	const values = Object.values(obj);
// 	for (let i = 0; i < keys.length; i++) {
// 		const num = arr.length;
// 		arr.length += values[i];
// 		arr.fill(keys[i], num);
// 	}
// 	return arr;
// }

// ========================== SOLUTION 4 ======================================
// ================================================================================

function arrayBuilder(obj) {
	const arr = [];
	for (const [key, value] of Object.entries(obj)) {
		const i = arr.length; // index position on which we start fill(ele[,start][,end])
		arr.length += value;
		arr.fill(key, i);
	}
	return arr;
}

// Uncomment these to check your work!
console.log(arrayBuilder({ cats: 2, dogs: 1 })); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []
