const coding =["js","ruby","swift","cpp"]
// coding.forEach( function (item){
//     console.log(item);
    
// })

//****using arrow function
coding.forEach( (val)=>{
    // console.log(val);
    
})

function printme(item){
    // console.log(item);
    
}

// coding.forEach(printme);

// coding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr);
    
// })

//*****for each loop of array of objects
const mycoding =[
    {
        languageName:"javascript",
        fileName:"js"
    },
    {
        languageName:"python",
        fileName:"python"
    },
    {
        languageName:"cpp",
        fileName:"c++"
    }
]
mycoding.forEach( (val)=>{
    // console.log(val.fileName);
    
})

//********forEach loop does not return any value */
// const coding =["js","ruby","swift","cpp"]

// const values =coding.forEach( (item)=>{
//     console.log(item);
    
// })
// console.log(values);
