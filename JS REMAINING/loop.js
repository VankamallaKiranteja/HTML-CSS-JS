let arr=[1,3,3,4,2,2];
for(let a of arr)
console.log(a);
let obj={a:1,b:22,c:"iu"};
console.log("                ");
for(let x in obj)
{
  console.log(x);
  
}


const arr1=[1,3,32,,12,1,12,21];
for(const a of arr1){
  console.log(a);
}
console.log("==========-------------===============")
for(const a in arr)
{
  console.log(a,arr1[a]);
}
const obj1={
  a:1,
  b:2,
  c:3
};
console.log("-----------------");

for(const x in obj1)
{
  console.log(x,obj1[x]);
  
}

