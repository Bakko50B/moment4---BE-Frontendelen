"use strict";

// Koll på om det finns token i LocalStorage
// Koll om den är giltig fortfarande 
// Används i admin.html
// Omdririgering till login.html vid saknad token
function checkToken() {
    const token = localStorage.getItem("moment4_token");

    if (!token) {
        window.location.href = "login.html"; // Skickar direkt till login om token saknas
        return;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    if (Date.now() / 1000 >= payload.exp) {
        console.log("Token har gått ut!");
        localStorage.removeItem("moment4_token");
        window.location.href = "login.html";
    }
}

document.addEventListener("DOMContentLoaded", checkToken);
