// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bikes = [
    {
        nome: 'Mountain Bike',
        peso: 22,
    },
    {
        nome: 'Bianchi',
        peso: 27,
    },
    {
        nome: 'Olmo',
        peso: 30,
    },
]

let minWeight = 0;

for (let i = 0; i <= bikes.length - 1; i++) {
    if (bikes[i].peso < bikes[minWeight].peso) {
        minWeight = i;
    }
}
console.log(bikes[minWeight].peso);