//====================Factory Function===================
//Not optimal way of creating methods for an object

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

// const firstColor = makeColor(234, 213, 54);
// firstColor.hex();

//The shortcomings of the Factory Funcion
//Every time you make a new color object, we start with an empty object, three unique properties that are added directly to the object. 
// The color mehtods/functions are recreated and a unique copy is added to each color object.
//Each color onject has its own RGB function
//The code is redundant, it will be better if it were a prototype that each object could reference to
//Just like you create functions to avoid redundancy and repetitive code, using the Factory function results is bad code.


const firstColor = makeColor(234, 213, 54);
firstColor.rgb();
firstColor.hex();

const black = makeColor(0, 0, 0);
black.rgb();
black.hex();

//Functions are reference type
black.hex === firstColor.hex // > false > they're not referencing the same function
'hi'.slice === 'bye'.slice // > true > Because the referencing the same function that is located in String.prototype


//=========================CONSTRUCTOR FUNCTION==========================

