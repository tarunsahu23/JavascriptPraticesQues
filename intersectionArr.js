//-----Find intersection of two Array/set-----------

const arr1 = [1,2,3,4,4,4,5,6,7,7];
const arr2 = [1,2,2,3,4,5];

const   intersection = arr1.filter((ele)=>{
    return arr2.includes(ele)
})

console.log([...new Set (intersection)]);