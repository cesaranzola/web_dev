// ================= Array methods =================

// ================= Add methods =================
// Push - Adds an element to the end of the array
const friends = ['Steve', 'John', 'Bob', 'Cooper'];
friends.push('Layla');

console.log(friends);

// The push method also returns a value. (the length of the array)
// You can capture that value if you want to
// Most of the time you don'y need to do this, but in case you need it, now you know how to do it

const newLength = friends.push('Maria');
console.log(newLength);

// How to add an element to the start of the array
// The unshift method also the length of the array
friends.unshift('Robert');
console.log(friends);

// ================= Remove methods =================
// Pop method - removes the last element of the array
friends.pop(); // You don't need to pass any argument to the method
console.log(friends);

const popReturnValue = friends.pop();
// the pop method returns the value that was removed
console.log(popReturnValue);

// Shift method - removes the first element of an array
friends.shift();
console.log(friends);

// ================= IndexOf - to know the index of an element in an array ====================
console.log(friends.indexOf('John'));

// What would happen if you try to access the index of a non-existent element
// It will return -1, signaling an error
console.log(friends.indexOf('Fredo'));

// ================= ES6 alternative to indexOf method  ==================
// Include will return a boolean value, true if the element is present, false otherwise

console.log(friends.includes('Cooper'));

// This method uses strict equality
friends.push('23');
// It will return false, because it performs an strict equality check, and doesn't support coercions.
console.log(friends.includes(23));

// Use conditionals with includes method
if (friends.includes('Cooper')) {
	console.log('Black as a moonless night!');
} else {
	console.log('Without chemicals he points...');
}
