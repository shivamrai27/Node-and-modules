const file = require('fs');

for (let i = 1; i < 4; i++) {
    // console.log(file.readFileSync(`./file${i}.txt`, 'utf-8'));

    file.writeFileSync('./file.txt', file.readFileSync(`./file${i}.txt`, 'utf-8'));
}
