
    
/* =========================================
   SUNRISE MODEL SCHOOL & COLLEGE
   ADMISSION PAGE JAVASCRIPT
========================================= */


/* =========================================
   LOAD NAVBAR AND FOOTER
========================================= */


/* =========================================
   FAQ ACCORDION
========================================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const isAlreadyOpen = item.classList.contains("active");

        // Close all other questions
        faqItems.forEach(faq => {

            faq.classList.remove("active");

            faq.querySelector(".faq-question")
                .setAttribute("aria-expanded", "false");

        });

        // Open selected question
        if (!isAlreadyOpen) {

            item.classList.add("active");

            question.setAttribute("aria-expanded", "true");

        }

    });

});


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================
   DOCUMENT DOWNLOAD CHECK
========================================= */

document.querySelectorAll(".document-card").forEach(link => {

    link.addEventListener("click", function(event) {

        const filePath = this.getAttribute("href");

        if (!filePath) {
            event.preventDefault();
            return;
        }

        // The browser will download the actual PDF
        // when the corresponding file exists in Documents/.

    });

});


/* =========================================
   INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    // All FAQ questions start closed.
    faqItems.forEach(item => {

        item.classList.remove("active");

        item.querySelector(".faq-question")
            .setAttribute("aria-expanded", "false");

    });

});

    
