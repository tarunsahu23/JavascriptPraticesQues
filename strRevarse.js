//-----------string reverse------------

// const reversestring= (str)=>{
//  var strTOArray = str.split("");
//  var arrayReverse = strTOArray.reverse();
//  var strReverse = arrayReverse.join("");
//  return strReverse;
// }
// console.log(`Reverse string ${reversestring("tarun")}`);

//-----------------Reverse String without method--------------------

let str ='tarunsahu';
let reverseStr = '';

for(let index = str.length -1 ; index >= 0;index--){
    reverseStr += str[index];
}
console.log(reverseStr);