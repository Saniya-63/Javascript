//Merging arrays using push(),concat,spread
const m = ["thor" ,"ironman" ,"Spiderman"]
const dc = ["superman","flash","batman"]

// m.push(dc)
// console.log(m[3][1]);

// const all = m.concat(dc)
// console.log(all);

// const all_new =[...m,...dc]
// console.log(all_new);

//to solve complex arrays
// const another_array =[1,2,3,[4,5,6],7,[67,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("saniya")); //checking is array
console.log(Array.from("saniya")); //convert string to array
console.log(Array.from({name:"saniya"}));  //imp

let score1 = 100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3));



