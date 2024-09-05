//  Array Specific Loops
let nums=["JAI SHREE RAM","JAI BAJARANG BALI","JAI SHREE KRISHNA ","JAI BHOLE BABA"]

for (const num of nums) { // Variable ke baad hum bas koi bhi name rkhte hai and uskoo (iterater)bolte hai
    console.log(num);
    
}
// FOR of is allso use for String

const greet= " JAI SHREE RAM"

for (const st of greet) {
    console.log(`INDIVIUAL ALPHABET ${st}`);
}
// Map 
const map = new  Map()
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('FR',"FRANCE")
for (const [key,value] of map) {
    console.log(key,':-', value);
}
 

// 
const arrA=[1,2,3,4,5,6,7,8,9];
const numS= arrA.filter( (num) => num > 4 )
console.log(numS);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1976, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let bookuser= books.filter( (Kitab)=>Kitab.genre==='Science')
//console.log(bookuser);
bookuser= books.filter((pustak)=>{ return pustak.edition>=1900}) // We have to use return here other wise it give us empty error
//console.log(bookuser0);

bookuser= books.filter((bk)=>{
    bk.publish >= 2000 && bk.genre === "science"

}) 
console.log(bookuser);



