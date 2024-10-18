function signup() {
    let username = document.getElementById("signupUsername").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("confirmPasswordId").value;
   
    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return; // Exit the function
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert("Signup successful! You can now log in.");

}

function login(event) {
    event.preventDefault(); // Prevent form submission
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (username === savedUsername && password === savedPassword) {
        alert("Login successful!");
        window.location.href = '/home.html'; // Redirect to home page
    } else {
        alert("Your account doesn't exist. Please signup.");
    }
}

// Event listener for signup form submission
document.querySelector('form[action="/signup"]').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    signup(); // Call signup function
});

// Event listener for login form submission
document.querySelector('form[action="/home.html"]').addEventListener('submit', login);



