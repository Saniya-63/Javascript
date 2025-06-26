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
// console.log(loginUserMessage("saniya"))



// parameter passing
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400));

const user ={
    username :"saniya",
    price: 199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)
handleobject({
    username :"sam",
    price : 399
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,300,456,323,243]));
