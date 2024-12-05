// // Script for animations and basic interactivity

// document.addEventListener("DOMContentLoaded", () => {
//     console.log("SenseCl2 Website Loaded!");
// });


// Handle Login
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
    alert("Login Successful! Welcome to SenseCl2."); // Show success alert
    window.location.href = "index.html"; // Redirect to home page
}

// Handle Logout
function handleLogout() {
    alert("Logout Successful! You are now logged out.");
    window.location.href = "login.html"; // Redirect to login page
}

// Add Event Listener for Login Form
const loginForm = document.querySelector('.login-form form');
if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
}

// Add Event Listener for Logout Button (if exists)
const logoutButton = document.querySelector('.logout-button');
if (logoutButton) {
    logoutButton.addEventListener('click', handleLogout);
}
