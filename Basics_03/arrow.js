const user ={
    username:"saniya",
    price : 999,

    welcomeMsg: function () {
        console.log(`${this.username} welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMsg()
// user.username = "SAM"
// user.welcomeMsg()

// console.log(this);

// function chai(){
//     let username = "saniya"
//     console.log(this.username);
    
// }
// chai()

// function chai(){
//     let username = "saniya"
//     console.log(this.username);
    
// }


//Arrow function
// chai = () => {
//     let username = "saniya"
//     console.log(this.username);   
// }
// chai()

//explicit arrow function
// const addTwo =(num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(4,5));

//implicit arrow function
// const addTwo =(num1,num2) => (num1+num2)
// console.log(addTwo(4,5));

// returning objects in arrow function
const addTwo =(num1,num2) => ({username:"hitesh"})

console.log(addTwo(4,5));

// const myArray =[2,4,5,7,1]
