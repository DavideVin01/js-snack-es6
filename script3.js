// SNACK 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array visti oggi in classe (forEach + filter).

const getNewArray = (arrayList, num1, num2) => {
arrayList = numeri.filter((numero) => {
    if (numero >= num1 && numero <= num2){;
        arrayList.push(numero);
        return true;
    } return false;
});
    return getNewArray;
}



const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let newNumeri = [];

getNewArray(numeri, 5, 10);


console.log(newNumeri);

// newNumeri = numeri.filter((numero) => {
//     if (numero >= 5 && numero <= 12){;
//         newNumeri.push(numero);
//         return true;
//     } return false;
// });