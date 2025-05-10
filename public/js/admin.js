"use strict";

//Hantering av admin.html
// Kontroll av token med giltighet om den hittas
document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("moment4_token");    // Hämta token från localStorage

    if (!token) {
        console.error("Ingen token hittades, omdirigerar till login...");
        window.location.href = "login.html";                // Omdirigera om ingen token finns
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/api/protected", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,         // Skicka token för autentisering
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Skyddad data hämtad:", data);
            displayUsers(data.users);                       // Visa användarna på sidan
        } else {
            console.error("Fel vid hämtning:", data.error);
        }
    } catch (error) {
        console.error("Serverfel vid anrop:", error);
    }
});

function displayUsers(users) {
    const userContainer = document.getElementById("userList");
    userContainer.innerHTML = "";                           // Tömmer taggen
    let numberOfUsers = 1;                                  // Antalet användare
   
    users.forEach(user => {
        const userItem = document.createElement("div");
        userItem.innerHTML = `<p>Användare ${numberOfUsers}:</p>
                                <h1>${user.username}</h1>`;
        
        if (user.email) {
            userItem.innerHTML += `<p>E-post: <a href="mailto:${user.email}">${user.email}</a> </p>`;
        }
    
        userItem.classList.add("user-card"); // Lägger  till en klass
    
        userContainer.appendChild(userItem);
        numberOfUsers += 1;
    });
    
};
