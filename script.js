// =========================
// SIDEBAR MENU ACTIVE STATE
// =========================

const menuItems = document.querySelectorAll(".menu-section li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => {
            i.classList.remove("active");
        });

        item.classList.add("active");

    });

});


// =========================
// SEARCH BOX EFFECT
// =========================

const searchInput =
document.querySelector(".search-box input");

searchInput.addEventListener("focus", () => {

    document.querySelector(".search-box").style.boxShadow =
    "0 0 15px rgba(130,130,255,0.4)";

});

searchInput.addEventListener("blur", () => {

    document.querySelector(".search-box").style.boxShadow =
    "none";

});


// =========================
// STAT CARDS HOVER
// =========================

const cards =
document.querySelectorAll(".stat-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";
        card.style.transition = "0.3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// =========================
// PANEL HOVER EFFECT
// =========================

const panels =
document.querySelectorAll(".panel");

panels.forEach(panel => {

    panel.addEventListener("mouseenter", () => {

        panel.style.borderColor = "#8b8bff";

    });

    panel.addEventListener("mouseleave", () => {

        panel.style.borderColor = "#2a2a2a";

    });

});


// =========================
// AI ASSISTANT BUTTON
// =========================

const assistantBtn =
document.querySelector(".assistant-btn");

assistantBtn.addEventListener("click", () => {

    alert("AI Assistant Activated!");

});


// =========================
// HERO BUTTON
// =========================

const heroBtn =
document.querySelector(".hero button");

heroBtn.addEventListener("click", () => {

    alert("Welcome to NeuroNest!");

});


// =========================
// LOGOUT BUTTON
// =========================

const logoutBtn =
document.querySelector(".logout");

logoutBtn.addEventListener("click", () => {

    const confirmLogout =
    confirm("Are you sure you want to logout?");

    if(confirmLogout){

        alert("Logged Out Successfully");

    }

});


// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener("load", () => {

    document.querySelector(".main-content").style.opacity = "0";

    setTimeout(() => {

        document.querySelector(".main-content").style.transition =
        "1s";

        document.querySelector(".main-content").style.opacity = "1";

    }, 200);

});