// function sayName() {
//     console.log("Saniya");
// }

// sayName()

//syntax
//  function functionname (par1,par2) {
//     line of code
//  }
// function addTwoNumbers(Number1,Number2){
//     console.log(Number1+Number2);   
// }
// const result = addTwoNumbers(3,4)
// console.log("result" ,result);

// function addTwoNumbers(number1,number2){
    //  let result = number1+number2
    //  return result
    // return number1+number2
// }
// const result = addTwoNumbers(3,5)
// console.log("Result = ",result);


function loginUserMessage(username ="sam"){
    if(username === undefined){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("saniya"))

