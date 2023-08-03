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
/* array */

/* array=[10,20]
array.forEach(element => console.log(element)); */


const array=[10,20,"amitzz",23.0,Date()]
console.log("before change :")
for (var ele in array){
    console.log(array[ele])
}
console.log("after change :")
array.push("Full stack")

for(var ele of array){
    console.log(ele)
}
array.pop("Full stack")

for(var ele of array){
    console.log(ele)
}
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
console.log("after poping all the element")

if(array.length > 0){
    console.log("elements are present")
    
    for(var ele of array){
    console.log(ele)
    }
}
else{
    console.log("No elements are present")
}


array.push(1)


if(array.length > 0){
    console.log("elements are present")
    
    for(var ele of array){
    console.log(ele)
    }
}
else{
    console.log("No elements are present")
}

/* objects */
a={
    car:"Audi",
    model:"A8",
    airbags:8,
    wheels:5,
    color:"black"
}

console.log(a['color'])
console.log(a.airbags)
var some = 'model'
console.log(a[some])
console.log(a)
a.car="BMW"
console.log(a)
a.sunroof={isPresent:"yes",shape:"rectangle"}
console.log(a)
console.log(a.sunroof.isPresent)

for(var ele in a){
    console.log(ele +":"+ a[ele])
    if(typeof a[ele] == "object")
    {
        for (var val in a[ele]){
            console.log(val+":" + a[ele][val])
        }
    }
}


