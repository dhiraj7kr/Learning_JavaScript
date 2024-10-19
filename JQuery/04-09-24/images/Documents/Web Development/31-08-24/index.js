//**************DEMERIT POINTS******** */


// checkSpeed(72);
// checkSpeed(70);
// checkSpeed(188);


// function checkSpeed(speed){

//     const speedLimit =70; // not using let so that it cannot be changed.
//     const ptPerkm =5;

//     if(speed <=speedLimit + ptPerkm){
//         console.log('ok')
//         return;
//     }
//     else{
//         const points =Math.floor((speed - speedLimit)/5);
//         if(points >= 12)
//             console.log("License suspended");
//         else
//             console.log('points ', points);
//     }
// }


//******************* EVEN & ODD*/


// checkOddEven(10);

// function checkOddEven(Limit){

//     for(let i=0; i<=Limit; i++){
//     //     if(i%2===0){
//     //     console.log(i, 'Even');
//     // }
    
//     // else {
//     //     console.log(i, 'ODD')
//     // }

//     const message =(i%2===0)? 'Even':'Odd'
//     console.log(i, message);
// }
// }

//**************OBJECT PROPERTIES */

// const movie = {
//     title: ' :Don',
//     releaseYear : 2024,
//     director : ': Dhiraj',
//     rating : 4.5
// };

// const song = {
//     title: ' :Lela',
//     releaseYear : 2024,
//     singer : ': SRK',
//     rating : 4.5
// };

// showProperties(movie);
// showProperties(song);

// function showProperties(movie){

//     for(let key in movie)
//         console.log(key, movie[key]);



// }
//*************COUNT GRADE************ */

// 

//*************************STAR PATTERN */

// showStar(10);

// function showStar(rows){
 

//     for(let row =0; row<=rows; row++)
//         {
//             let pattern ='';
//         for(let i=0; i<row; i++)
//             // pattern += i;
//         pattern += '*';
//         console.log(pattern);
//         }
    

// }


//**************PRIME NUMBER************** */

// showPrime(10);

// function showPrime(limit){

//     for(let number=2; number<=limit; number++){
//         let isPrime= true;
//         for(let factor=2; factor <number; factor++){

//             if(number%factor===0){
//                 isPrime= false;
//                 break;
//             }
//         }
//         if(isPrime)console.log(number);
//     }

// }



//********************OBJECT IN JS */

//  const circlr = {
//     radius:1,
//     color :'yellow'
//  }

//  circlr.draw = function(){}

//  delete circlr.color;
//  delete circlr.draw;

//  console.log(circlr);

