var userForm = document.getElementById("form");
var usersData = [];
var userInput = {};

// Capture input changes
function handleInputChange(e) {
    userInput[e.target.name] = e.target.value.trim();
}

// Attach change event to input and textarea elements using traditional for loop
for (var i = 0; i < userForm.elements.length; i++) {
    if (userForm.elements[i].tagName === "INPUT" || userForm.elements[i].tagName === "TEXTAREA") {
        userForm.elements[i].addEventListener("change", handleInputChange);
    }
}

// Handle form submission
userForm.addEventListener("submit", function (e) {
    e.preventDefault();

    usersData.push({ ...userInput });
    userInput = {};

    updateTable();

    // Clear form fields using traditional for loop
    for (var i = 0; i < userForm.elements.length; i++) {
        if (userForm.elements[i].tagName === "INPUT" || userForm.elements[i].tagName === "TEXTAREA") {
            userForm.elements[i].value = "";
        }
    }
});

// Create or update user data table
function updateTable() {
    var existingTable = document.getElementById("user-table");
    if (existingTable) {
        existingTable.remove();
    }

    var table = document.createElement("table");
    table.id = "user-table";

    var thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Father Name</th>
            <th>Mother Name</th>
            <th>Current Address</th>
            <th>Permanent Address</th>
        </tr>`;
    table.appendChild(thead);

    var tbody = document.createElement("tbody");

    for (var i = 0; i < usersData.length; i++) {
        var user = usersData[i];
        var row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.firstname || ""}</td>
            <td>${user.middlename || ""}</td>
            <td>${user.lastname || ""}</td>
            <td>${user.fathername || ""}</td>
            <td>${user.mothername || ""}</td>
            <td>${user.currentaddress || ""}</td>
            <td>${user.permanentaddress || ""}</td>`;
        
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    document.body.appendChild(table);
}
