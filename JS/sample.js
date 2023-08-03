var a=25;
console.log("before "+" " +a)
{
    var a=6
    console.log("after "+" " +a)
}
console.log("block "+" " +a)

let b=13;
console.log("before "+" " +b)
{
    let b=6
    console.log("after "+" " +b)
}
console.log("block "+" " +b)

const c=38;
console.log(c)

let d=0
if(d==0){
    console.log("the no. is zero and add 1 to make it positive")
    d=d+1
}
if(d>0){
    console.log("the no. is positive")
}
else{
    console.log("the no. is negative")
}

a=6
for(i=0; i<a;i++){
    console.log(i)
}

i=0
while(i<a){
    console.log(i)
    i++
}

array=[10,20]
array.forEach(element => console.log(element));
