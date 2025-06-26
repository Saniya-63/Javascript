const userEmail = "abc.ai"

if(userEmail){
    console.log("got email");
} else{
     console.log("dont have user email");
      
}
/*
falsy values        Truthy values
1.false             1."0"
2.0                 2.'false'
3.-0                3." "
4.BigInt 0n         4.[],{}
5.""                5. function(){}
6.null
7.undefined
8.NaN