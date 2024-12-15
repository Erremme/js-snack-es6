/*Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/




function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const serieA =[
    {
        clubName : "Milan",
        foulsSuffered : 0,
        pointsScored : 0
    },
    {
        clubName : "Inter",
        foulsSuffered : 0,
        pointsScored : 0,
    },
    {
        clubName : "Atalanta",
        foulsSuffered : 0,
        pointsScored : 0
    }
];


for(let i = 0; i < serieA.length; i++){
    const club = serieA[i]
   club.pointsScored = getRandomNumber(0, 102)
   club.foulsSuffered = getRandomNumber(0 , 70)
}




const nameAndFouls = []
for(let i = 0; i < serieA.length; i++){
    const club = serieA[i]
    nameAndFouls.push({clubName: club.clubName, 
        foulsSuffered: club.foulsSuffered

     })
}

console.log(nameAndFouls)



 
 









