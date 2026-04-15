// async / sync

const fs = require('fs');  

// crud
// read

// let pathValue = fs.readFileSync('../Day_1/cal.js');
// let pathValue = fs.readFileSync('../Day_1/cal.js', 'utf-8');
// console.log(pathValue);

// fs.readFile('../Day_1/cal.js','utf-8',  (err,data) => {
//     if(err) {
//         console.log(err);
        
//     }
//     console.log('Data', data);
// });



// delete

// fs.rm('../Datafile1.txt');

// fs.unlink('../Data.txt', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File deleted successfully');
// });


// Create

fs.writeFile('../Datafile1.txt', 'New updated content', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('File updated successfully');
});


// Update Append
// fs.appendFile('../Datafile.txt', '\nHell Rishabh', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Content appended successfully');
// });   


// HW -> Remove the value in file single value