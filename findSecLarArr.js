//find Second Largest value and remove first  value in array

//-----------largest value----------

const arrNumber = [9,10,1,20,4,6];
const largestNum = (arr)=>{
    firstValue = Math.max(...arr);
    index = arr.indexOf(firstValue);
    arr.splice(index,1);
    secondValue = Math.max(...arr)
    return (secondValue)
}

console.log(largestNum(arrNumber));
