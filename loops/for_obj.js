//for in loop on object
const myObject ={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift: "swift by apple"
}

for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
} 
 
const programming =["js","ruby","cpp","swift"]

for (const key in programming) {
    console.log(programming[key]);
    
}