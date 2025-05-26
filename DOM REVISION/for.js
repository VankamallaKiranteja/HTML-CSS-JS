// 🔁 for...of — Use it to iterate over values of an iterable (like arrays, strings, sets, maps, etc.)
// ✅ 1. Array Example

let numbers = [10, 20, 30];

for (let num of numbers) {
  console.log(num);  // prints 10, 20, 30
}
// ✅ 2. String Example
let name = "Kiran";

for (let char of name) {
  console.log(char);  // prints K, i, r, a, n
}
// ✅ 3. Set Example

let fruits = new Set(["apple", "banana", "apple"]);

for (let fruit of fruits) {
  console.log(fruit);  // prints apple, banana (no duplicates)
}
// ✅ 4. Map Example

let studentMarks = new Map([
  ["Alice", 90],
  ["Bob", 85]
]);

for (let [name, mark] of studentMarks) {
  console.log(`${name} scored ${mark}`);
}
// ✅ 5. arguments Object (in a function)

function showArgs() {
  for (let arg of arguments) {
    console.log(arg);
  }
}

showArgs("one", "two", "three");
// ❌ Where not to use for...of:
// On plain objects ({}), because they are not iterable.

let obj = { name: "Kiran", age: 23 };

// This will throw an error:
// for (let key of obj) { ... } 

for (let key in obj) {
  console.log(key, obj[key]);  
}
  // ✅ Use for...in here