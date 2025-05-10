"use strict";
/**
 * Hantering av variabel/dynamisk meny
 * utifrån token i localStorage
 */

// Menyhantering
// finns i alla sdior som använder navigeringsmenyn
document.addEventListener("DOMContentLoaded", () => {
    const adminLink = document.getElementById("adminLink");
    const loginLink = document.getElementById("loginLink");
    const logoutLink = document.getElementById("logoutLink");

    const token = localStorage.getItem("moment4_token");

    if (token) {
        adminLink.style.display = "block";
        logoutLink.style.display = "block";
        loginLink.style.display = "none";
    } else {
        adminLink.style.display = "none";
        logoutLink.style.display = "none";
        loginLink.style.display = "block";
    }
});

// Loggar ut
function logOut(){
    localStorage.removeItem("moment4_token");
    window.location.href = "index.html";
}