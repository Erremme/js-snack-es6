/*Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.*/

//FUNCTION 
function getElementFromArray(array, a, b){
const arrayElement =[];

for(let i = a; i <= b; i++){
    arrayElement.push(array[i])
    
}
    return arrayElement;
}


//VARIABLES
const club = ["Milan", "Inter", "Roma", "Atalanta", "Cagliari", "Lazio", "Venezia", "Juventus" ];
const a = 3;
const b = 6;

const result = getElementFromArray(club, a, b )

console.log(result)