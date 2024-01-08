//-------------compare two array element ---------

var arr1=[2,6,9,8];
var arr2=[8,9,6,2];

const isArrSam = arr1.length == arr2.length && 

arr1.every((curEle)=>{
    if(arr2.indexOf(curEle)>-1){
        return curEle=[arr2.indexOf(curEle)];
    }
})

console.log(isArrSam);