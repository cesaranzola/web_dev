import { mkdirSync, writeFileSync } from "fs";
const folderName = process.argv[2] || 'Project'

mkdirSync(folderName);
writeFileSync(`${folderName}/index.html`)
writeFileSync(`${folderName}/app.js`)
writeFileSync(`${folderName}/styles.css`)
