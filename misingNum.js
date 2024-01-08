//---Find a missing element in given Array  1 to 10 

const  arrNum =  [ 1,2,3,4,6,7,8];
const  missing = [];

const findNum = (arr)=>{
     const minValue = Math.min(...arr);
     const maxValue = Math.max(...arr)
    for(let i =minValue ;i<maxValue ;i++){
        if(arr.indexOf(i)<0){
            missing.push(i);
        }
    }
    return (missing);
}
console.log(findNum(arrNum));