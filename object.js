/*The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax*/


const jobject = {
    name: "SUMIT",
    email: "sumitpandey67890@gamil.com",
    age: 18,
    location: "Lucknow"
}
//Access of oject 
console.log(jobject.name);
console.log(jobject["age"]);//In this case we value in string format between square brackets


// Important for interview create a symbol and add it like key and then print 
const mykey = Symbol("keys");
const hobject = {
    age: 20,
    [mykey]: "keys",
    location: "Gorakhpur"
}
console.log(hobject[mykey]);

//Here something important:-
//We can freeze any object that should stop any change in object 

Object.freeze(mykey)// After using this is stop any other change in object 

    //********************************OBJECT THROUGH CONSTRUCTOR ***********************************/
const myobj = new Object()//through constructor or singleton
const yourobj = {}// Its is also a way by which we can declare object trhough "Non - singleton object "
//value in the non singleton Method
yourobj.name = "SUBHASH"// Output will be {SUBHASH}
console.log(yourobj);

//We can also do nesting in object 

const user = {
    name: "SUMIT",
    Email: {
        mail: "sumitpandey67890@gmail.com"
    },
    Course: {
        BCA: {
            fullform: "Bachelor's of computer application"
        }
    }
}
console.log(user);//entire user data 
console.log(user.Email.mail);//for specific access of object

//We can assign to two object in one object or compile to object 

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}

//concate two object

const obj3= Object.assign({},obj1,obj2)//
    console.log(obj3);
const obj4={...obj1,...obj2}////Their are one more way but it was best pratice in all of them and it was frequently used 
console.log(obj4);


//Value should be assingn in array also

const pUser=[
    {
        id:"123@",
        name:"Ayush",
        email:"ayush@gmail.com"
    },
    {
        id:"2345@",
        name:"himanshu",
        email:"himanshu@gmail.com"
    },
    {
        id:"2895@",
        name:"Rahul",
        email:"Rahul@gmail.com"
    },
    {
        id:"2804@",
        name:"vabhiav",
        email:"vaibhav@gmail.com"
    }
]
console.log(pUser);
//for specific access
console.log(pUser[1].name);
console.log(pUser[2].email);

//for accessing all keys 
console.log(Object.keys(pUser));//it give keys in array format

//for all the values of the object 
console.log(Object.values(pUser));
 
// to check it the property or not
console.log(pUser.hasOwnProperty("isLoggedIn"));


//***************************************************De-Structuring of object********************************


