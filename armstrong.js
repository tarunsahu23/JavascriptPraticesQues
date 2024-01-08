//---------------Armstrong Number -------------------

var number = prompt('Enter the number check is armstrong number');
var temp = number;
//var digitLength = number.toString().length;
var sum = 0;
while (temp>0) {
    var digit = temp%10;
    sum+=digit**3;
    temp=parseInt(temp/10);
}
if (sum==number) {
    console.log(`the number is Armstrong`);
}else{
    console.log('the number is not Armstrong number');
}