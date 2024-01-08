/*--------KM to Mile--------------
 1 KiloMeter = 0.621371 ---->factor
 1 Mile = KM * 0.621371
 */

 var input = prompt('Please enter km to convert in Mile');
 
 const factor = 0.621371;
const km = input*factor;
console.log(`Km is ${input} is in Mile is ${km}`);