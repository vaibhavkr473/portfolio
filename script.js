// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
});


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact-form form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        fetch("https://formspree.io/f/{your_form_id}", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    alert("Message sent successfully!");
                    contactForm.reset();
                } else {
                    alert("Error sending message. Please try again later.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("There was a problem submitting your form.");
            });
    });
});
