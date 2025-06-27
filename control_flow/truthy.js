const userEmail = "abc.ai"

if(userEmail){
    console.log("got email");
} else{
     console.log("dont have user email");
      
}
/*
falsy values        Truthy values
1.false             1."0"
2.0                 2.'false'
3.-0                3." "
4.BigInt 0n         4.[],{}
5.""                5. function(){}
6.null
7.undefined
8.NaN

//checking object is empty
const emptyobj = {}
if(object.keys(emptyobj).length === 0){
    console.log("object is empty");
} 

//checking array is empty
if(userEmail.length ===0){
    console.log("Array is empty");
}

  
//***nullish coalescing operator (??) :null undefined */

let val1;
// val1 = 5 ?? 10   //5
// val1 = null ?? 10    //10
// val1 = undefined ?? 15  //15
val1 = null ?? 10 ?? 0
console.log(val1);


/* 
Ternaray operator
condition ? true: false
*/

const iceteaPrice = 100
iceteaPrice <=80 ? console.log("less than 80"): console.log("more than 80");

