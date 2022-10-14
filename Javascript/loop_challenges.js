/* Print odds 1-20
for (var o=1; o<20; o++){
    if (o%2 !=0){
        console.log(o);
    }
}
*/
/* Decreasing multiples of 3
for (var d=100; d>0; d--){
    if (d%3 ==0){
        console.log(d);
    }
}
*/
/* Print the sequence 
var s="4"
for (var p=4; p>-3.5; p--){
    temp=p;
    p=temp-1.5;
    s +=p;
    p+=1;
}
console.log(s); */
/* Sigma 
var sum=0;
for( var i=1; i<101; i++){
    sum += i;
}
console.log(sum); */
/* Factorial */
function Factorial(num){
    if (num>0 && num<=1){
        return 1;
    }
    else {
        var result=num * Factorial(num-1);
        console.log(result);
    }
}
Factorial(12);