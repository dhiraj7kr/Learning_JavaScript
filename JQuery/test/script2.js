
// function Fibonacci(n) {
//     let fibSequence = []; 
// let a = 0; 
// let b = 1; 
// let count = 0; 

//      while (count < n) 
//     {
//      fibSequence.push(a); 
//         let next = a + b; 
//         a = b; 
//         b = next; 
//         count++; 
//      }
     
//  return fibSequence; 
//    }
// const fiboNumbers = Fibonacci(10);

// console.log(fiboNumbers.join(', '));

function fibonacci(n){
    let fibSequence =[];

    let a=0;
    let b= 1;

    let count=0;

    while(count <n){
        fibSequence.push(a);
        let next = a+b;
        a=b;
        b=next;
        count++
    }
    return fibSequence;
}
const fiboNumbers = fibonacci(10);

console.log(fiboNumbers.join(","));

