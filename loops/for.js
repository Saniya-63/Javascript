//for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for(let i=1;i<=10;i++){
//     console.log(i);
// }
// for(let i=0;i<=10;i++){
//     const element = i;
//     if(element == 5){
//         console.log("5 is best no");
//     }
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
    
//     for (let j = 0; j < 10; j++) {
//         // console.log(`inner loop value ${j} and inner loop ${i}`); //understanding inner & outer looping
//     //    console.log(i+'*'+j+' = '+i*j); //printing table
        
//     }    
// }

// let myArray = ["flash","batman","superman"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index]; 
//     console.log(element); 
// }

// break and continue
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("Detected 5");
        break //want to break flow of code  at certain condition 
    }
    console.log(`value of i is ${index}`);
    
}
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("Detected 5");
        continue // it detect the condition without breaking the flow of code
    }
    console.log(`value of i is ${index}`);
    
}