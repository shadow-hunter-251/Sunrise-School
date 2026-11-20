
/* =========================================
   SUNRISE MODEL SCHOOL & COLLEGE
   EXAMINATION PAGE JAVASCRIPT
========================================= */


/* =========================================
   LOAD NAVBAR AND FOOTER
========================================= */


/* =========================================
   DEMO EXAMINATION DATABASE
========================================= */

const examSchedules = {

    first: {
        "6-8": [
            ["05 April", "Bangla", "10:00 AM – 1:00 PM"],
            ["07 April", "English", "10:00 AM – 1:00 PM"],
            ["09 April", "Mathematics", "10:00 AM – 1:00 PM"],
            ["12 April", "Science", "10:00 AM – 1:00 PM"],
            ["14 April", "BGS", "10:00 AM – 1:00 PM"],
            ["16 April", "ICT", "10:00 AM – 1:00 PM"]
        ],

        "9-10": [
            ["06 April", "Bangla", "10:00 AM – 1:00 PM"],
            ["08 April", "English", "10:00 AM – 1:00 PM"],
            ["10 April", "Mathematics", "10:00 AM – 1:00 PM"],
            ["13 April", "Physics", "10:00 AM – 1:00 PM"],
            ["15 April", "Chemistry", "10:00 AM – 1:00 PM"],
            ["17 April", "ICT", "10:00 AM – 1:00 PM"]
        ],

        "11-12": [
            ["05 April", "Bangla", "10:00 AM – 1:00 PM"],
            ["07 April", "English", "10:00 AM – 1:00 PM"],
            ["09 April", "ICT", "10:00 AM – 1:00 PM"],
            ["12 April", "Physics", "10:00 AM – 1:00 PM"],
            ["14 April", "Chemistry", "10:00 AM – 1:00 PM"],
            ["16 April", "Biology", "10:00 AM – 1:00 PM"]
        ]
    },

    second: {
        "6-8": [
            ["05 August", "Bangla", "10:00 AM – 1:00 PM"],
            ["07 August", "English", "10:00 AM – 1:00 PM"],
            ["09 August", "Mathematics", "10:00 AM – 1:00 PM"],
            ["12 August", "Science", "10:00 AM – 1:00 PM"],
            ["14 August", "BGS", "10:00 AM – 1:00 PM"],
            ["16 August", "ICT", "10:00 AM – 1:00 PM"]
        ],

        "9-10": [
            ["06 August", "Bangla", "10:00 AM – 1:00 PM"],
            ["08 August", "English", "10:00 AM – 1:00 PM"],
            ["10 August", "Mathematics", "10:00 AM – 1:00 PM"],
            ["13 August", "Physics", "10:00 AM – 1:00 PM"],
            ["15 August", "Chemistry", "10:00 AM – 1:00 PM"],
            ["17 August", "ICT", "10:00 AM – 1:00 PM"]
        ],

        "11-12": [
            ["05 August", "Bangla", "10:00 AM – 1:00 PM"],
            ["07 August", "English", "10:00 AM – 1:00 PM"],
            ["09 August", "ICT", "10:00 AM – 1:00 PM"],
            ["12 August", "Physics", "10:00 AM – 1:00 PM"],
            ["14 August", "Chemistry", "10:00 AM – 1:00 PM"],
            ["16 August", "Biology", "10:00 AM – 1:00 PM"]
        ]
    },

    annual: {
        "6-8": [
            ["20 November", "Bangla", "10:00 AM – 1:00 PM"],
            ["22 November", "English", "10:00 AM – 1:00 PM"],
            ["24 November", "Mathematics", "10:00 AM – 1:00 PM"],
            ["26 November", "Science", "10:00 AM – 1:00 PM"],
            ["29 November", "BGS", "10:00 AM – 1:00 PM"],
            ["01 December", "ICT", "10:00 AM – 1:00 PM"]
        ],

        "9-10": [
            ["19 November", "Bangla", "10:00 AM – 1:00 PM"],
            ["21 November", "English", "10:00 AM – 1:00 PM"],
            ["23 November", "Mathematics", "10:00 AM – 1:00 PM"],
            ["25 November", "Physics", "10:00 AM – 1:00 PM"],
            ["28 November", "Chemistry", "10:00 AM – 1:00 PM"],
            ["30 November", "ICT", "10:00 AM – 1:00 PM"]
        ],

        "11-12": [
            ["20 November", "Bangla", "10:00 AM – 1:00 PM"],
            ["22 November", "English", "10:00 AM – 1:00 PM"],
            ["24 November", "ICT", "10:00 AM – 1:00 PM"],
            ["26 November", "Physics", "10:00 AM – 1:00 PM"],
            ["29 November", "Chemistry", "10:00 AM – 1:00 PM"],
            ["01 December", "Biology", "10:00 AM – 1:00 PM"]
        ]
    }
};


