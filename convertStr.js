//---------convert frist letter in uppercase-----------
/* function used 
charAt() : to get a charter at index 
toUpperCase() : to uppercase character
map() : a return a new array
slice() : to slice any charter from string */

let input = prompt('Enter string');

let fristCaptial = (str)=>{
 var newstr = str.split(' ');
 var newArr = newstr.map((value)=>{
    return value.charAt(0).toUpperCase() + value.slice(1)
 })
 return newArr.join(' ')
}
console.log(fristCaptial(input));