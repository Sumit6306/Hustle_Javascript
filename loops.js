
//The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop

// Print number from 1 to 10
for (let index = 0; index <=10; index++) {
    const element = index;
    console.log(element); 
}

// Multiplication of table from 1 to 10 
for (let i = 0; i <= 10; i++) {
    console.log(`Outer:${i}`);
   for (let j = 0; j <= 10; j++) {
console.log(i+"*"+ j +'=' + i*j);
    

   }
    
}
// Applying for loop on array
let arr=["SUMIT","SACHIN","SHIVAM"]
for (let i = 0;i<arr.length;i++) {
    const element = arr[i];
    console.log(element); 
}
 
//While loop:-

let idx=0;
while(idx <=10){
    console.log(`Print the number ${idx}`);
    idx = idx+2
}

let arrA = ["SUMIT","SACHIN","SHIVAM"]

let arrI=0;
while (arrI<arrA.length) {
    console.log(` MY NAME IS - ${arrA[arrI]}`);
    arrI++;
}

// Do-While loop:-
let syN = 0;
do {
    console.log(`Print The Number - ${syN}`);
    syN++;
    
} while (syN<=10);
