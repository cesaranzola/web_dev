//=================Template literals (Commonly known as Template Strings)=================
const firstName = 'John';
const lastName = 'Doe';
const profession = 'teacher';
const yearOfBirth = 1980;
const currentYear = 2030;

const greeting =
	"I'm " +
	firstName +
	', a ' +
	(currentYear - yearOfBirth) +
	' year old ' +
	profession +
	' from Brooklyn.';

console.log(greeting);

const newGreeting = `I'm ${firstName} ${lastName}, a ${
	currentYear - yearOfBirth
} year old ${profession} from Brooklyn.`;
console.log(newGreeting);

//How to write multiline string the old way
console.log('String with \n multiple \n lines ');

//Creating a multiline string with backticks
//Just use backticks and separate each line with enter
console.log(`This is,
a
multiline
String`);
