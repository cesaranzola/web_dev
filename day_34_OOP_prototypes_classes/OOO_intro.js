//==========================Factory Functions======================
// function hex(r, g, b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`;
// }

// hex(255, 100, 25);
// rgb(234, 145, 56); 


//=====================Factory Function=====================
//This is creating a function that asks for three arguments, that then are pass into an empty object to be added. 
//Then creates two methods for the object
// function makeColor(r, g, b) {
//     const color = {}
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     //Add a method to color object
//     color.rgb = function () {
//         const { r, g, b } = this
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     //By storing the methods on the color  object, you don't have to pass arguments in the funciton 
//     //You can acccess the key value pairs of the color object and its methods.
//     //You're returning the object at the end of the makeColor funciton
//     color.hex = function () {
//         const { r, g, b } = this // 'this' refers to the color object, always refers to what is to the left of the point (color.hex)
//         //You're using this to desconstruct the properties from the color object
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color;
// }

// const firstColor = makeColor(35, 255, 150);
// //You can change the values at any time;
// firstColor.r = 255
// firstColor.rgb();


// //Second Iteration

function makeColor(r, g, b) {
    const color = {}
    color.r = r
    color.g = g
    color.b = b
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`
    }
    color.hex = function () {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(234, 213, 54);
firstColor.hex();
