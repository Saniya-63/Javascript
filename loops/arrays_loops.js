//for of loop
const arr = [1,2,3,4,5,6,7,8,9]

// for (const num of arr) {
//     console.log(num);
    
// }

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

//maps

const map = new Map()
map.set('IN' ,"India")
map.set('USA' , "United States of America")
map.set('Fr',"France")

// console.log(map);
for (const [key,value] of map) {
    console.log(key,':-',value);
    
}


