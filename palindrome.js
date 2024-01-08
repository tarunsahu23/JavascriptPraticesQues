//---------palindrom----------
var string = prompt("Enter Palindrome ");
string = string.toLocaleLowerCase();

const palindrom = (str)=>{
    const reverStr = str.split().reverse().join();
    if(reverStr==str){
        return true
    }else{
        return false
    }
}

console.log(palindrom(string));