
  //Duplicate element in given Array 
  const arrayNumber=[1,2,3,2,5,6,5,7,9,8,9];
  const Duplicate = arrayNumber.filter((ele,index,arr)=>arr.indexOf(ele)!==index);
  console.log(Duplicate);

