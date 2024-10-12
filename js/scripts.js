// JavaScript to handle form validation and other interactions

document.addEventListener('DOMContentLoaded', function () {
    // Example of simple validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Form submitted successfully!");
    });
});
