/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

const bikes = [
    {
        bikeName : 'Atala',
        bikeWeight : 30
    },

    {
        bikeName :'Bianchi',
        bikeWeight : 20
    },

    {
        bikeName : 'Pinarello',
        bikeWeight : 10
    }
];

let peso;
for(let i = 0; i < bikes.length; i++){
    const bike = bikes[i]
    for( let j = 0; j <=  bike.bikeWeight; j++){
         peso = bike.bikeWeight
              
    }
}
if(peso[0] < peso[1] && peso[0] < peso[2]){
    console.log(bikes[0])
}else if( peso[1] < peso [2] && peso[1] < peso[0]){
    console.log(bikes[1])
}else{
    console.log(bikes[2])
}






    
