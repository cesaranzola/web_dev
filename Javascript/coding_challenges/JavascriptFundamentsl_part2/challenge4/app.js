const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];


// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%
function calcTip (bill) {
    return (tips = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20).toFixed(2)
}