/* =========================================
   EXAM AND CLASS TITLES
========================================= */

const examTitles = {
    first: "First Term Examination - 2026",
    second: "Second Term Examination - 2026",
    annual: "Annual Examination - 2026"
};

const classTitles = {
    "6-8": "Class: 6 – 8",
    "9-10": "Class: 9 – 10",
    "11-12": "Class: 11 – 12"
};


/* =========================================
   DOM ELEMENTS
========================================= */

const examSelect = document.getElementById("examSelect");
const classSelect = document.getElementById("classSelect");

const searchButton = document.getElementById("searchSchedule");
const downloadButton = document.getElementById("downloadRoutine");

const scheduleBody = document.getElementById("scheduleBody");

const scheduleClassHeading =
    document.getElementById("scheduleClassHeading");

const scheduleResult =
    document.getElementById("scheduleResult");

const noSchedule =
    document.getElementById("noSchedule");


/* =========================================
   CURRENT SELECTED SCHEDULE
========================================= */

let currentSchedule = null;


/* =========================================
   DISPLAY EXAM SCHEDULE
========================================= */

function searchExamSchedule() {

    const selectedExam = examSelect.value;
    const selectedClass = classSelect.value;

    const examData = examSchedules[selectedExam];
    const classData = examData ? examData[selectedClass] : null;

    // Clear previous results
    scheduleBody.innerHTML = "";

    // Check schedule availability
    if (!classData || classData.length === 0) {

        currentSchedule = null;

        scheduleResult.style.display = "none";
        noSchedule.classList.add("show");

        downloadButton.disabled = true;
        downloadButton.style.opacity = ".5";

        return false;
    }

    // Save currently selected schedule
    currentSchedule = {
        exam: examTitles[selectedExam],
        className: classTitles[selectedClass],
        subjects: classData
    };

    // Update class heading
    scheduleClassHeading.textContent = classTitles[selectedClass];

    // Generate table rows
    classData.forEach(item => {

        const row = document.createElement("tr");

        item.forEach(value => {

            const cell = document.createElement("td");

            cell.textContent = value;

            row.appendChild(cell);

        });

        scheduleBody.appendChild(row);

    });

    // Show results
    scheduleResult.style.display = "block";

    noSchedule.classList.remove("show");

    downloadButton.disabled = false;
    downloadButton.style.opacity = "1";

    return true;
}


/* =========================================
   SEARCH BUTTON
========================================= */

searchButton.addEventListener("click", function () {

    if (searchButton.disabled) return;

    const found = searchExamSchedule();

    if (found) {

        searchButton.innerHTML =
            '<i class="fa-solid fa-check"></i> Schedule Found';

    } else {

        searchButton.innerHTML =
            '<i class="fa-solid fa-calendar-xmark"></i> Not Available';

    }

    searchButton.disabled = true;

    setTimeout(() => {

        searchButton.innerHTML =
            '<i class="fa-solid fa-magnifying-glass"></i> Search Schedule';

        searchButton.disabled = false;

    }, 900);

});


/* =========================================
   ENTER KEY SEARCH SUPPORT
========================================= */

[examSelect, classSelect].forEach(select => {

    select.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            event.preventDefault();
            searchButton.click();
        }

    });

});


/* =========================================
   PDF / PRINT DOWNLOAD
========================================= */

downloadButton.addEventListener("click", function () {

    if (!currentSchedule) return;

    document.title =
        `Exam Routine - ${currentSchedule.exam} - ${currentSchedule.className}`;

    window.print();

    // Restore page title
    setTimeout(() => {
        document.title =
            "Examination | Sunrise Model School & College";
    }, 1000);

});


/* =========================================
   INITIAL PAGE LOAD
========================================= */

function initializeExamPage() {

    examSelect.value = "first";
    classSelect.value = "6-8";

    searchExamSchedule();

}

initializeExamPage();
