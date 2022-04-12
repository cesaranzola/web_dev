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

//Example of accesing the String.prototype
String.prototype.yell = function () {
    return `OMG!!! ${this.toUpperCase()}, !!!!`;
}