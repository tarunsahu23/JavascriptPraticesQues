/*
filter() : method return matched value in array from collection
find(): method return frist value that matched in collection and not check remaining of 
value in  collection  
*/

const empArr = [ 
    {name :  "king",age :30},
    {name :  "Queen",age :35},
    {name :  "Samrat",age :40},
    {name :  "Raja",age :25},
    {name :  "Sultan",age :45},
    {name :  "king1",age :50},
]

/*const filteritem = empArr.filter((item)=>{
    return item.age > 30;
*/
const finditem = empArr.find((item)=>{
    return item.age > 30;

})
console.log(finditem);