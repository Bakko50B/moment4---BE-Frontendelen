document.getElementById("registerForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
    const messageBox = document.getElementById("registerMessage");
    if (response.status === 409) {
        messageBox.style.color = "red";
        messageBox.innerHTML = `Användarnamnet ${username} är redan upptaget!`;
        messageBox.style.display = "block";
    } else if (response.ok) {
        messageBox.style.color = "green";
        messageBox.innerHTML = "Registrering lyckades!";
        messageBox.style.display = "block";
        setTimeout(() => window.location.href = "login.html", 2000); // Omdirigerar till login efter 2 sek
    } else {
        messageBox.innerHTML = data.message ||  "Registrering misslyckades!";
        messageBox.style.display = "block";
    }
});
