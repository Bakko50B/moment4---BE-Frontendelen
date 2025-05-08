    "use strict";

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

    // Kontrollera token direkt vid sidladdning
    // checkToken();

    document.addEventListener("DOMContentLoaded", checkToken);
