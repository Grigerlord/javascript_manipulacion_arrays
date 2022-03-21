const numbers = [1,7,3,6,9,30,35,27,34]

// let rta = true
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if(element <= 40){
//         rta = false
//     }
// }
// console.log(rta);

const rta2 = numbers.every(item => item <= 40)
console.log(rta2);


const team = [
    {
        name: "Nicolas",
        age: 17,
    },
    {
        name: "Andrea",
        age: 18,
    },
    {
        name: "Zulema",
        age: 20,
    },
    {
        name: "Santiago",
        age: 18,
    },
];

const rta3 = team.every(person => person.age >= 15)
const msj = rta3
    ? 'Equipo adminitido'
    : 'Equipo rechazado'

console.log(msj);