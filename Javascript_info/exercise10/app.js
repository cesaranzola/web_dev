//================= Unary Plus operator doesn't affect numbers ================
let x = 1;
console.log(-x);

let y = 1;
console.log(+y);


//===============Unary Plus operator affects non numbers ================
let notNum = -'1';
console.log(-notNum);

let notNum2 = +'2';
console.log(-notNum2);