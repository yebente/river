document.addEventListener("DOMContentLoaded", function() {
    let header = document.querySelector("header");
    let backToTop = document.createElement("div");  
    let navLinks = document.querySelectorAll("nav ul li a");
    let sections = document.querySelectorAll("section");
    let menuToggle = document.querySelector(".menu-toggle");
    let navMenu = document.querySelector("nav ul");

    // Back to Top Button
    backToTop.innerHTML = "↑";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function() {
        // Header Scroll Effect
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Show/Hide Back to Top Button
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

        // Fade-in Sections on Scroll
        sections.forEach(section => {
            let sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.85) {
                section.classList.add("fade-in");
            }
        });
    });

    // Smooth Scroll for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for fixed header
                behavior: "smooth"
            });
        });
    });

    // Back to Top Scroll Function
    backToTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Mobile Menu Toggle
    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("open");
        });
    }
});


/* JavaScript for Scroll Effect */
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled"); // Add background on scroll
    } else {
        header.classList.remove("scrolled"); // Remove when back at top
    }
});
