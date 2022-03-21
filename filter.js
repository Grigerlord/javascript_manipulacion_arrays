//Filter filtra los elementos, y crea un nuevo elemento que tenga los items que nosotros querramos.

const words = ['spray', 'limit', 'elite', 'exuberant']

// const newArray = []
// for (let i = 0; i < words.length; i++) {
//     const item = words[i];
//     if(item.length >= 6){
//         newArray.push(item)
//     }
// }
// console.log(newArray);
// console.log(words);

const rta = words.filter(item => item.length >= 6) //rta es

console.log(words);
console.log(rta);




const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    {
        customerName: "Nicolaita",
        total: 345,
        delivered: false,
    }
];


// const rta3 = orders.filter(item => item.delivered && item.total >= 100)
// console.log(rta3);


//Si se tienen base de datos, lo mejor es hacer filtros con el lenguaje de base de datos.


const search = query => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}

console.log(search('a'));