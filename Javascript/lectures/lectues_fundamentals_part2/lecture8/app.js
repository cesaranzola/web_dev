// ================= Array methods =================

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
friends.unshift('Randy');
console.log(friends);

