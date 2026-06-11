document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const msg = document.getElementById('message');

    // هنا يمكنك إضافة منطق الاتصال بـ API لاحقاً
    if (user === "admin" && pass === "admin") {
        msg.textContent = "Welcome back, Admin!";
        msg.style.color = "#22c55e";
    } else {
        msg.textContent = "Invalid credentials. Try again.";
        msg.style.color = "#ef4444";
    }
});
