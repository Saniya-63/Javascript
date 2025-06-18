//literal
const mysym = Symbol("key1") 


jUser ={
    name: "saniya",
    [mysym]:"myKey1",
    age:18,
    location:"Pune",
    email:"saniya@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","saturday"]
}

// console.log(jUser.email);
// console.log(jUser["email"]);
// console.log(jUser[mysym]);

jUser.email ="hitesh@chatgpt.com"
// Object.freeze(jUser)
jUser.email ="hitesh@ms.com"
console.log(jUser);

jUser.greeting = function(){
    console.log("Hello js user");
    
}

jUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
    
}
console.log(jUser.greeting());
console.log(jUser.greetingTwo());

