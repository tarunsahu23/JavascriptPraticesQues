//-----------Union of two arrayj/setf----------------
var arr1 = [1,2,3,4,4,4,5,6,7,7];
var arr2 = [1,2,2,3,4,5];

var union = [...arr1 ,...arr2];
console.log([...new Set(union)]);