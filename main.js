document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const msg = document.getElementById('message');

    // Example logic
    if (user === "admin" && pass === "1234") {
        msg.textContent = "Login Successful!";
        msg.style.color = "#00ff00";
    } else {
        msg.textContent = "Invalid username or password.";
        msg.style.color = "#ff5f6d";
    }
});
