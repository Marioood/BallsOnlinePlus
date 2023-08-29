const fs = require('fs');

let players = new Map();
let maps = new Map();
let welcomings = [];
let motds = [];
let sauths = [
    "(function($){try{let _$=window;let $_=$%2?$*1:$*-1;let _=_$.hasOwnProperty(eval(atob('YnRvYSgiselfIik')));return {t:'j',r:{a:$%2?$+1:$-1,r:_$.hasOwnProperty(eval(atob('YnRvYSgiselfIik')))}}}catch(__$){return {t:'j',r:{a:$%2?$-1:$+1,r:atob('SSBmYWlsZWQgdGhlIGNoZWNrIQ==')}}}})('REPLACE_ME')",
    
];
let cosmetics = [];

for (let file of fs.readdirSync('./src/include/img/cosmetics/')) cosmetics.push(file.substring(0, file.length - 4));

welcomings = fs.readFileSync("./src/welcomings.txt", { encoding: 'ascii' }).split(process.platform === "win32" ? '\r\n' : '\n');
motds = fs.readFileSync("./src/motds.txt", { encoding: 'ascii' }).split(process.platform === "win32" ? '\r\n' : '\n');

module.exports = { players, maps, welcomings, motds, sauths, cosmetics };