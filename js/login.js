// js/login.js

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Pre-set credentials
    const correctEmail = "mutugimartin967@gmail.com";
    const correctPassword = "Kinoti100%";

    // Validate credentials
    if (email === correctEmail && password === correctPassword) {
        // Redirect to main page after successful login
        window.location.href = "index.html";
    } else {
        // Show error message
        document.getElementById('error-message').textContent = "Invalid email or password!";
    }
});
