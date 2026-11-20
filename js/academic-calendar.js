
    
/* =========================================
   SUNRISE MODEL SCHOOL & COLLEGE
   ACADEMIC CALENDAR JAVASCRIPT
========================================= */


/* =========================================
   SHARED NAVBAR AND FOOTER
========================================= */


/* =========================================
   ACADEMIC EVENTS DATABASE
   DEMO DATA - EDIT WITH OFFICIAL DATES
========================================= */

const academicEvents = [

    {
        date: "2026-01-01",
        title: "New Year's Day",
        description: "New Year holiday.",
        type: "Holiday"
    },

    {
        date: "2026-01-05",
        title: "First Day of Classes",
        description: "School reopens for all students.",
        type: "Academic"
    },

    {
        date: "2026-02-21",
        title: "International Mother Language Day",
        description: "Remembering our language martyrs.",
        type: "Holiday"
    },

    {
        date: "2026-03-26",
        title: "Independence Day",
        description: "Celebrating our independence.",
        type: "Holiday"
    },

    {
        date: "2026-04-14",
        title: "Bengali New Year",
        description: "Pohela Boishakh celebrations.",
        type: "Holiday"
    },

    {
        date: "2026-05-01",
        title: "May Day",
        description: "Honoring the workers.",
        type: "Holiday"
    },

    {
        date: "2026-05-20",
        endDate: "2026-05-30",
        title: "Summer Vacation",
        description: "School will remain closed.",
        type: "Vacation"
    },

    {
        date: "2026-12-16",
        title: "Victory Day",
        description: "Celebrating our victory.",
        type: "Holiday"
    },

    {
        date: "2026-12-17",
        title: "Last Working Day",
        description: "Closing of the academic year.",
        type: "Academic"
    }

];


/* =========================================
   DOM ELEMENTS
========================================= */

const calendarDays = document.getElementById("calendarDays");
const monthSelect = document.getElementById("monthSelect");

const upcomingList = document.getElementById("upcomingList");

const importantDatesBody =
    document.getElementById("importantDatesBody");

const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

const viewAllEvents =
    document.getElementById("viewAllEvents");

const downloadCalendar =
    document.getElementById("downloadCalendar");


/* =========================================
   CALENDAR SETTINGS
========================================= */

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const today = new Date();

let currentMonth = 0;
let currentYear = 2026;

let showAllEvents = false;


/* =========================================
   DATE HELPERS
========================================= */

function parseLocalDate(dateString) {
    const [year, month, day] = dateString
        .split("-")
        .map(Number);

    return new Date(year, month - 1, day);
}

function formatDate(dateString) {
    const date = parseLocalDate(dateString);

    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long"
    });
}

function getMonthShort(dateString) {
    return parseLocalDate(dateString)
        .toLocaleDateString("en-GB", {
            month: "short"
        });
}

function getDay(dateString) {
    return parseLocalDate(dateString).getDate();
}

function getEventClass(type) {

    if (type === "Academic") return "academic-event";

    if (type === "Vacation") return "vacation-event";

    return "holiday-event";
}

function getEventCategoryClass(type) {

    if (type === "Academic") return "academic-event";

    if (type === "Vacation") return "vacation-event";

    return "holiday-event";
}


/* =========================================
   MONTH DROPDOWN
========================================= */

function initializeMonthDropdown() {

    monthSelect.innerHTML = "";

    monthNames.forEach((month, index) => {

        const option = document.createElement("option");

        option.value = index;

        option.textContent = `${month} 2026`;

        monthSelect.appendChild(option);

    });

    monthSelect.value = currentMonth;
}


/* =========================================
   CALENDAR RENDERING
========================================= */

function renderCalendar() {

    calendarDays.innerHTML = "";

    const firstDay = new Date(
        currentYear,
        currentMonth,
        1
    ).getDay();

    const totalDays = new Date(
        currentYear,
        currentMonth + 1,
        0
    ).getDate();

    const previousMonthDays = new Date(
        currentYear,
        currentMonth,
        0
    ).getDate();


    // Previous month's dates

    for (let i = firstDay - 1; i >= 0; i--) {

        const day = document.createElement("div");

        day.className = "calendar-day other-month";

        day.innerHTML = `
            <span class="day-number">
                ${previousMonthDays - i}
            </span>
        `;

        calendarDays.appendChild(day);

    }


    // Current month's dates

    for (let date = 1; date <= totalDays; date++) {

        const day = document.createElement("div");

        day.className = "calendar-day";

        const dateString = [
            currentYear,
            String(currentMonth + 1).padStart(2, "0"),
            String(date).padStart(2, "0")
        ].join("-");

        const matchingEvents = academicEvents.filter(event => {

            const start = event.date;
            const end = event.endDate || event.date;

            return dateString >= start && dateString <= end;

        });


        const dateNumber = document.createElement("span");

        dateNumber.className = "day-number";
        dateNumber.textContent = date;

        day.appendChild(dateNumber);


        // Add event tags

        matchingEvents.forEach(event => {

            const tag = document.createElement("button");

            tag.className =
                `event-tag ${getEventClass(event.type)}`;

            tag.textContent = event.title;

            tag.title = event.title;

            tag.addEventListener("click", () => {
                openEventModal(event);
            });

            day.appendChild(tag);

        });


        // Highlight current date

        if (
            today.getFullYear() === currentYear &&
            today.getMonth() === currentMonth &&
            today.getDate() === date
        ) {

            day.style.background = "#FFF4E3";

        }


        calendarDays.appendChild(day);

    }


    // Fill remaining cells

    const totalCells = calendarDays.children.length;

    const remainingCells = (7 - totalCells % 7) % 7;

    for (let i = 1; i <= remainingCells; i++) {

        const day = document.createElement("div");

        day.className = "calendar-day other-month";

        day.innerHTML = `
            <span class="day-number">${i}</span>
        `;

        calendarDays.appendChild(day);

    }


    // Update dropdown

    monthSelect.value = currentMonth;

}


