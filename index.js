
const fs = require('fs');
const export2 = require('./getRandomInteger');
const exportt = require('./generateNames');
let rand = process.argv[2] || export2();

fs.writeFileSync(`./result/${rand}-names.txt`, `${exportt(rand)}`);
