const user = {
	firstName: 'John',
	lastName: 'Wick',
	username: 'gio4567',
	password: 'route66high',
	avatar: 'MonkeySuit',
};

// How to retrieve data using the dot notation syntax
// console.log(user.firstName);

// How to retrieve data using the bracket notation syntax
// console.log(user['lastName']);

// How to write a computed property name using square bracket notation syntax
// const nameKey = 'Name';
// console.log(user['first' + nameKey]);
// console.log(user['last' + nameKey]);

// This only works with the bracket notation syntax, with dot notation will throw an error.

// Input from user
// const userInput = prompt(
// 	'What do you want to know about John Wick? - Choose between firstName, lastName, username and avatar'
// );

// This expression gets evaluated with the userInput and that property is retrieve from the object'

// if (user[userInput]) {
// 	console.log(user[userInput]);
// } else {
// 	console.log(`The chosen property isn't valid.`);
// }

// How to add properties to an object using dot notation syntax
user.score = 4567;

// How to add properties to an object using square bracket notation syntax
user['memberSince'] = '2009';
// console.log(user.memberSince);

// Challenge
user.friends = ['Loco', 'Tuco', 'Jixi', 'BigPapa'];

// console.log(user.friends.indexOf('Tuco'));

console.log(
	`${user.firstName} has ${user.friends.length} friends, and his best friend is ${user.friends[2]}`
);
