var usrForm = document.getElementById("userForm");
var obj = {};
var users = [];

function getUserName(e) {
  console.log(e.target.name, e.target.value);
  obj[e.target.name] = e.target.value.trim();
}

for (var i = 0; i < usrForm.children.length - 1; i++) {
  usrForm.children[i].addEventListener("change", getUserName);
}

function getData(e) {
  e.preventDefault();
  console.log("User submitted:", obj);
  users.push({ ...obj }); // Push a copy to avoid reference issues
  console.log("All users:", users);
  obj = {}; // Reset for new entry
  for (var i = 0; i < usrForm.children.length - 1; i++) {
    usrForm.children[i].value = "";
  }
}

usrForm.addEventListener("submit", getData);
