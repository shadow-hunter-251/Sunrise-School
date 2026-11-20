
/* =========================================
   SUNRISE MODEL SCHOOL & COLLEGE
   FACILITIES PAGE
========================================= */


/* LOAD SHARED NAVBAR AND FOOTER */



document.addEventListener("DOMContentLoaded", () => {

    /* IMAGE FALLBACK */

    document.querySelectorAll("img").forEach(image => {

        image.addEventListener("error", function () {

            this.style.backgroundColor = "#F1F2F3";

        });

    });


    /* CURRENT PAGE NAVIGATION */

    const currentPage = window.location.pathname
        .split("/")
        .pop();

    document.querySelectorAll(".nav-links a, nav a").forEach(link => {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });

});
