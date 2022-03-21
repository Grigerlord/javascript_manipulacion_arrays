const totals = [1,3,2,3,6,7,4,5,9,8,2,4,1,5,6,8]

// let sum = 0
// for (let i = 0; i < totals.length; i++) {
//     const element = totals[i];
//     sum = sum + element
// }

// console.log(sum);

const rta = totals.reduce((sum, item) => sum + item, 0)
console.log(rta);


