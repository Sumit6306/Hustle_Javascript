/*A set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it*/

function pow() {
    return 4 ** 5             // This is a step to create a function
}
console.log(pow());

function addTwoNumber(number1, number2) {   //During the creation of fuction the value are called parameter 
    console.log(number1 * number2);

}
addTwoNumber(4, 3);            //During the call the value should be argument


// Create user logged in 

function userLoggedIn(name) {
    return `Welcome ${name} you just Logged in !!`
}
console.log(userLoggedIn("SUMIT"));

// For calculating cart price

function cartPrice(...num1) { //"..."This is called rest/spread operator depend where we use 
    return num1;
}
console.log(cartPrice(200, 300, 400));// Spread/rest operator make this value in array format and then this value will add easly


//For handling object through function
//Note:- We have to keep eye on casesenstive on  keys and we can also handle it
const user = {
    name: "SUMIT",
    age: 21,
}
function objectHandle(anyobject) {
    console.log(`Your name is ${anyobject.name} and your age is ${anyobject.age}`);

}
objectHandle(user)
// We can also pass argument for this 
objectHandle({
    name: "SUMIT PANDEY",
    age: 20
})


// "This" keyword  keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods.It can't be access in functions.
const username = {
    jiapkanaam: "SUMIT",
    jiaapkiage: 20,


    aapkaShawagthai: function () {
        console.log(`${this.jiapkanaam},Aapka shwagat hai`); // 
    }

}
username.aapkaShawagthai();


//Arrow function 
const addTwo=(Nub1 ,nub2)=>{
return Nub1+nub2;  //If you are putting curly braces you have to use return for even one line of code 
}
console.log(addTwo(3,5));//8

//Here you don't need to use "Return "keyword for one line of code 
const add =(n1,n2)=> (n1*n2)
console.log(add(3,5));//15



/*(IIFE) Immeditealy Inkvoke Function Expression ----->  Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope*/

(function name(){
    console.log("JAI SHREE KRISHNA");//------->It is also called named iife 
    
})();//-----> This pareenthes is used as call of that function  some time it shows error the solution is to put semi-colon(;) at last
((ji)=>{
    console.log(`${ji}`);//------->It is also called  simple or none name iife
    
})("JAI HO")

