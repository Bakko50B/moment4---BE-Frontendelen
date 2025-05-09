"use strict"

function checkToken() {
    const token = localStorage.getItem("moment4_token");

    if (!token) {
        console.log("Ingen token hittades.");
        return; 
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    if (Date.now() / 1000 >= payload.exp) {
        console.log("Token har gått ut! Rensar...");
        localStorage.removeItem("moment4_token");
    }
    else {
        console.log("Token är giltig!")
    }
}

// Kör token-check vid sidladdning av index.html
document.addEventListener("DOMContentLoaded", checkToken);
