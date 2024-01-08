//----factorial-----------
const input = prompt("Enter Number for Factorial");
var fact = 1;
if (fact < 0) {
    console.log(`Factorial of ${input} is not possible`);
}
else{
    for (let i = 1; i <= input ; i++)
    {
        fact = fact * i
    }   
    console.log(`Factorial of Number is ${input} is ${fact}`);
}
