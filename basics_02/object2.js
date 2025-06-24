// const tinderUser = new Object()

const tinderUser ={}

tinderUser.id ="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedin = false
// console.log(tinderUser);

const regUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"saniya",
            lastname:"shinde"
        }
    }
}

// console.log(regUser.fullname.userfullname.lastname);

const obj1 ={1:"a" ,2:"B"}
const obj2 ={3:"a" ,4:"B"}
const obj4 ={5:"a" ,6:"B"}
// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({} ,obj1,obj2,obj4)
// console.log(obj3);

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"shsgh@gmij.co"
    },
    {
        id:2,
        email:"shsgh@gmij.co"
    },
    {
        id:3,
        email:"shsgh@gmij.co"
    },
]
 
// users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// tinderUser.isLoggedin = false
// console.log(tinderUser.hasOwnProperty('isLoggedin'));


// destruction of object
const course ={
    coursename :"javascript",
    price:"999",
    courseInstructor:"saniya"
}
const {courseInstructor : instructor} = course
console.log(instructor);

