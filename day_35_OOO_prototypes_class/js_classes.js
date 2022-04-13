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
// class Color {
//     constructor(r, g, b, name) {
//         //This functio will run everytime you instantiate a new instance of the class
//         //The properties are added to the newly created object
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//     }

//     //All these methods are added to the prototype of the Color class, not to every instance that you instantiate. This is very important to understand.

//     innerRGB() {
//         const { r, g, b } = this;
//         return `${r}, ${g}, ${b}`
//     }
//     //How to call methods from within another method on the class
//     rgb() {
//         return `rgb(${this.innerRGB()})`;
//     }
//     rgba(a = 1.0) {
//         return `rgba(${this.innerRGB()}, ${a})`;
//     }
//     hex() {
//         const { r, g, b } = this;
//         return (
//             '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//         );
//     }
// }

// const weiß = new Color(255, 255, 255, 'white');
// const rot = new Color(255, 67, 89, 'red'); 

//Example 5 - HSL (Hue, Saturation, Lightness)

class Color {
    constructor(r, g, b, name) {
        //Addding values to the instantiate instance object 
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        //Using a method define within the class
        this.calcHSL(); // Immediately apply the calcHSL() method to the r,g,b values being passed.
    }

    //Methods
    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }
    hsl() {
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
    opposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`;
    }
    fullySaturated() {
        const { h, l } = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }
    calcHSL() {
        let { r, g, b } = this;
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0) h = 0;
        else if (cmax == r)
            // Red is max
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            // Green is max
            h = (b - r) / delta + 2;
        else
            // Blue is max
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // Make negative hues positive behind 360°
        if (h < 0) h += 360;
        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;

    }
}

//Instantiate instances of class Color using the new keyword 
const weiß = new Color(255, 255, 255, 'white');
const rot = new Color(255, 67, 89, 'red');
const orange = new Color(220, 126, 32, 'carrot');



//================Subclassing================
// Inheritance by sharing classes functionality


class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating...`
    }
}

// extends keyword + the name of the class you want to extend from 
// this allows the Cat class to inherent the functionality from the Pet class
class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        //Super is a reference to the superclass
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'Meowww'
    }
}

//When you invoke the class and pass in a method, first checks if it can find the method inside the class, it isn't possible goes down the prototype chain and looks in the extended class
class Dog extends Pet {
    bark() {
        return 'Wooof'
    }
}

const monty = new Cat('Monty', 12);
const meinHund = new Dog('Führer', 4);



//extends class and super keyword secodn example

class German {
    constructor(article, noun) {
        this.article = article;
        this.noun = noun;
    }
    capitalize() {
        let { article, noun } = this;
        return `${article.toUpperCase()}, ${noun.toUpperCase()}`;
    }
}

class Plural extends German {
    constructor(article, noun, plur) {
        super(article, noun)
        this.plur = plur;
    }
    articleCapital() {
        let { article, noun, plur } = this;
        return `${article[0].toUpperCase()}${article.substring(1)} ${noun[0].toUpperCase()}${noun.substring(1)}${plur}`; // This code smells
    }
}

const neuWort = new Plural('die', 'hund', 'e');
