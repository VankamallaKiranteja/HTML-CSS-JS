var studentForm = document.forms[0];
const emptyFieldError = " * Input cannot be empty";
const nameError = "* Name must be between 6 and 10 characters long";
const ageError = " * Age must be above 18";
var studentValidate = false;
var forminputs = document.forms[0].children;
studentForm.addEventListener("submit",function (event){
    event.preventDefault();
    //validate the form
    let nameValid = hasValue(studentForm.elements["studentName"], emptyFieldError,nameError);
    let ageValid = hasValue(studentForm.elements["studentAge"], emptyFieldError, ageError);
    //if valid, submit the form
    if(nameValid && ageValid) {
        alert("Demo only. No form was posted.");
    }else{
      alert("enter correct form");
    }
});
function hasValue(element, emptyFieldError, nameError) {
    if(element.value === "") {
        element.nextElementSibling.innerText = emptyFieldError;
        return false;
    } else if (element.type === "text" && (element.value.length < 6 || element.value.length > 10)) {
        element.nextElementSibling.innerText = nameError;
        return false;
    } else if (element.type == "number" && parseInt(element.value) < 18) {
        element.nextElementSibling.innerText = ageError;
        return false;
    } else {
        element.nextElementSibling.innerText = "";
        return true; 
    } 
}