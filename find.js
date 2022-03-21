const  numbers = [1,30,49,29,10,13]

let rta = undefined
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element === 30){
        rta = element
        break
    }
}
console.log(rta);


const rta2 = numbers.find(item => item === 30)
console.log(rta2);





const products = [
    {
        name: "Pizza",
        price: 12,
        id: 'pzz'
    },
    {
        name: "Burger",
        price: 23,
        id: 'bgr'
    },
    {
        name: "Hot dog",
        price: 34,
        id: 'htdg'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: 'htcks'
    },
];

const rta3 = products.find(item => item.id === 'htdg')
console.log('find', rta3);

const rta4 = products.findIndex(item => item.id === 'htcks')
console.log('findIndex', rta4);