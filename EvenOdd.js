//------------Even and Odd -------------------

const Num = [1,2,3,4,5,6,7,8,9,10,12];

const Even = Num.filter((item)=>{
    return item%2===0
})
const odd = Num.filter((item)=>{
    return item%2==!0
})
console.log(`Even Number ${Even}`);
console.log(`odd Number ${odd}`);