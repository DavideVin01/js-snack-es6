// SNACK 4
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
// 1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
// ES (marco de iulio => Marco de iulio);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

const studenti = [
    {
        id: 125,
        nome: 'davide vinciguerra',
        sommaVotiEsame: 110,
    },
    {
        id: 141,
        nome: 'marco donato',
        sommaVotiEsame: 73,
    },
    {
        id: 293,
        nome: 'giuseppe scalisi',
        sommaVotiEsame: 62,
    },
    {
        id: 418,
        nome: 'beatrice furegato',
        sommaVotiEsame: 93,
    },
    {
        id: 521,
        nome: 'matteo la manna',
        sommaVotiEsame: 55,
    },
]

studenti.forEach((studente) => {
    const {nome} = studente;
    const firstLetter = nome.charAt(0).toUpperCase();
    const remainingLetters = nome.substring(1).toLowerCase();
    const fullWord = firstLetter + remainingLetters;
console.table(fullWord);
});

const up70 = [];

studenti.filter((studente) => {
    if (studente.sommaVotiEsame >= 70 && studente.id >= 120){
        up70.push(studente);
    }
});
console.log(up70);