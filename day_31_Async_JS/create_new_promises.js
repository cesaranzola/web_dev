//==========================Promise==================
// A Promise function always takes it two parameters as arguments. Usualyy name as 'resolve' & 'reject'.
new Promise((resolve, reject) => {
    resolve(); //This will execute the resolve function immediately and it will return an object promise as resolve.
})

new Promise((resolve, reject) => {
    reject(); // This will cause the promise to be reject it immediately 
})

new Promise((resolve, reject) => {
    // If I don't call anything on the function, the Promise objecct will appear as a pending Promise.
})

