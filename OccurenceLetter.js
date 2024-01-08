//-------Occurence of letter--------

var string = prompt('Enter the string')
var letter = prompt('Enter the letter')
let strlenght= string.length;
var counter = 0 ;
for(let i=0;i<strlenght;i++){
    if(string[i]==letter){
        counter++;
    }
}
console.log(`String is ${string} and occrunce of letter ${letter} is ${counter}`);