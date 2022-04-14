
//Gets arguments from the command line and greets each argument
const args = process.argv.slice(2);
for (let arg of args) {
    console.log(`Hi there, ${arg}`);
}

//People use ndoe to create command line scripts and tools for the command line that have nothing to do wirh servers and web development.
