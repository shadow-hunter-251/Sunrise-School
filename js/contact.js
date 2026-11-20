
/* =========================================
   LOAD SHARED NAVIGATION AND FOOTER
========================================= */






/* =========================================
   CONTACT FORM DEMO
========================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();

        formMessage.className = "";
        formMessage.style.display = "none";

        // BASIC VALIDATION

        if (!name || !email || !subject || !message) {

            formMessage.textContent =
                "Please complete all required fields.";

            formMessage.className = "error";
            return;
        }

        // EMAIL VALIDATION

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.className = "error";
            return;
        }

        // DEMO SUCCESS MESSAGE
        // No actual email or backend submission happens here.

        formMessage.textContent =
            "Thank you for contacting Sunrise Model School & College! " +
            "This is a demo form. Please connect the form to your school backend for actual submissions.";

        formMessage.className = "success";

        contactForm.reset();

    });

}
