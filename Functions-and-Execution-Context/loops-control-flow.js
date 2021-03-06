// ============================== INSTRUCTIONS ==============================
// ================================================================================

// Challenge: Loops & Control Flow
// Write a function mergingTripletsAndQuints which adds the corresponding element from array2 if the element from array1 is divisible by 3 or 5 and returns the new array.

// ========================== First Solution ==========================
// ====================================================================

function mergingTripletsAndQuints(array1, array2) {
	const result = [];
	for (let i = 0; i < array1.length; i++) {
		array1[i] % 3 && array1[i] % 5
			? result.push(array1[i])
			: result.push(array1[i] + array2[i]);
	}
	return result;
}

// Uncomment these to check your work!
console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]
