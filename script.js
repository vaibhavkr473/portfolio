document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.querySelector(".contact-content .contact-form form");

        // Add debugging
        console.log("Found form:", contactForm);

        if (!contactForm) {
        console.error("Contact form not found! Check your HTML structure");
        return;
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector("button");
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        fetch("https://formspree.io/f/xwplgdnr", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    alert("Message sent successfully!");
                    contactForm.reset();  // Reset form after successful submission
                } else {
                    return response.json().then(data => {
                        alert(data.error || "Error sending message. Please try again later.");
                    });
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("There was a problem submitting your form.");
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.textContent = "Send Message";
            });
    });

    AOS.init({
        duration: 1000,
        once: true
    });

    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    themeToggle.addEventListener('click', () => {
        document.body.dataset.theme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
        themeIcon.classList.toggle('fa-moon');
        themeIcon.classList.toggle('fa-sun');
    });

    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navList.classList.toggle('active');
    });

    const scrollToTop = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    });
});
