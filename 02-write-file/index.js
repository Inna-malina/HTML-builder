const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = require('process');

const newFolder = path.join(__dirname, 'text-2.txt');
const newMessage = fs.createWriteStream(newFolder);

stdout.write('Привет тебе, странник! Напиши здесь своё желание\n');
stdin.on('data', function (data){
    if(data.toString().trim() === 'exit'){
        ending();
    }
    newMessage.write(data);
});
process.on('SIGINT', ending);

function ending(){
    stdout.write('\nНам очень ценно твоё мнение');
    exit();
}