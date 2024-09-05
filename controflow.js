const temp =40

if (temp > 23) {                     // If statement is always use when the condition should "true"
    console.log("Temp is greater");
} else {                             //"False" condition is always excuted by else block
    console.log("Temp is smaller");
}


const balance =1000;
if(balance > 500) console.log("YES"); //You can also declare in  this form But it would not preferable


const value= 1000;

if (value>500) {
    console.log("LESS THAN 500");
}else if(value> 750){
    console.log("LESS THAN 750");

}else if (value > 1500){
    console.log("GREATER THAN 1000");
}else{
console.log("NO");

} 
//
const userLoggedByNumber =true;
const userLoggedByEmail=false;
const userSuccessThePayment=true;
const userLoggedByGoogle = true;
const userName = "SUMIT PANDEY" 
 function user(name) {
console.log(`WELCOME ${name}`);

 }
if(userLoggedByNumber && userSuccessThePayment ){ //Introducting AND operator
    user(userName)
    
}
if(userLoggedByEmail||userLoggedByGoogle||userLoggedByNumber){  //Introducing OR operator
    user(userName)
}

// "Switch" statement

const key = 5;
switch (key) {
    case 1:
        console.log("JAN");
        break;
    case 2:
        console.log("FEB");
        break;
    case 3:
        console.log("MAR");
        break;
    case 4 :
        console.log("APR");
        break;
    case 5:
        console.log("MAY");
        break;
    default:
        console.log("NIKAL BSDK");
        break;
}

//Exercise :-

const userEmail="sumit@gmail.com"
if (userEmail) {
    console.log("SUCCESFULLY LOGIN");

}else{
    console.log("ENTER THE EMAIL ");

}
//Falsy value:- 0,-0,Bigint=0n,null,NaN,undefind,""--->empty string without space

//Truthy value:-"0",'jai shree ram'," "-->empty string with space,[]-->array,{}--->Object

    //    " Nullish coalescing operato" "??"---->when dealing with "null" or "undefined" values. The nullish coalescing operator only considers "null" and" undefined" as values to be replaced

    let val1=5 ?? 10;
    console.log(val1);
    val1=null ?? 10;
    console.log(val1);
    val1= undefined ?? 15;
    console.log(val1);

    // Ternary operator
    condition ? true:false

