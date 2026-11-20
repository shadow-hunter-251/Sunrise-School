
/* =========================================
   SUNRISE MODEL SCHOOL & COLLEGE
   NOTICE & EVENTS JAVASCRIPT
========================================= */


/* =========================================
   LOAD NAVBAR AND FOOTER
========================================= */


/* =========================================
   NOTICE DATABASE
========================================= */

const notices = [

    {
        id: 1,
        day: "11",
        month: "NOV",
        fullDate: "11 November 2026",
        category: "academic",
        title: "Class Routine Updated for 2026",
        description: "The revised class routine for Classes 6–10 is now available.",
        details: "The school authority has published the revised class routine for Classes 6–10. Students are requested to follow the updated timetable from the announced effective date. Please contact the academic office if you need further clarification.",
        isNew: true
    },

    {
        id: 2,
        day: "09",
        month: "NOV",
        fullDate: "09 November 2026",
        category: "examination",
        title: "Annual Examination Schedule 2026",
        description: "Students are requested to check the examination schedule.",
        details: "The Annual Examination Schedule for 2026 has been published. All students are advised to check their respective class routines and prepare according to the examination timetable.",
        isNew: false
    },

    {
        id: 3,
        day: "06",
        month: "NOV",
        fullDate: "06 November 2026",
        category: "parents",
        title: "Parent-Teacher Meeting Announcement",
        description: "A parent-teacher meeting will be held on 15 November.",
        details: "A Parent-Teacher Meeting will be organized on 15 November 2026. Parents are requested to attend the meeting to discuss student performance, academic progress and overall development.",
        isNew: false
    },

    {
        id: 4,
        day: "03",
        month: "NOV",
        fullDate: "03 November 2026",
        category: "holiday",
        title: "School Closure Notice",
        description: "The school will remain closed on the announced public holiday.",
        details: "This is to inform all students, parents and teachers that the institution will remain closed on the announced public holiday. Regular academic activities will resume on the next working day.",
        isNew: false
    },

    {
        id: 5,
        day: "01",
        month: "NOV",
        fullDate: "01 November 2026",
        category: "admission",
        title: "Admission Circular for 2027",
        description: "Applications are invited for admission to selected classes.",
        details: "Sunrise Model School & College invites applications for the 2027 academic session. Interested parents and guardians can collect admission information and application documents from the school office.",
        isNew: false
    },

    {
        id: 6,
        day: "29",
        month: "OCT",
        fullDate: "29 October 2026",
        category: "teachers",
        title: "Teachers' Academic Coordination Meeting",
        description: "All teaching staff are requested to attend the meeting.",
        details: "All teachers are requested to attend the academic coordination meeting at the school conference room. The meeting will discuss academic planning and upcoming institutional activities.",
        isNew: false
    },

    {
        id: 7,
        day: "26",
        month: "OCT",
        fullDate: "26 October 2026",
        category: "academic",
        title: "Academic Progress Update",
        description: "Students should complete their pending academic assignments.",
        details: "Students are requested to complete all pending class assignments and submit them to their respective subject teachers within the announced deadline.",
        isNew: false
    }

];


/* =========================================
   CATEGORY LABELS
========================================= */

const categoryLabels = {

    academic: "Academic",
    examination: "Examination",
    holiday: "Holiday",
    admission: "Admission",
    parents: "Parents",
    teachers: "Teachers",
    all: "General"

};


/* =========================================
   NOTICE ELEMENTS
========================================= */

const noticeList = document.getElementById("noticeList");

const noticeCount = document.getElementById("noticeCount");

const categoryButtons =
    document.querySelectorAll(".category-btn");

const showAllNotices =
    document.getElementById("showAllNotices");

let currentCategory = "all";


/* =========================================
   RENDER NOTICES
========================================= */

function renderNotices(category = "all") {

    currentCategory = category;

    const filteredNotices = category === "all"
        ? notices
        : notices.filter(notice => notice.category === category);

    noticeCount.textContent = filteredNotices.length;

    noticeList.innerHTML = "";

    if (filteredNotices.length === 0) {

        noticeList.innerHTML = `
            <div class="empty-notices">
                <i class="fa-regular fa-folder-open"></i>
                <p>No notices available in this category.</p>
            </div>
        `;

        return;

    }

    filteredNotices.forEach(notice => {

        const card = document.createElement("article");

        card.className = "notice-card";

        card.innerHTML = `

            <div class="notice-date">
                <strong>${notice.day}</strong>
                <span>${notice.month}</span>
            </div>

            <span class="notice-badge ${notice.category}">
                ${categoryLabels[notice.category]}
            </span>

            <div class="notice-details">

                <h3>
                    ${notice.title}

                    ${notice.isNew
                        ? '<span class="new-label">New</span>'
                        : ''
                    }

                </h3>

                <p>${notice.description}</p>

            </div>

            <button class="notice-view-btn"
                data-notice-id="${notice.id}">

                View Details
                <i class="fa-solid fa-arrow-right"></i>

            </button>

        `;

        noticeList.appendChild(card);

    });

}


