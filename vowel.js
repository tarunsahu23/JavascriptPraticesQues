//---find vowel in javascript

var string = prompt("Enter name");
var vowel = ["a","e","i","o","u"];

const countvowel =(str)=>{
    count = 0;
    
    for(let letter of str.toLowerCase()){
        if(vowel.includes(letter)){
            count++;
        }
    }
    return count;
}
console.log(`Vowel ${countvowel(string)}`);