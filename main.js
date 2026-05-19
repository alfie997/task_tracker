const fs = require('fs');
// const fs = require("fs/promises");
const readline = require('readline');
const process = require('process');

const args = process.argv;

console.log("number of arguments is "+args.length);

args.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

// let file = new Object;

let task = "empty";

// fs.readFileSync('data.json', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
//     file = JSON.parse(data);
//     console.log(file);
//     number = file.id + 1;
//     console.log(number);
// });

// async function main() {
//     const data = await fs.readFile('/home/alfie/repos/task_tracker/data.json', 'utf8');
//     console.log(data);
//     file = JSON.parse(data);
//     console.log(file);
//     number = file.id + 1;
//     console.log(number);

//     if (args[2] === 'add') {
//         console.log('Adding a new task');
//         task = args[3];
//         writeFileExample();
//     }
// }

const d = new Date();

function writeFileExample() {
    try {
        // fs.writeFileSync('myFile.txt', 'Hello, World', 'utf8');

        let number = 0;
        
        console.log('A');

        const oldData = fs.readFileSync('data.json', 'utf8');
        console.log('B');

        const obj = JSON.parse(oldData);
        console.log('C', obj);

        number = obj.id + 1;
        console.log('D', number);

        const newData = { id: number, description: task, status: 'todo', createdAt: d.toLocaleString()};

        // if (file.id === ) {
        //     fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf8');
        // } else {
        //     fs.appendFile('file.log', data, err => {
        //         if (err) {
        //         console.error(err);
        //         } else {
                    
        //         }
        //     })
        // }
        

        fs.appendFileSync('data.json', '\n', (err) => {
            if (err) {
                console.log(err);
            }
        });
        fs.appendFileSync('data.json', JSON.stringify(newData, null, 2), 'utf8', err => {
            if (err) {
            console.error(err);
            } else {
                // done
        }});

        console.log('Files created successfully');
    } catch (err) {
        console.error('Error writing files:', err);
    }
}



// main();

if (args[2] === 'add') {
    console.log('Adding a new task');
    task = args[3];
    writeFileExample();
}

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('add, update, delete? ', ans => {
//     if (ans.slice(0, 3) === 'add') {
//         task = ans.slice(4);
//         console.log('Task added successfully', ans.slice(4));
//         writeFileExample();
//     }
//         rl.close();
// });


