//---------Merage two Array--------------

const arr1 = ['1','2','3','4'];
const arr2 = ['5','6','7','8'];

//---concat-----

const finalArr = arr1.concat(arr2);
const sortArr = finalArr.sort(function(a,b){
    return b-a;
})
console.log(sortArr);