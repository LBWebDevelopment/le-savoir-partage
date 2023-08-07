// Nav menu toggle for responsive
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const nav = document.querySelector("nav");

    function toggleMenu() {
        menuToggle.classList.toggle("active");
        menu.classList.toggle("mobile");
        nav.classList.toggle("mobile");

        const menuMobile = document.querySelector(".menu.mobile");
        const menuMobileItems = menuMobile?.querySelectorAll("a");

        menuMobileItems?.forEach((item) => {
            item.addEventListener("click", toggleMenu);
        });
    }

    menuToggle.addEventListener("click", toggleMenu);
});

// Send email through contact
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        e.submitter.classList.toggle("loading");
        e.submitter.disabled = true;

        const formData = {};

        const inputFields = contactForm.querySelectorAll("input, textarea");
        inputFields.forEach((input) => {
            const name = input.name;
            const value = input.value;
            formData[name] = value;
        });

        fetch("/send_email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Email sent successfully!");
                    contactForm.reset();
                } else {
                    alert("Failed to send email.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Failed to send email.");
            })
            .finally(() => {
                e.submitter.classList.toggle("loading");
                e.submitter.disabled = false;
            });
    });
});
