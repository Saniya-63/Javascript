// console.log("Comparison Operators");
// console.log(2>1); // true
// console.log(2<1); // false
// console.log(2>=1); // true
// console.log(2<=1); // false
// console.log(2==1); // false
// console.log(2!=1); // true

// console.log("2" >1);// true, because "2" is converted to a number
// console.log("02" >1);// true, because "2" is converted to a number

//note: avoid this type of conversions
// console.log(null>0); // false, null is converted to 0
// console.log(null==0); // false 
// console.log(null>=0); // true, null is converted to 0
// console.log(undefined==0); // false, undefined is not equal to 0
// console.log(undefined>0); // false, undefined is not converted to a number
// console.log(undefined>=0); // false, undefined is not converted to a number
// console.log(null==undefined); // true, null and undefined are equal


//strict check === checks value and data types
console.log("2" ===2); // false, because "2" is a string and 2 is a number
