const neighborsNum = prompt('How many neighbors countries does your country have?')

if (neighborsNum == 1){
    console.log('Only one border')
} else if (neighborsNum >= 2){
    console.log('More than one border');
} else {
    console.log('No borders');
}