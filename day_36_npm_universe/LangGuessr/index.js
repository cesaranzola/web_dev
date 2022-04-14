import { franc } from 'franc';

import langs from 'langs';

// const sentence = franc('In meiner Freizeit spiele ich oft die Gitarre');
const input = process.argv[2];
const sentence = franc(input);
if (sentence === 'und'){
    console.log(`Sorry couldn't figure it out! Try to add a longer sample sentence`);
} else {
    const language = langs.where('3', sentence);
    console.log(`Our best guess is: ${language.name}`);
}

