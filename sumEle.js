//------------Sum Element in Array-----------
const Num = [1,2,34,5];
const sumNum = (arr)=>{
return arr.reduce((pre,cur)=>{
    return pre + cur
})
}
console.log(sumNum(Num));