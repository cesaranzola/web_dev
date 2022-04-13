//====================Factory Function===================
//Not optimal way of creating methods for an object

// function makeColor(r, g, b) {
//     const color = {}
//     color.r = r
//     color.g = g
//     color.b = b
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`
//     }
//     color.hex = function () {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color;
// }

// const firstColor = makeColor(234, 213, 54);
// firstColor.hex();

//The shortcomings of the Factory Funcion
//Every time you make a new color object, we start with an empty object, three unique properties that are added directly to the object. 
// The color mehtods/functions are recreated and a unique copy is added to each color object.
//Each color onject has its own RGB function
//The code is redundant, it will be better if it were a prototype that each object could reference to
//Just like you create functions to avoid redundancy and repetitive code, using the Factory function results is bad code.


// const firstColor = makeColor(234, 213, 54);
// firstColor.rgb();
// firstColor.hex();

// const black = makeColor(0, 0, 0);
// black.rgb();
// black.hex();

// //Functions are reference type
// black.hex === firstColor.hex // > false > they're not referencing the same function
// 'hi'.slice === 'bye'.slice // > true > Because the referencing the same function that is located in String.prototype


//=========================CONSTRUCTOR FUNCTION==========================
// It's a Javascript darling. Not common in another programming languages.

//You start the function with a capital letter to indicate that is not a regular function
//It's a function that helps you create objects.
// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     console.log(this); // This refers to the window, not the object we suppose to have created
// In the scope of this function, it's not inside of any other object, this is going to refer to the global scope.
//The nearest object in the scope is the window object.
// }

//==============The new operator==========================
//The new operator lets developers create an instance of a user-defined object type 
//or of one of the built-in object types that has a constructor function.

// 1. Creates a blank, plain JavaScript object.
// 2. Adds a property to the new object (__proto__) that links to the constructor function's prototype object
// 3. Binds the newly created object instance as the this context (i.e. all references to this in the constructor function now refer to the object created in the first step).
// 4. Returns this if the function doesn't return an object.

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     //This will define the rgb property still in each copy of each object.
//     this.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`
//     }
// }
// new Color(255, 40, 100);

// //How to add a new method using the new keyword, the constructor function, to the actual built-in prototype

//Constructor Function - A function that creates objects - Capital letter to indicate it's a constructor function
//Constructor Function creates a prototype object
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}
new Color(255, 40, 100);


//You don't want to use arrow functions while defining new prototypes methods, because they behave diffently and can cause you problems
//Use traditional standard function expressions
//Adds a new method to the constructor function prototype object
Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`
};

//Adds a new method to the constructor function prototype object
Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

//Adds a new method to the constructor function prototype object
//Default parameter of the Alpha channel set equal to 1
Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b}, ${a})`;
}


//Adds a new method to the constructor function prototype object
//This is way more efficent than the factory approach explained before
const farbeEins = new Color(234, 50, 54);
const farbeZwei = new Color(234, 50, 54);
farbeEins.hex === farbeZwei.hex // > true - because they're referencing the same prototype object


