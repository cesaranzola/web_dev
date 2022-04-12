//==================Prototypes=======================
//An object that is the prototype(template, blueprint) for other types of objects. Each object has it's a buitl-in prototype
//For example Array.prototype => returns the prototype of the Array
//I can copy the prototype from Array and assing it, as the prototype of another object
// Prototype => built-in template object => who contain multiple methods 
// You can create multiple objects that share the same prototype


//How to add a method to a built-in prototype
//This is accesing the prototype object for every string, the place where strings mehtods are storeds
// String.prototype.grumpus = () => alert('Go away!')
// const cat = 'Blue'
// cat.grumpus()

//Example of adding a new method to the String.prototype
String.prototype.yell = function () {
    return `OMG!!! ${this.toUpperCase()}, !!!!`;
}


//Example of overwriting an existing Prototype's method
Array.prototype.pop = function () {
    return 'Sorry, I want that element, I will never pop it for you!'
}

//Try to use the pop method from Array prototype and see what happens
const newArr = ['The Godfather', 'Crossroads', 'Die Hard'];
//This is fun stuff, but it isn't recommended. Use it only for educational purposes.
console.log(newArr.pop());


//Attention!!
Array.prototype // the actual object that contains the properties and methods. The built-in template object
_proto_ //It's a reference to the prototype of the object, not the object itself. It's the property name use in each object invocation to reference the actual object

//Most of the type you want access the Array.prototype or String.prototpe, not the _proto_ referencej


