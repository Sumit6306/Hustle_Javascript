//Array in javscript
let myArray =[1,2,3,4,5,6];
console.log(myArray);

//Array initalizing through object 
 let arr= new Array(1,2,3,4,5);
 console.log (arr)

 // ************************************Array Method *************************************
let yArray=new Array(6,7,8,9,2)
yArray.push(3);
console.log(yArray);

let gArray=new Array(6,7,8,9,2)
gArray.pop();//Pop is basically used for removing last element from array
console.log(gArray);

let hArray= new Array(4,7,5,3,4,9);
hArray.unshift(9);// It shift entire array and it add the specfic value to statrting of the array (And it was not recommendable )
hArray.shift()// for shifting element
console.log(hArray);

gArray.concat(hArray)//It is used to add two array

//For copying same element in array 
let iArray =[1,2,3,4,5,6]
iArray.copyWithin(3)
console.log(iArray);

// Some method that are used as a questinor
let jArray= ["Ram","Lakshman","Hanumanji","Bharat","Shaturghan"]
console.log(jArray.includes("Batman"));

//To convert and join array 
let newArray=jArray.join();//Because of join method we can join "newArray"with "jArray"and convert into array--->String
console.log(newArray);


/*In some case their is a sitution in which we get array inside array  */
let jiArray= [12,2,3,5,6,[3,4,8,9,],5,[3,4,9,[0,2],2]]//---f-->In such type case we use "flat method"
let one_Array=jiArray.flat(Infinity)//----->we have to give depth of array that are going to be flat "Infinty is not recommendable"
console.log(one_Array);



//Some intersting case that should  be remeberd 

console.log(Array.isArray("Sumit"));//---->to check that given element is array or not

console.log(Array.from('HANUMANJI'));//------>It convert input as array

console.log(Array.from({Name:"SUMIT"}));//Intersting!!!!!



