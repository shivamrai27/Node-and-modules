const file = require('fs');

// for (let i = 1; i < 4; i++) {
//     // console.log(file.readFileSync(`./file${i}.txt`, 'utf-8'));

//     file.writeFileSync('./file.txt', file.readFileSync(`./file${i}.txt`, 'utf-8'));
// }


for (let i = 0; i < 10000; i++) {
    file.writeFileSync('./big.txt', `hello world ${i}\n`, { flag: 'a' })
}
console.log("hello world");

let writeFun = async () => {
    await function writrAwaitFun() {

        file.writeFileSync('./big.txt', `hello world ${i}\n`, { flag: 'a' })
    }


}