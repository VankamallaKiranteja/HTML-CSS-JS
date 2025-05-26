var usrform = document.getElementById("register");
var user = {};
var users = {};
var fieldsets = usrform.querySelectorAll("fieldset");
for (var i = 0; i < fieldsets.length; i++) {
    let obj = {};
    var inps = fieldsets[i].querySelectorAll("input");
    for (var j = 0; j < inps.length; j++) {
        inps[j].addEventListener("change", function (e) {
            if (e.target.type !=="submit"){
            obj[e.target.name] = e.target.value;
        }

    });
}
user[fieldsets[i].querySelector("legend").innerText] = obj;
}
function getData(e) {
    e.preventDefault();
    users.push(user);
    user = {};
    console.log(users);
    usrform.reset()
}
usrform.addEventListener("submit", getData);