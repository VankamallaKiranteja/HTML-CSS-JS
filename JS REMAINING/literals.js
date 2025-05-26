let a=10;
let msg=" a value: " +a;  
let msg1=`a value:${a}`;

console.log(msg);
console.log(msg1);
console.log(`a value: ${a}`); // Template literals

//${} string interpolation

//object literal syntax

function createproperty(name,status){
  return{
    name,status // shorthand property names
  }
}
console.log(createproperty("kiran","single"));
// shorthand property names
console.log(createproperty("ganesh","married"));
obj1=createproperty("kiran","single");
console.log(obj1);

//commputed property names
let name1="EMPLOYEE";

let person={
  [name1]: "kiran",
  age: 30,
  [name1+"ID"]: 1234
}

console.log(person);

let prefix="Machine";
let mch={
  [prefix+"ID"]: 1234,
  [prefix+"Name"]: "Machine1",
  [prefix+"Status"]: "Active",
  [`${prefix} hours`]:10,
  [`${prefix} location`]: "HYD"
}
console.log(mch);

// Destructuring assignment
// Destructuring assignment is a syntax that allows unpacking values from arrays
// or properties from objects into distinct variables.
// It is a convenient way to extract values from complex data structures.
// Destructuring assignment can be used with arrays and objects.
let arr=[1,2,3,4,5];
let [a1,b1,c1,d1,e1]=arr;
console.log(a1,b1,c1,d1,e1);
let [a2,b2,...rest]=arr; // rest operator
console.log(a2,b2,rest); // rest operator 
let arr1=[...arr]; // spread operator
console.log(arr1); // spread operator 

let arr2=[...arr,6,7,8]; // spread operator
console.log(arr2); // spread operator

let obj={x:1,y:2,z:3};
let {x,z}=obj; // object destructuring
console.log(obj);
console.log(x,z); // object destructuring
// let {m1,m2}=obj; // object destructuring
// console.log(m1,m2); // object destructuring
let {x:x1,y:y1,z:z1}=obj; // object destructuring,
console.log(x1,y1,z1); // object destructuring


// function destructuring
function getUserInfo({name,age}){
  console.log(`Name: ${name}, Age: ${age}`);
}
let obj4={
  name: "John",
  age: 30,
  city: "New York"
}
getUserInfo(obj4); // function destructuring
