// find Min and Max in given javascript

const arrNumber = [1,3,4,5,6,10,7,11];

const maxNumber = (arr)=>{
    return arr.reduce(function (pre,cur) {
        return  pre > cur ? pre : cur
    })
}
console.log(`Maximum Number ${maxNumber(arrNumber)}`);

// find Min Number in given javascript
const minNumber = (arr)=>{
    return arr.reduce(function (pre,cur) {
        return  pre < cur ? pre : cur
    })
}
console.log(`Minmum Number ${minNumber(arrNumber)}`);