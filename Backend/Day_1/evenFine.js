const even = require('is-even');

for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0)
 if (even(i)){
    console.log(i);
  }
}