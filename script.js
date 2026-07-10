// CRIME 24X7 Official Website

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigated");
    });
});

// Counter Animation

const counters = document.querySelectorAll(".stats h4");

counters.forEach(counter => {
    counter.style.opacity = "1";
});
