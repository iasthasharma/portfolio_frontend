
// Navbar Background Change on Scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".custom-navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Fade-in effect for sections on scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });
});
// Shrinking navbar on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
});

// Adding tilt effect to project boxes
document.addEventListener("DOMContentLoaded", function () {
    const tiltElements = document.querySelectorAll(".project-box");

    tiltElements.forEach(el => {
        el.addEventListener("mousemove", function (e) {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            el.style.transform = `perspective(1000px) rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
        });

        el.addEventListener("mouseleave", function () {
            el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        });
    });
});
// Adding tilt effect to service boxes
document.addEventListener("DOMContentLoaded", function () {
    const tiltElements = document.querySelectorAll(".service-box");

    tiltElements.forEach(el => {
        el.addEventListener("mousemove", function (e) {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            el.style.transform = `perspective(1000px) rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
        });

        el.addEventListener("mouseleave", function () {
            el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        });
    });
});
// Custom cursor effect
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
// Typing animation effect (Perfected Version)
const words = ["A Writer", "A Developer", "A Designer", "A Problem Solver"];
let index = 0;
let letterIndex = 0;
let isDeleting = false;
const typingText = document.getElementById("typing-text");

function typeEffect() {
    let currentWord = words[index];

    if (!isDeleting) {
        // Typing mode: Increase letter count
        typingText.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++;
    } else {
        // Deleting mode: Decrease letter count
        typingText.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;
    }

    let typingSpeed = isDeleting ? 50 : 150; // Speed control

    if (!isDeleting && letterIndex === currentWord.length) {
        // If the full word is displayed, pause before deleting
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause before deletion
    } else if (isDeleting && letterIndex === 0) {
        // If deletion is complete, move to the next word
        isDeleting = false;
        index = (index + 1) % words.length;
        setTimeout(typeEffect, 500); // Pause before typing next word
    } else {
        setTimeout(typeEffect, typingSpeed);
    }
}

// Start the typing effect on page load
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);
});

// Back-to-top button functionality
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.opacity = "1";
        backToTopButton.style.visibility = "visible";
    } else {
        backToTopButton.style.opacity = "0";
        backToTopButton.style.visibility = "hidden";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
