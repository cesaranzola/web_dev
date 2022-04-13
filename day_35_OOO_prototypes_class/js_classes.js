//====================CLASSES===============
//Use an uppercase letter to indicate it's a class or constructor function

// class Color {
//     //It's a function that will execute immediately whenever a new color (object) is created.
//     //Think of constructor as the function constructor you create before (Refer to the previous subject in dir)
//     constructor(r, g, b) {
//         console.log('Inside the constructor'); //This is to show that the constructor runs immediately, wihtout having to call it.
//         //Whenever you instantiate a new instance of the Color object, it will run immediately
//         console.log(r, g, b);
//     }
// }

// const lieblingsFarbe = new Color(244, 55, 62);


//Second Class Example
// class Color {
//     constructor(r, g, b, name) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//     }
//     //How to define a new method using classes and the constructor
//     //This method will be save in the prototype of the object, not each instance. 
//     greet() {
//         return `I'm Mr. ${this.name}, and I'm gonna make you an offer, you can refuse...`
//     }
// }

// const lieblingsFarbe = new Color(255, 67, 89, 'Tomato');
// const lieblingsFarbeZwei = new Color(255, 255, 255, 'White');


//Third Class example
// class Color {
//     constructor(r, g, b, name) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         //Anytime you're inside of the class and have use the new keyword to create the object
//         //this refers to instance of the class, the individual color object, not the prototype, not the function, not the window, 
//     }
//     rgb() {
//         const { r, g, b } = this; // You still have to desctructure the object properties into different variables
//         return `rgb(${r}, ${g}, ${b})`
//     }
//     hex() {
//         const { r, g, b } = this;
//         return (
//             '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//         );
//     }
// }

// const lieblingsFarbe = new Color(21, 135, 67, 'Green');
// const lieblingsFarbeZwei = new Color(21, 27, 135, 'Blue');


//Example Fourth - Calling a method inside the class and constructor
