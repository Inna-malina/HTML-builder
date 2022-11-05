const fs = require('fs');
const path = require('path');
const {stdout} = require('process');
const reader = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
reader.on('data', function(data){
    stdout.write(data);
});
// fs.readFile(
//     path.join(__dirname, 'text.txt'),
//     'utf-8',
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// );
//--------------------------------------------------------

// const reader = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
// let data = '';
// reader.on('data', function (chunk) {
//     data += chunk;
// });
// reader.on('end', function () {
//     console.log(data);
// });
// reader.on('error', function (error) {
//     console.log('Error', error.message);
// });
//-------------------------------------------------------
