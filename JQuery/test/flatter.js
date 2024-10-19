function flatterArray(arr){
    let result=[];

    // let subres =[];
    function flatter(arr){
        for(let i of arr){
            if(Array.isArray(i))
               flatter(i);
            else if (typeof i === "number")
                result.push(i);
            else 
                continue;
        }
    
    }
    flatter(arr);
    return result;

    

}
const ans = flatterArray([1, [2, "a"], [4, [5, 6]], 7]);
console.log(ans);