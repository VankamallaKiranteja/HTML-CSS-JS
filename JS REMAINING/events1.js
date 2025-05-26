function getEventDetails(event) {
  console.log("Event triggered:", event);
}

var btn = document.getElementById("btn");
btn.onclick = function(e) {
  console.log("I am clicked", e);
};
btn.addEventListener("click", function(e) {
  console.log("I am clicked (addEventListener)", e);
});

var btn1 = document.getElementById("btn1");
function doSomething() {
  console.log("Hello, I am also clicked");
}
btn1.onclick = doSomething;
btn1.addEventListener("click", function() {
  console.log("I am also clicked (addEventListener)");
});

var userName = document.getElementById("name");
function getName(e) {
  console.log("Name field:", e.target.name, "Value:", e.target.value);
}
userName.onchange = getName;
userName.addEventListener("change", getName);

var btn2 = document.getElementById("btn2");
function handleClick() {
  console.log("Hi, I am also clicked");
  btn2.removeEventListener("click", handleClick);
  // btn2.setAttribute("disabled", "true"); // Optional
}
btn2.addEventListener("click", handleClick);

document.getElementById("mybtn").onclick = displayDate;
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
