import { mkdirSync, writeFileSync } from "fs";
const folderName = process.argv[2] || 'Project'

try {
    mkdirSync(folderName);
    writeFileSync(`${folderName}/index.html`, '')
    writeFileSync(`${folderName}/app.js`, '')
    writeFileSync(`${folderName}/styles.css`, '')
} catch (e) {
    console.log('Something went wrong...');
    console.log(e);
}


//The Folder and files are created in the location you run the script, not in the script location