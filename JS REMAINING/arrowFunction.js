let add=(x,y) => x+y;
console.log(5,2);

let greet = (msg) => console.log(msg);
greet("Hello");

// function greet () {
//     console.log("Hello");
// }

const greet1 = () => console.log("Hello");
greet();

// Function greetName(name){
//     console.log(Hello ${name});
// }

const greetName = name => console.log(`Hello, ${name}`);
greetName("John");


//function add(a,b){
//return a+b;
//}

const add1=(a,b)=>a+b;
console.log(add(5,10));

var arr = [1,2,3,4,5];
//var mularr=arr.map(function (val) {
//return val*2;
//});

var mularr = arr.map(val => val *  2);
console.log(mularr);

// var sumofarr=arr.reduce(function (acc,val){
//     return acc + val;
// },0);

var sumofarr=arr.reduce((acc,val) => acc+val,0);
console.log(sumofarr);

// var filterarr=arr.filter(function(val){
//     return val>2;
// })

var filterarr=arr.filter(val=>val!=2);
console.log(filterarr);

//var findarr=arr.find(function(val){
//return val>2;
//});

var findarr=arr.find(val=>val==3);
console.log(findarr);

var forarr=arr.forEach(val=>console.log(val));
console.log(forarr);

//var forinarr=arr.forIn(function(val){
//console.log(val);
//});

// var forinarr=arr.forIn(val=>console.log(val));
// console.log(forinarr);// forIn only for objects

// var forofarr=arr.forof(function(val){
//     console.log(val);
// });

var forofarr=arr.forOf(val=>console.log(val));
console.log(forofarr);

const counter = {
    count:0,
    next:function(){return++this.count},
    current:function(){return this.count}
}
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());

function Person(name,age){
    this.name=name;
    this.age=age;
}

let p1 = new Person("John",25);
console.log(p1);

// function add (){
//     let total=0;
//     for(let i=0;i<arguments.length;i++){
//         total+=arguments[i];
//     }
//     return total
// }
// console.log(add(1,2,3,4,5));


// const add=(...args)=>{
//     let total = 0;
//     for(let i=0;i<args.length;i++){
//         total+=args[i];
//     }
//     return total;
// }
// console.log(add(1,2,3,4,5));