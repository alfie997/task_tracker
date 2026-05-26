const fs = require('fs');
const readline = require('readline');
const process = require('process');

const args = process.argv;

console.log("number of arguments is "+args.length);

args.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

const d = new Date();

function addTask(task) {
    try {
        let number = 0;

        const oldData = fs.readFileSync('data.json', 'utf8');

        const data = JSON.parse(oldData);

        number = data[data.length-1].id + 1;

        data.push({ id: number, description: task, status: 'todo', createdAt: d.toLocaleString() });

        fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf8');

        console.log('Files created successfully');
    } catch (err) {
        console.error('Error writing files:', err);
    }
}

function editTask(num, task) {
    try {
        // console.log(num, task);
        const oldData = fs.readFileSync('data.json', 'utf8');

        const data = JSON.parse(oldData);
        // console.log('A', data);

        // const newData = [];

        // console.log('B');
        // data.forEach((obj) => {
        for (let obj of data) {
            // console.log(obj.id);
            if (obj.id == num) {
                // console.log('D')
                obj.description = task;
                obj.updatedAt = d.toLocaleString();
            }
        };
        // console.log(data);

        fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf8');

        console.log('Files edited successfully');
    } catch (err) {
        console.log('Error editing files:', err);
    }
}

if (args[2] === 'add') {
    console.log('Adding a new task');
    addTask(args[3]);
} else if (args[2] === 'list') {
    const oldData = fs.readFileSync('data.json', 'utf8');
    let data = JSON.parse(oldData);
    if (args[3] === 'todo') {
        data.forEach((obj) => {
            if (obj.status === 'todo') {
                console.log(obj);
            }
        });
    } else if (args[3] === 'done') {
        data.forEach((obj) => {
            if (obj.status === 'done') {
                console.log(obj);
            }
        });
    } else if (args[3] === 'in-progress') {
        data.forEach((obj) => {
        if (obj.status === 'in-progress') {
            console.log(obj);
        }
    });
    } else {
        console.log('Listing all tasks');
        console.log(data);
    }
} else if (args[2] === 'update') {
    editTask(args[3], args[4]);
}

