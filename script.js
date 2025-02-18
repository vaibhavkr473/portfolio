// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
});

/*
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const currentTheme = localStorage.getItem('theme') || 'dark';

document.body.dataset.theme = currentTheme;
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const newTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
    document.body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}
*/
    
// Improved Contact Form Handling
document.addEventListener("DOMContentLoaded", function () {
    // Using the exact selector to match your HTML structure
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
});