/* =========================================
   CATEGORY FILTER
========================================= */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        renderNotices(button.dataset.category);

    });

});


/* SHOW ALL NOTICES */

showAllNotices.addEventListener("click", () => {

    categoryButtons.forEach(button => {
        button.classList.remove("active");
    });

    document.querySelector(
        '.category-btn[data-category="all"]'
    ).classList.add("active");

    renderNotices("all");

});


/* =========================================
   NOTICE DETAILS MODAL
========================================= */

const noticeModal = document.getElementById("noticeModal");

const closeModal = document.getElementById("closeModal");

const modalCategory = document.getElementById("modalCategory");

const modalTitle = document.getElementById("modalTitle");

const modalDate = document.getElementById("modalDate");

const modalDescription =
    document.getElementById("modalDescription");

const modalDownload =
    document.getElementById("modalDownload");

let currentModalNotice = null;


/* OPEN MODAL */

function openNoticeModal(notice) {

    currentModalNotice = notice;

    modalCategory.textContent =
        categoryLabels[notice.category];

    modalTitle.textContent = notice.title;

    modalDate.textContent = notice.fullDate;

    modalDescription.textContent = notice.details;

    // Only show download when an actual PDF is assigned.
    modalDownload.hidden = !notice.pdf;

    noticeModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


/* CLOSE MODAL */

function closeNoticeModal() {

    noticeModal.classList.remove("show");

    document.body.style.overflow = "";

    currentModalNotice = null;

}


/* VIEW DETAILS BUTTON */

noticeList.addEventListener("click", event => {

    const button = event.target.closest(".notice-view-btn");

    if (!button) return;

    const noticeId = Number(button.dataset.noticeId);

    const notice = notices.find(item => item.id === noticeId);

    if (notice) {
        openNoticeModal(notice);
    }

});


closeModal.addEventListener("click", closeNoticeModal);


/* CLICK OUTSIDE MODAL */

noticeModal.addEventListener("click", event => {

    if (event.target === noticeModal) {
        closeNoticeModal();
    }

});


/* ESCAPE KEY */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeNoticeModal();
    }

});


/* OPTIONAL NOTICE PDF DOWNLOAD */

modalDownload.addEventListener("click", () => {

    if (!currentModalNotice || !currentModalNotice.pdf) return;

    const link = document.createElement("a");

    link.href = currentModalNotice.pdf;

    link.download = "";

    document.body.appendChild(link);

    link.click();

    link.remove();

});


/* =========================================
   NOTICE / EVENT TABS
========================================= */

const noticeTabs = document.querySelectorAll(".notice-tab");

const tabContents = document.querySelectorAll(".tab-content");

noticeTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const target = tab.dataset.tab;

        noticeTabs.forEach(item => {
            item.classList.remove("active");
        });

        tabContents.forEach(content => {
            content.classList.remove("active");
        });

        tab.classList.add("active");

        document.getElementById(target).classList.add("active");

    });

});


/* =========================================
   EVENT DATABASE
========================================= */

const events = [

    {
        id: 1,
        title: "Annual Sports Day",
        image: "Images/annual-sports-day.jpg",
        date: "20 November 2026",
        time: "9:00 AM",
        location: "School Playground",
        description: "Sports competitions, races and prize distribution.",
        day: 20,
        month: 10,
        year: 2026
    },

    {
        id: 2,
        title: "Science & Innovation Fair",
        image: "Images/science-fair.jpg",
        date: "25 November 2026",
        time: "10:00 AM",
        location: "School Auditorium",
        description: "Students showcase science projects and creative ideas.",
        day: 25,
        month: 10,
        year: 2026
    },

    {
        id: 3,
        title: "Annual Cultural Programme",
        image: "Images/cultural-programme.jpg",
        date: "05 December 2026",
        time: "11:00 AM",
        location: "School Auditorium",
        description: "Music, dance, recitation and cultural performances.",
        day: 5,
        month: 11,
        year: 2026
    },

    {
        id: 4,
        title: "Parent-Teacher Meeting",
        image: "Images/parent-meeting.jpg",
        date: "15 November 2026",
        time: "10:00 AM",
        location: "School Conference Room",
        description: "An opportunity to discuss academic progress and student development.",
        day: 15,
        month: 10,
        year: 2026
    },

    {
        id: 5,
        title: "Victory Day Celebration",
        image: "Images/victory-day.jpg",
        date: "16 December 2026",
        time: "9:00 AM",
        location: "School Campus",
        description: "A special programme celebrating our national history and heritage.",
        day: 16,
        month: 11,
        year: 2026
    }

];


/* =========================================
   RENDER EVENT CARDS
========================================= */

const eventCards = document.getElementById("eventCards");

const viewAllEvents = document.getElementById("viewAllEvents");

let showAllEvents = false;


