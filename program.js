console.log('Three varibles Swap');

function swap(temp ,a,b) {
temp=a;
a=b;
b=temp;
console.log('temp',temp);
console.log('a=',a);
console.log('b',b);
}

swap(1,3,2);
console.log('Now Two varibles Swap');
function twovarswap(a,b) {
    if(a==b){
        console.log('Same value so no swap');
  ; }
  else{
    a=a+b;
    b=a-b;
    a=a-b;

  console.log('var 1=',a);
console.log('var 2=',b);
}
}
twovarswap(1,2);
