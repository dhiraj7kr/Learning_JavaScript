// function chunkArray(array, size) {
// const result = [];
// for (let i = 0; i < array.length; i =i+ size) {
// const chunk = array.slice(i, i + size);
// result.push(chunk);
// }
    
//  return result;
// }
//   const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
//   const size1 = 2;  // for size 2
//   const arr1 = chunkArray(array1, size1);

//   const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 0,6,8];
//   const size2 = 5;  //  try for size 5
//   const arr2 = chunkArray(array2, size2);


//   console.log(arr1);  // for array1 and size 2
//   console.log(arr2); // for array 2 and size 5
  


function chunkArray(array, size){
  const result =[];
  for(let i=0; i<=array.length; i= i+size){
    let chunk = array.slice(i, i+size);
    result.push(chunk);
  }
  return result;
}

const array1 =[1,2,3,4,5,6,7,8,9,0];
const size1= 4;

const chunk1 = chunkArray(array1, size1);

console.log(chunk1);
