const file = require('fs');

const data = file.readFile('./file1.txt', 'utf-8', function (err, data)=> {
    if (err) {
        console.log(err);
    }
    return
})
console.log(data);