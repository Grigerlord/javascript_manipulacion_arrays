const pets = ['cat', 'dog', 'bat', 'duck', 'monkey']

let includeInArray = false
for (let i = 0; i < pets.length; i++) {
    const element = pets[i];
    if (element === 'dog') {
        includeInArray = true
        break
    }
}

console.log(includeInArray);

const rta = pets.includes('dog')
console.log(rta);


const frase = 'Hola soy una frase para practica mucho en arrays de javascript con el profesor este. Me alegra tanto poder practicar esto porque me da amsieda'

const rta2 = frase.includes('alegra')

console.log(rta2);