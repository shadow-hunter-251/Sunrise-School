SUNRISE MODEL SCHOOL & COLLEGE — ORGANIZED WEBSITE

STRUCTURE
- index.html             Entry page; opens the home page.
- html/                  All website pages, including the new gallery.html.
- html/components/        Editable source copies of shared nav.html and footer.html.
- css/                   One stylesheet per page.
- js/                    Page scripts.
- Images/                Existing image assets.

HOW TO OPEN
Open index.html in a browser, or open the folder in VS Code and use Live Server.
No npm install, build command, Node.js setup, or Tailwind dependency is required.

NOTES
- Navigation and footer markup are embedded into each page so they do not depend on fetch() requests.
- The gallery uses the existing school images in a Pinterest-style masonry layout.
- The original ZIP did not contain the three admission PDF files. Their cards now lead to the Contact page rather than broken download links.
- Some image names referenced by the original pages were also missing; these references have been connected to the closest matching images supplied in the ZIP.

LATEST NAVIGATION UPDATE
- The current page is automatically highlighted with an underline in the main navigation.
- The Academics menu opens on hover for desktop users and has a dedicated expand control on touch screens.
- The mobile navigation toggle works across all pages and closes after a page is selected or Escape is pressed.
- Apply Now links route to html/admission.html.
- Academics includes Classes & Routine, Academic Routine, Tuition, and Faculty.
- A new html/faculty.html page contains 10 responsive demonstration cards. The photos are representative school/learning images; replace them with actual faculty portraits and names when available.


Follow-up visual refinements: navigation program link removed (programs remain available from the View All Programs button), leadership profile alignment and sample speeches, reduced faculty card height, scoped facilities typography, compact contact info card, and refined logo/footer spacing.


LATEST UPDATE (faculty, heroes, buttons, JS)
- Faculty page: 10 cards using Images/Teachers photos, with Bangladeshi demo name, subject, education, experience and a short bio.
- About page: the 3 leadership cards (Head, Chairman, Principal) use Images/Teachers photos.
- Hero images from Images/Hero are applied on Admission, Calendar, Exam, Tuition, Classes & Routine, Facilities, Notice and Faculty pages.
- Every "Apply Now" button (navbar + Home page) now opens contact.html.
- JS fix: Admission, Exam, Tuition, Calendar, Notice and Classes pages had the same script loaded twice (inline + external), which crashed the page script. The duplicate inline copies were removed, so the page scripts now run.

ROUND 2
- Faculty cards: fixed height, photo 65% / details 35%. Hover (or touch) the details area to scroll for the rest.
- Footer > Resources > FAQs opens a popup card with demo FAQs (close with the X, Esc, or by clicking outside). Code lives in js/site-nav.js, styles at the end of css/site-enhancements.css.
- Faculty cards height reduced 20% (376px desktop), scroll kept.
