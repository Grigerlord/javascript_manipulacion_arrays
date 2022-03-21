const items = [1,3,2,3,6,7,4,5,9,8,2,4,1,5,6,8]

const rta2 = items.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1
    } else {
        obj[item] = obj[item] + 1
    }
    return obj
}, {})

console.log(rta2);





const list = []
for(let i=0; i<31; i++){
    list.push(Math.floor(Math.random() * 11))
}
const rta3 = list.reduce((obj, value) => {
    (value < 5) ? obj['1-4'] += 1 : (value < 9) ? obj['5-8'] += 1 : obj['9-10'] += 1
    return obj
}, {
    '1-4': 0,
    '5-8': 0,
    '9-10': 0,
})
console.log(rta3);





const numbers = [1,2,3,3,4,5,2,1,1,3,4,5,6,7,5,5,4,7,8,9,8,7,5,4,5,8,9];
const ranges = ['1-5','6-7','8-9'];
const result = numbers.reduce((acum, item) => {
    if (item < 5) {
        !acum[ranges[0]] ? acum[ranges[0]] = 1 : acum[ranges[0]] += 1;
    } else if (item > 5 && item < 8) {
        !acum[ranges[1]] ? acum[ranges[1]] = 1 : acum[ranges[1]] += 1;
    } else {
        !acum[ranges[2]] ? acum[ranges[2]] = 1 : acum[ranges[2]] += 1;
    }
    return acum
},{})
console.log(result)