/* =========================================
   MONTH NAVIGATION
========================================= */

function changeMonth(amount) {

    currentMonth += amount;

    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }

    renderCalendar();

    // The school calendar uses a 2026-2027 display.
    // Navigation remains functional beyond those months.

    monthSelect.options[monthSelect.selectedIndex].textContent =
        `${monthNames[currentMonth]} ${currentYear}`;

    monthSelect.options[monthSelect.selectedIndex].value =
        currentMonth;

}


prevMonth.addEventListener("click", () => {
    changeMonth(-1);
});


nextMonth.addEventListener("click", () => {
    changeMonth(1);
});


monthSelect.addEventListener("change", () => {

    currentMonth = Number(monthSelect.value);

    renderCalendar();

});


/* =========================================
   UPCOMING EVENTS
========================================= */

function renderUpcomingEvents() {

    upcomingList.innerHTML = "";

    const sortedEvents = [...academicEvents].sort((a, b) => {
        return a.date.localeCompare(b.date);
    });

    const visibleEvents = showAllEvents
        ? sortedEvents
        : sortedEvents.slice(0, 7);


    visibleEvents.forEach(event => {

        const item = document.createElement("div");

        item.className = "upcoming-item";

        item.innerHTML = `

            <div class="upcoming-date">

                ${getDay(event.date)}

                <small>${getMonthShort(event.date)}</small>

            </div>

            <div class="upcoming-info">

                <h3></h3>

                <p></p>

            </div>

            <span class="event-type ${getEventCategoryClass(event.type)}">
                ${event.type}
            </span>

        `;

        item.querySelector("h3").textContent = event.title;

        item.querySelector("p").textContent = event.description;

        item.style.cursor = "pointer";

        item.addEventListener("click", () => {
            openEventModal(event);
        });

        upcomingList.appendChild(item);

    });


    viewAllEvents.innerHTML = showAllEvents
        ? 'Show Less <i class="fa-solid fa-arrow-up"></i>'
        : 'View All <i class="fa-solid fa-arrow-right"></i>';

}


/* =========================================
   VIEW ALL EVENTS
========================================= */

viewAllEvents.addEventListener("click", () => {

    showAllEvents = !showAllEvents;

    renderUpcomingEvents();

});


/* =========================================
   IMPORTANT DATES TABLE
========================================= */

function renderImportantDates() {

    importantDatesBody.innerHTML = "";

    academicEvents.forEach(event => {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td></td>

            <td></td>

            <td>
                <span class="event-type ${getEventCategoryClass(event.type)}">
                    ${event.type}
                </span>
            </td>

        `;

        row.children[0].textContent = formatDate(event.date);

        row.children[1].textContent = event.title;

        importantDatesBody.appendChild(row);

    });

}


/* =========================================
   EVENT DETAILS MODAL
========================================= */

const eventModal = document.getElementById("eventModal");

const closeModal = document.getElementById("closeModal");

function openEventModal(event) {

    document.getElementById("modalTitle").textContent =
        event.title;

    document.getElementById("modalDescription").textContent =
        event.description;

    document.getElementById("modalCategory").textContent =
        event.type;

    let eventDate = formatDate(event.date);

    if (event.endDate) {
        eventDate += " – " + formatDate(event.endDate);
    }

    document.getElementById("modalDate").textContent =
        eventDate + ", " + currentYear;

    eventModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeEventModal() {

    eventModal.classList.remove("show");

    document.body.style.overflow = "";

}


closeModal.addEventListener("click", closeEventModal);


eventModal.addEventListener("click", (event) => {

    if (event.target === eventModal) {
        closeEventModal();
    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeEventModal();
    }

});


/* =========================================
   DOWNLOAD ACADEMIC CALENDAR PDF
========================================= */

downloadCalendar.addEventListener("click", () => {

    window.print();

});


/* =========================================
   INITIALIZE EVERYTHING
========================================= */

function initializeCalendar() {

    initializeMonthDropdown();

    renderCalendar();

    renderUpcomingEvents();

    renderImportantDates();

}

initializeCalendar();

    
    
