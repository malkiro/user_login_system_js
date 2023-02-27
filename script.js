// Array to hold user details
var users = [
	{ username: "user1", password: "password1" },
	{ username: "user2", password: "password2" },
	{ username: "user3", password: "password3" }
];

// Function to check if username and password combination exists in users array
function isValidUser(username, password) {
	for (var i = 0; i < users.length; i++) {
		if (users[i].username === username && users[i].password === password) {
			return true;
		}
	}
	return false;
}

// Function to handle login button click
function logIn() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (isValidUser(username, password)) {
		localStorage.setItem("username", username);
		window.location.href = "home.html";
	} else {
		alert("Invalid username or password");
	}
}

// Function to go add new user page
function createNewUser(){
	window.location.href = "adduser.html";
}


// First, we define a function to check if a user exists in the users array
function userExists(username) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  return users.some(user => user.username === username);
}

// Then, we define a function to add a new user to the users array and save it in local storage
function addUser(username, password) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (!userExists(username)) {
    users.push({username: username, password: password});
    localStorage.setItem("users", JSON.stringify(users));
    alert("User added successfully!");
  } else {
    alert("User already exists!");
  }
}

// Finally, we define a function to handle the add user button click event
function handleAddUser() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  if (username && password) {
    addUser(username, password);
  } else {
    alert("Please enter a username and a password!");
  }
}


// Function to sign out the user
function signOut() {
	window.location.href = "login.html";
	localStorage.removeItem("loggedIn");
	document.querySelector("form").reset();
}


