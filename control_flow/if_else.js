// if(condition){

// }
// else
// {
// 
// }

// ***operators for comparison
// < ,>, ,<=,>=,== ,!= ,===,

// const isUserLoggedin =true
// if(2 =="2"){     //'==' checks only value
// console.log("executed");
// }

// if(2 ==="2"){     //'===' strictly checks on values as well as dataypes
// console.log("executed");
// }

// const score =200

// if(score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`);  //fly
// }
//  console.log(`User power: ${power}`); //undefined bcs statement is out of loop scope 

//****short hand notation
// const balance =1000
// if(balance >500 ) console.log("test");

//****nesting
// const balance =1000
// if(balance <500){
//     console.log("less than");
// }else if(balance <750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }


const isUserLoggedin = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (isUserLoggedin && debitCard) {
    console.log("allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User loged in");
    
}