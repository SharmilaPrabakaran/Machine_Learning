//finding the rest of an array

var num =[4,2,7,5];
function rest(a){
var i = 1;
var b = [];
while (i < a.length){
  b.push(a[i]);
  i++;
}
return b;
}
console.log(rest(num))//[2,7,5]
