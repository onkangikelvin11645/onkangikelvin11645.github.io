const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const formData = new FormData(contactForm);

    try {

        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {

            const successMessage = document.createElement("p");

            successMessage.textContent =
                "Thank you for reaching out! Your message has been sent successfully. I’ll get back to you as soon as possible.";

            successMessage.classList.add("success-message");

            contactForm.appendChild(successMessage);

            contactForm.reset();

        } else {

            throw new Error("Form submission failed.");

        }

    } catch (error) {

        const errorMessage = document.createElement("p");

        errorMessage.textContent =
            "Sorry, something went wrong. Please try again or contact me directly.";

        errorMessage.classList.add("error-message");

        contactForm.appendChild(errorMessage);

    }

});