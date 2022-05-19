const user = {
	firstName: 'John',
	lastName: 'Wick',
	username: 'gio4567',
	password: 'route66high',
	avatar: 'MonkeySuit',
};

// How to retrieve data using the dot notation syntax
console.log(user.firstName);

// How to retrieve data using the bracket notation syntax
console.log(user['lastName']);

// How to write a computed property name using square bracket notation syntax
const nameKey = 'Name';
console.log(user['first' + nameKey]);
console.log(user['last' + nameKey]);

// This only works with the bracket notation syntax, with dot notation will throw an error.
