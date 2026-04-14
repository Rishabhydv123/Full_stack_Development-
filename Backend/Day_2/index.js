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




// fs.unlink('../Data.txt', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('File deleted successfully');
// });


// fs.writeFile('../Datafile.txt', 'New updated content', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('File updated successfully');
// });



fs.appendFile('../Datafile.txt', '\nAdded new line', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Content appended successfully');
});