"use strict";

// Skickar till loginroute på servern
// Hanterar och kontrollerar de inmatade inloggningsvärderna
// används på login.html
document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    let myMessage = document.getElementById("Message");
    myMessage.innerHTML = "";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },  
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    
    if (response.ok) {
        // Spara tokenen i localStorage
        localStorage.setItem("moment4_token", data.token);
        console.log("Token sparad i localStorage:", data.token);
        myMessage.innerHTML= `
        Lyckad inloggning <br>
        Skickar dig till index.html
        `; 
        myMessage.style.display = "block";
        myMessage.style.color= "black";

        setTimeout(() => {
            window.location.href = "index.html"; // Omdirigera efter 2 sekunder
        }, 2000);   
    } else {
        console.log("myMessage:", myMessage);
        console.error("Login misslyckades:", data.error);
        myMessage.innerHTML= data.error;
        myMessage.style.display = "block";
        myMessage.style.color = "red";
    }
});
