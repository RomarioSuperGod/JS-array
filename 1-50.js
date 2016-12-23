/**
 * Created by admin on 23.12.2016.
 */


while (true){
        var a = +prompt('enter number 0-50','0');
            if ( a<0 || a>50 ){
                alert('wrong number plz enter correct number!!!');
            }
            else if(isNaN(a)){
                alert('We need only a number! plz enter correct number!!!');
            }
            else {
                break;
            }
        }

        var b=[];
        var i=0;
for (i; i<500; i++){
    if (i%a==0){
        b[i]=i;
    }
}
console.log(b);


for (var j=b.length; j>=0; j--){
        if(j%a==0){
           console.log(b[j]);
        }
}
var sum=1;
for (var i=1; i<500 && i>0; i++){
    if (b[i]%a==0){
        sum*=b[i];
    }
}
console.log(sum);

