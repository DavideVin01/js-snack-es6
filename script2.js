// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
    { nome: 'Milan', punti: 0, falli: 0, },
    { nome: 'Juventus', punti: 0, falli: 0, },
    { nome: 'Inter', punti: 0, falli: 0, },
]

const getRandomNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

for (let i = 0; i < squadre.length; i++) {
    for (let key in squadre) {
        const currentTeam = squadre[i];

        currentTeam.punti = getRandomNumber(1, 20);
        currentTeam.falli = getRandomNumber(1, 10);
    }
}

console.table(squadre);

const secondArray = [];

for (let i = 0; i < squadre.length; i++) {
    const currentTeam = squadre[i];
    const { nome, falli } = currentTeam;
    const newTeam = { nome, falli };
    secondArray.push(newTeam);
}

console.table(secondArray);