// SNACK 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array visti oggi in classe (forEach + filter).

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const arraySlice = ((arr, num1, num2) => {
//     const myArray = arr.filter((number, index) => {
//         if (index >= num1 && index <= num2){
//             return true;
//         } else {
//             return false;
//         }
//     })
//     return myArray;
// })

// | USING DESTRUCTURING
const arraySlice = ((arr, num1, num2) => arr.filter((number, index) => index >= num1 && index <= num2));

console.log(arraySlice(numeri, 2, 8));