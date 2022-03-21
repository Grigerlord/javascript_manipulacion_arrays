const elements = ['agua', 'tierra', 'aire', 'fuego']

let rtaFinal = ''
const separator = '--'

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (i == elements.length - 1) {
        rtaFinal = rtaFinal + element
    }else {
        rtaFinal = rtaFinal + element + separator
    }
}

console.log(rtaFinal);


const rta = elements.join('--')
console.log(rta);


const title = 'Curso de manipulacion de Arrays'
const urlFinal = title.split(' ').join('-').toLowerCase()
console.log(urlFinal);
