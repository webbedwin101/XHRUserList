
// On page load, pull the users endpoint from https://jsonplaceholder.typicode.com/users using XHR
// Generate the table of users for #usersTable (include a button/link in the fourth column to let you view an individual record)
// If a button/link in the table is clicked, populate #userView with the full details of the user.
// (bonus points if you make it a nice form as if the user was editable)

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json)) 

// function reqListener () {
//     console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "https://jsonplaceholder.typicode.com/users");
// oReq.send();

function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        document.getElementById("userList").innerHTML =
        this.responseText;
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhttp.send();
}