function renderEvents() {

    eventCards.innerHTML = "";

    const visibleEvents = showAllEvents
        ? events
        : events.slice(0, 3);

    visibleEvents.forEach(event => {

        const card = document.createElement("article");

        card.className = "event-card";

        card.innerHTML = `

            <div class="event-image">

                <img
                    src="${event.image}"
                    alt="${event.title}"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >

                <span class="event-status">Upcoming</span>

            </div>

            <div class="event-info">

                <h3>${event.title}</h3>

                <div class="event-meta">

                    <span>
                        <i class="fa-regular fa-calendar-days"></i>
                        ${event.date} · ${event.time}
                    </span>

                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        ${event.location}
                    </span>

                </div>

                <p>${event.description}</p>

            </div>

        `;

        eventCards.appendChild(card);

    });

    viewAllEvents.innerHTML = showAllEvents
        ? 'Show Less <i class="fa-solid fa-arrow-up"></i>'
        : 'View All Events <i class="fa-solid fa-arrow-right"></i>';

}


viewAllEvents.addEventListener("click", () => {

    showAllEvents = !showAllEvents;

    renderEvents();

});


/* =========================================
   EVENT CALENDAR
========================================= */

// November 2026 is the initial displayed month.

let calendarYear = 2026;

let calendarMonth = 10;

// JavaScript months: January = 0, November = 10.

const today = {
    day: 12,
    month: 10,
    year: 2026
};

const calendarMonthElement =
    document.getElementById("calendarMonth");

const calendarDays =
    document.getElementById("calendarDays");

const selectedEventInfo =
    document.getElementById("selectedEventInfo");


/* EVENTS FOR A DATE */

function getEventsForDate(day, month, year) {

    return events.filter(event => {

        return event.day === day &&
               event.month === month &&
               event.year === year;

    });

}


/* RENDER CALENDAR */

function renderCalendar() {

    calendarDays.innerHTML = "";

    const firstDay = new Date(
        calendarYear,
        calendarMonth,
        1
    ).getDay();

    const daysInMonth = new Date(
        calendarYear,
        calendarMonth + 1,
        0
    ).getDate();

    const previousMonthDays = new Date(
        calendarYear,
        calendarMonth,
        0
    ).getDate();

    const monthName = new Date(
        calendarYear,
        calendarMonth
    ).toLocaleString("en-US", {
        month: "long"
    });

    calendarMonthElement.textContent =
        `${monthName} ${calendarYear}`;


    // Previous month's dates

    for (let i = firstDay - 1; i >= 0; i--) {

        const day = previousMonthDays - i;

        createCalendarDay(day, "other-month");

    }


    // Current month's dates

    for (let day = 1; day <= daysInMonth; day++) {

        const button = document.createElement("button");

        button.className = "calendar-day";

        button.textContent = day;

        const dateEvents = getEventsForDate(
            day,
            calendarMonth,
            calendarYear
        );

        const isToday =
            day === today.day &&
            calendarMonth === today.month &&
            calendarYear === today.year;

        if (dateEvents.length > 0) {
            button.classList.add("has-event");
        }

        if (isToday) {
            button.classList.add("today");
        }

        button.addEventListener("click", () => {

            document.querySelectorAll(".calendar-day")
                .forEach(item => item.classList.remove("selected"));

            button.classList.add("selected");

            showSelectedDateEvents(
                day,
                calendarMonth,
                calendarYear
            );

        });

        calendarDays.appendChild(button);

    }


    // Next month's dates to complete the last row

    const totalCells = firstDay + daysInMonth;

    const remainingCells = (7 - totalCells % 7) % 7;

    for (let day = 1; day <= remainingCells; day++) {

        createCalendarDay(day, "other-month");

    }

}


/* CREATE OTHER MONTH DATE */

function createCalendarDay(day, className) {

    const button = document.createElement("button");

    button.className = `calendar-day ${className}`;

    button.textContent = day;

    button.disabled = true;

    calendarDays.appendChild(button);

}


/* SHOW EVENTS FOR SELECTED DATE */

function showSelectedDateEvents(day, month, year) {

    const dateEvents = getEventsForDate(day, month, year);

    if (dateEvents.length === 0) {

        selectedEventInfo.textContent =
            `No scheduled events on ${day} ${new Date(year, month).toLocaleString("en-US", { month: "long" })} ${year}.`;

        return;

    }

    selectedEventInfo.innerHTML = dateEvents.map(event => {

        return `
            <div>
                <strong>${event.title}</strong><br>
                <i class="fa-regular fa-clock"></i>
                ${event.time}
            </div>
        `;

    }).join("<hr>");

}


/* PREVIOUS MONTH */

document.getElementById("previousMonth")
    .addEventListener("click", () => {

        calendarMonth--;

        if (calendarMonth < 0) {

            calendarMonth = 11;

            calendarYear--;

        }

        renderCalendar();

        selectedEventInfo.textContent =
            "Select a highlighted date to see its events.";

    });


/* NEXT MONTH */

document.getElementById("nextMonth")
    .addEventListener("click", () => {

        calendarMonth++;

        if (calendarMonth > 11) {

            calendarMonth = 0;

            calendarYear++;

        }

        renderCalendar();

        selectedEventInfo.textContent =
            "Select a highlighted date to see its events.";

    });


/* =========================================
   INITIALIZE PAGE
========================================= */

function initializeNoticePage() {

    renderNotices("all");

    renderEvents();

    renderCalendar();

}

initializeNoticePage();
