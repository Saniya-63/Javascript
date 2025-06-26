
let a=300
if(true){ //local scope 
    let a =10
    const b =20
    var c =30
    console.log("inner value of a ",a);

}
 console.log("global scope value of a ",a); //not defined
// console.log(b); //not defined
 console.log(c); // 30 -global scope
 
 
//nested scope
 function one (){
    const username ="saniya"
    function two (){
        const website = "Github"
        console.log(username);   
    }
    // console.log(website);
    two()
 }
one()

if(true){
    const username ="saniya"
    if(username === "saniya"){
        const website = "Github"
        console.log(username +website);
        
    }
    // console.log(website);
    
}
// console.log(username);
///*************important********/

console.log(addone(5));
// console.log(addtwo(5)); //hoisting : using before declaration
function addone(num){
    return num+1
}


const addTwo = function(num){
    return num+2
}
addTwo(5)