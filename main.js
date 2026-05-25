const fs = require('fs');
const readline = require('readline');
const process = require('process');

const args = process.argv;

console.log("number of arguments is "+args.length);

args.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

let task = "empty";

const d = new Date();

function writeFileExample() {
    try {
        let number = 0;
        
        console.log('A');

        const oldData = fs.readFileSync('data.json', 'utf8');
        console.log('B');

        const obj = JSON.parse(oldData);
        console.log('C', obj, Array.isArray(obj), obj[obj.length-1]);

        number = obj[obj.length-1].id + 1;
        console.log('D', number);

        obj.push({ id: number, description: task, status: 'todo', createdAt:d.toLocaleString() });
        console.log('E', obj, typeof obj, Array.isArray(obj));


        // const newData = { id: number, description: task, status: 'todo', createdAt: d.toLocaleString()};
        // console.log(newData);

        fs.writeFileSync('data.json', JSON.stringify(obj, null, 2), 'utf8');


        // fs.appendFileSync('data.json', '\n', (err) => {
        //     if (err) {
        //         console.log(err);
        //     }
        // });
        // fs.appendFileSync('data.json', JSON.stringify(newData, null, 2), 'utf8', err => {
        //     if (err) {
        //     console.error(err);
        //     } else {
        //         // done
        // }});

        console.log('Files created successfully');
    } catch (err) {
        console.error('Error writing files:', err);
    }
}

if (args[2] === 'add') {
    console.log('Adding a new task');
    task = args[3];
    writeFileExample();
}

