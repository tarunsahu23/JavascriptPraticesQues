//-------fibonacci series---------

var a = 0;
var b = 1;
for(let i=0;i<15;i++){
    var temp = a+b;
    a=b;
    b=temp
    console.log(temp);
}