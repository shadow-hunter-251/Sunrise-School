

/* =========================================
   1. SHARED NAVIGATION & FOOTER
========================================= */

document.addEventListener("DOMContentLoaded", function () {



    /* =====================================
       2. CLASS INFORMATION
    ===================================== */

    const classData = [

        {name:"Play",sections:["A","B"],shift:"Morning",students:45},
        {name:"Nursery",sections:["A","B"],shift:"Morning",students:50},
        {name:"Class 1",sections:["A","B","C"],shift:"Morning",students:90},
        {name:"Class 2",sections:["A","B","C"],shift:"Morning",students:88},
        {name:"Class 3",sections:["A","B"],shift:"Morning",students:65},
        {name:"Class 4",sections:["A","B"],shift:"Morning",students:70},
        {name:"Class 5",sections:["A","B"],shift:"Morning",students:72},
        {name:"Class 6",sections:["A","B"],shift:"Day",students:75},
        {name:"Class 7",sections:["A","B"],shift:"Day",students:68},
        {name:"Class 8",sections:["A","B"],shift:"Day",students:65},
        {name:"Class 9",sections:["Science","Arts","Commerce"],shift:"Day",students:90},
        {name:"Class 10",sections:["Science","Arts","Commerce"],shift:"Day",students:85}

    ];


    const classTableBody = document.getElementById("class-table-body");

    const totalStudentsElement = document.getElementById("total-students");


    function renderClassTable() {

        if (!classTableBody) return;

        let total = 0;

        classTableBody.innerHTML = "";

        classData.forEach(item => {

            total += item.students;

            const row = document.createElement("tr");

            const sections = item.sections.map(section =>
                `<span class="section-badge">${section}</span>`
            ).join("");

            const shiftClass =
                item.shift === "Morning"
                ? "shift-morning"
                : "shift-day";

            const shiftIcon =
                item.shift === "Morning"
                ? "fa-sun"
                : "fa-cloud-sun";

            row.innerHTML = `
                <td>${item.name}</td>

                <td>
                    <div class="section-badges">
                        ${sections}
                    </div>
                </td>

                <td>
                    <span class="shift-badge ${shiftClass}">
                        <i class="fa-solid ${shiftIcon}"></i>
                        ${item.shift}
                    </span>
                </td>

                <td>${item.students}</td>
            `;

            classTableBody.appendChild(row);

        });

        if (totalStudentsElement) {
            totalStudentsElement.textContent = total;
        }

    }

    renderClassTable();


    /* =====================================
       3. CURRICULUM BOOK DATABASE
    ===================================== */

    const bookDatabase = {

        "Nursery": [
            ["আমার প্রথম বাংলা বই","বাংলা বর্ণ পরিচিতি"],
            ["My First English Book","English Alphabet"],
            ["প্রাথমিক গণনা","সংখ্যা পরিচিতি"],
            ["ছড়ার বই","বাংলা ছড়া ও কবিতা"],
            ["Drawing and Colouring","Art and Creativity"],
            ["শিশুদের নৈতিক শিক্ষা","Good Manners"]
        ],

        "Class 1": [
            ["আমার বাংলা বই","বাংলা"],
            ["English for Today","English"],
            ["প্রাথমিক গণিত","গণিত"]
        ],

        "Class 2": [
            ["আমার বাংলা বই","বাংলা"],
            ["English for Today","English"],
            ["প্রাথমিক গণিত","গণিত"]
        ],

        "Class 3": [
            ["আমার বাংলা বই","বাংলা"],
            ["English for Today","English"],
            ["প্রাথমিক গণিত","গণিত"],
            ["প্রাথমিক বিজ্ঞান","বিজ্ঞান"],
            ["বাংলাদেশ ও বিশ্বপরিচয়","সামাজিক শিক্ষা"],
            ["ধর্ম ও নৈতিক শিক্ষা","ধর্ম শিক্ষা"]
        ],

        "Class 4": [
            ["আমার বাংলা বই","বাংলা"],
            ["English for Today","English"],
            ["প্রাথমিক গণিত","গণিত"],
            ["প্রাথমিক বিজ্ঞান","বিজ্ঞান"],
            ["বাংলাদেশ ও বিশ্বপরিচয়","সামাজিক শিক্ষা"],
            ["ধর্ম ও নৈতিক শিক্ষা","ধর্ম শিক্ষা"]
        ],

        "Class 5": [
            ["আমার বাংলা বই","বাংলা"],
            ["English for Today","English"],
            ["প্রাথমিক গণিত","গণিত"],
            ["প্রাথমিক বিজ্ঞান","বিজ্ঞান"],
            ["বাংলাদেশ ও বিশ্বপরিচয়","সামাজিক শিক্ষা"],
            ["ধর্ম ও নৈতিক শিক্ষা","ধর্ম শিক্ষা"]
        ],

        "Class 6": [
            ["চারুপাঠ","বাংলা সাহিত্য"],
            ["আনন্দপাঠ","বাংলা সহপাঠ"],
            ["বাংলা ব্যাকরণ ও নির্মিতি","বাংলা"],
            ["English for Today","English"],
            ["English Grammar and Composition","English Grammar"],
            ["গণিত","গণিত"],
            ["বিজ্ঞান","বিজ্ঞান"],
            ["বাংলাদেশ ও বিশ্বপরিচয়","সামাজিক বিজ্ঞান"],
            ["তথ্য ও যোগাযোগ প্রযুক্তি","ICT"],
            ["ধর্ম শিক্ষা","ধর্মীয় শিক্ষা"],
            ["শারীরিক শিক্ষা ও স্বাস্থ্য","শারীরিক শিক্ষা"],
            ["কৃষিশিক্ষা","ঐচ্ছিক বিষয়"],
            ["চারু ও কারুকলা","সৃজনশীল শিক্ষা"]
        ],

        "Class 7": [
            ["সপ্তবর্ণা","বাংলা সাহিত্য"],
            ["আনন্দপাঠ","বাংলা সহপাঠ"],
            ["বাংলা ব্যাকরণ ও নির্মিতি","বাংলা"],
            ["English for Today","English"],
            ["English Grammar and Composition","English Grammar"],
            ["গণিত","গণিত"],
            ["বিজ্ঞান","বিজ্ঞান"],
            ["বাংলাদেশ ও বিশ্বপরিচয়","সামাজিক বিজ্ঞান"],
            ["তথ্য ও যোগাযোগ প্রযুক্তি","ICT"],
            ["ধর্ম শিক্ষা","ধর্মীয় শিক্ষা"],
            ["শারীরিক শিক্ষা ও স্বাস্থ্য","শারীরিক শিক্ষা"],
            ["কৃষিশিক্ষা","ঐচ্ছিক বিষয়"],
            ["চারু ও কারুকলা","সৃজনশীল শিক্ষা"]
        ],

        "Class 8": [
            ["সাহিত্য-কণিকা","বাংলা সাহিত্য"],
            ["আনন্দপাঠ","বাংলা সহপাঠ"],
            ["বাংলা ব্যাকরণ ও নির্মিতি","বাংলা"],
            ["English for Today","English"],
            ["English Grammar and Composition","English Grammar"],
            ["গণিত","গণিত"],
            ["বিজ্ঞান","বিজ্ঞান"],
            ["বাংলাদেশ ও বিশ্বপরিচয়","সামাজিক বিজ্ঞান"],
            ["তথ্য ও যোগাযোগ প্রযুক্তি","ICT"],
            ["ধর্ম শিক্ষা","ধর্মীয় শিক্ষা"],
            ["শারীরিক শিক্ষা ও স্বাস্থ্য","শারীরিক শিক্ষা"],
            ["কৃষিশিক্ষা","ঐচ্ছিক বিষয়"],
            ["চারু ও কারুকলা","সৃজনশীল শিক্ষা"]
        ]

    };


    /* =====================================
       4. CLASS 9 & 10 COMMON BOOKS
    ===================================== */

    const seniorCommonBooks = [

        ["বাংলা সাহিত্য","বাংলা"],
        ["বাংলা সহপাঠ","বাংলা"],
        ["বাংলা ভাষার ব্যাকরণ ও নির্মিতি","বাংলা"],
        ["English for Today","English"],
        ["English Grammar and Composition","English"],
        ["গণিত","সাধারণ বিষয়"],
        ["তথ্য ও যোগাযোগ প্রযুক্তি","ICT"],
        ["ক্যারিয়ার শিক্ষা","সাধারণ বিষয়"],
        ["শারীরিক শিক্ষা, স্বাস্থ্যবিজ্ঞান ও খেলাধুলা","সাধারণ বিষয়"],
        ["ধর্ম ও নৈতিক শিক্ষা","নিজ ধর্ম অনুযায়ী"]

    ];


    /* =====================================
       5. GROUP BOOKS
    ===================================== */

    const groupDatabase = {

        "Science": [

            ["পদার্থবিজ্ঞান","বিজ্ঞান বিভাগ"],
            ["রসায়ন","বিজ্ঞান বিভাগ"],
            ["জীববিজ্ঞান","বিজ্ঞান বিভাগ"],
            ["উচ্চতর গণিত","ঐচ্ছিক বিষয়"]

        ],

        "Commerce": [

            ["হিসাববিজ্ঞান","ব্যবসায় শিক্ষা"],
            ["ফিন্যান্স ও ব্যাংকিং","ব্যবসায় শিক্ষা"],
            ["ব্যবসায় উদ্যোগ","ব্যবসায় শিক্ষা"],
            ["অর্থনীতি","ঐচ্ছিক বিষয়"]

        ],

        "Arts": [

            ["বাংলাদেশের ইতিহাস ও বিশ্বসভ্যতা","মানবিক বিভাগ"],
            ["ভূগোল ও পরিবেশ","মানবিক বিভাগ"],
            ["পৌরনীতি ও নাগরিকতা","মানবিক বিভাগ"],
            ["অর্থনীতি","ঐচ্ছিক বিষয়"]

        ]

    };


    /* =====================================
       6. CURRICULUM ELEMENTS
    ===================================== */

    const library = document.getElementById("curriculumPanel");

    const home = document.getElementById("curriculumHome");

    const groupView = document.getElementById("groupSelection");

    const bookView = document.getElementById("bookView");

    const closedView = document.getElementById("libraryClosed");

    const classGrid = document.getElementById("classGrid");

    const bookList = document.getElementById("bookList");

    const groupTitle = document.getElementById("groupClassTitle");

    const bookClassTitle = document.getElementById("bookClassTitle");

    const bookGroupTitle = document.getElementById("bookGroupTitle");

    const bookCount = document.getElementById("bookCount");


    let selectedClass = "";

    let selectedGroup = "";


    /* =====================================
       7. VIEW CONTROL
    ===================================== */

    function hideAllViews() {

        home.hidden = true;

        groupView.hidden = true;

        bookView.hidden = true;

        closedView.hidden = true;

    }


    function showHome() {

        hideAllViews();

        home.hidden = false;

        selectedClass = "";

        selectedGroup = "";

        classGrid.scrollTop = 0;

    }


    function closeLibrary() {

        hideAllViews();

        closedView.hidden = false;

        selectedClass = "";

        selectedGroup = "";

    }


    /* =====================================
       8. BOOK ICON
    ===================================== */

    function getBookIcon(name) {

        if (/গণিত|হিসাব|ব্যাংকিং/.test(name)) {
            return "fa-calculator";
        }

        if (/বিজ্ঞান|পদার্থ|রসায়ন|জীববিজ্ঞান/.test(name)) {
            return "fa-flask";
        }

        if (/English/i.test(name)) {
            return "fa-language";
        }

        if (/ইতিহাস|ভূগোল|বাংলাদেশ/.test(name)) {
            return "fa-earth-asia";
        }

        if (/প্রযুক্তি/.test(name)) {
            return "fa-computer";
        }

        return "fa-book-open";

    }


    /* =====================================
       9. DISPLAY BOOKS
    ===================================== */

    function displayBooks(className, books, groupName = "") {

        hideAllViews();

        bookView.hidden = false;

        bookClassTitle.textContent = className;

        bookGroupTitle.textContent = groupName
            ? groupName + " Group — Available Textbooks"
            : "Available textbooks for " + className;

        bookCount.textContent = books.length;

        bookList.innerHTML = "";


        books.forEach(function (book, index) {

            const card = document.createElement("div");

            card.className = "book-card";


            const iconBox = document.createElement("div");

            iconBox.className = "book-card-icon";


            const icon = document.createElement("i");

            icon.className = "fa-solid " + getBookIcon(book[0]);

            iconBox.appendChild(icon);


            const content = document.createElement("div");

            content.className = "book-card-content";


            const title = document.createElement("h4");

            title.textContent = (index + 1) + ". " + book[0];


            const subtitle = document.createElement("p");

            subtitle.textContent = book[1];

            content.append(title, subtitle);


            const type = document.createElement("span");

            type.className = "book-type";

            type.textContent = "Textbook";


            card.append(iconBox, content, type);

            bookList.appendChild(card);

        });


        bookList.scrollTop = 0;

    }


    /* =====================================
       10. CLASS SELECTION
    ===================================== */

    classGrid.addEventListener("click", function (event) {

        const button = event.target.closest(".class-card");

        if (!button) return;

        selectedClass = button.dataset.class;

        selectedGroup = "";


        if (
            selectedClass === "Class 9" ||
            selectedClass === "Class 10"
        ) {

            hideAllViews();

            groupView.hidden = false;

            groupTitle.textContent = selectedClass;

        } else {

            displayBooks(
                selectedClass,
                bookDatabase[selectedClass] || []
            );

        }

    });


    /* =====================================
       11. GROUP SELECTION
    ===================================== */

    groupView.addEventListener("click", function (event) {

        const button = event.target.closest(".group-card");

        if (!button) return;

        selectedGroup = button.dataset.group;


        const selectedBooks = [
            ...seniorCommonBooks,
            ...(groupDatabase[selectedGroup] || [])
        ];


        displayBooks(
            selectedClass,
            selectedBooks,
            selectedGroup
        );

    });


    /* =====================================
       12. BACK BUTTONS
    ===================================== */

    document.getElementById("groupBack")
        .addEventListener("click", showHome);


    document.getElementById("bookBack")
        .addEventListener("click", function () {

            if (
                selectedClass === "Class 9" ||
                selectedClass === "Class 10"
            ) {

                hideAllViews();

                groupView.hidden = false;

            } else {

                showHome();

            }

        });


    /* =====================================
       13. CLOSE BUTTONS
    ===================================== */

    document.getElementById("groupClose")
        .addEventListener("click", closeLibrary);


    document.getElementById("bookClose")
        .addEventListener("click", closeLibrary);


    document.getElementById("reopenLibrary")
        .addEventListener("click", showHome);


    showHome();


    /* =====================================
       14. ROUTINE OPTIONS
    ===================================== */

    const routineOptions = [];


    // Class 6, 7, 8

    [6,7,8].forEach(classNumber => {

        ["A","B"].forEach(section => {

            routineOptions.push({

                value: `${classNumber}-${section}`,

                label: `Class ${classNumber} – Section ${section}`,

                classNumber,

                variant: section

            });

        });

    });


    // Class 9, 10, 11, 12

    [9,10,11,12].forEach(classNumber => {

        ["Science","Commerce","Arts"].forEach(group => {

            routineOptions.push({

                value: `${classNumber}-${group}`,

                label: `Class ${classNumber} – ${group}`,

                classNumber,

                variant: group

            });

        });

    });


    /* =====================================
       15. ROUTINE SUBJECT DATABASE
    ===================================== */

    const subjectDatabase = {

        junior: [

            "Bangla",
            "English",
            "Mathematics",
            "Science",
            "BGS",
            "ICT",
            "Religion",
            "Physical Education",
            "Arts & Crafts"

        ],

        secondary: {

            Science: [
                "Bangla",
                "English",
                "Mathematics",
                "Physics",
                "Chemistry",
                "Biology",
                "ICT",
                "BGS",
                "Religion"
            ],

            Commerce: [
                "Bangla",
                "English",
                "Mathematics",
                "Accounting",
                "Finance",
                "Business Studies",
                "ICT",
                "Economics",
                "Religion"
            ],

            Arts: [
                "Bangla",
                "English",
                "Mathematics",
                "History",
                "Geography",
                "Civics",
                "Economics",
                "ICT",
                "Religion"
            ]

        },

        higher: {

            Science: [
                "Bangla",
                "English",
                "ICT",
                "Physics",
                "Chemistry",
                "Biology",
                "Higher Mathematics",
                "Practical",
                "Study Period"
            ],

            Commerce: [
                "Bangla",
                "English",
                "ICT",
                "Accounting",
                "Business Organization",
                "Finance & Banking",
                "Production Management",
                "Economics",
                "Study Period"
            ],

            Arts: [
                "Bangla",
                "English",
                "ICT",
                "History",
                "Civics",
                "Economics",
                "Geography",
                "Logic",
                "Study Period"
            ]

        }

    };


    /* =====================================
       16. ROUTINE GENERATOR
    ===================================== */

    const timeSlots = [

        "8:30 – 9:15",
        "9:15 – 10:00",
        "10:00 – 10:15",
        "10:15 – 11:00",
        "11:00 – 11:45",
        "11:45 – 12:30"

    ];

    const weekdays = ["Sunday","Monday","Tuesday"];

    const routineDatabase = {};


    function rotateSubjects(subjects, amount) {

        const shift = amount % subjects.length;

        return [
            ...subjects.slice(shift),
            ...subjects.slice(0,shift)
        ];

    }


    routineOptions.forEach((option,index) => {

        let subjects;

        if (option.classNumber <= 8) {

            subjects = subjectDatabase.junior;

        } else if (option.classNumber <= 10) {

            subjects = subjectDatabase.secondary[option.variant];

        } else {

            subjects = subjectDatabase.higher[option.variant];

        }


        const daySchedules = weekdays.map((day,dayIndex) => {

            const rotated = rotateSubjects(
                subjects,
                index + dayIndex * 2
            );

            return rotated.slice(0,6);

        });


        const schedule = timeSlots.map((time,rowIndex) => {

            if (rowIndex === 2) {

                return {

                    time,

                    subjects: ["Break","Break","Break"],

                    isBreak: true

                };

            }


            const actualIndex = rowIndex > 2
                ? rowIndex - 1
                : rowIndex;


            return {

                time,

                subjects: daySchedules.map(day =>
                    day[actualIndex]
                ),

                isBreak: false

            };

        });


        routineDatabase[option.value] = {

            assembly: option.classNumber >= 11
                ? "9:00 AM"
                : "8:00 AM",

            schedule

        };

    });


    /* =====================================
       17. ROUTINE ELEMENTS
    ===================================== */

    const classSelect = document.getElementById("class-select");

    const routineBody = document.getElementById("routine-table-body");

    const assemblyTime = document.getElementById("assembly-time");

    const routineDescription = document.getElementById("routine-description");

    const printClassName = document.getElementById("print-class-name");

    const downloadButton = document.getElementById("download-routine");


    /* =====================================
       18. POPULATE DROPDOWN
    ===================================== */

    function populateClassSelector() {

        if (!classSelect) return;

        classSelect.innerHTML = "";

        routineOptions.forEach(option => {

            const element = document.createElement("option");

            element.value = option.value;

            element.textContent = option.label;

            classSelect.appendChild(element);

        });

        classSelect.value = "6-A";

    }


    /* =====================================
       19. RENDER ROUTINE
    ===================================== */

    function renderRoutine() {

        if (!classSelect || !routineBody) return;


        const selected = routineOptions.find(
            item => item.value === classSelect.value
        );

        if (!selected) return;


        const routine = routineDatabase[selected.value];

        const fullName = selected.label;


        routineDescription.textContent =
            `Demo routine for ${fullName}.`;

        printClassName.textContent = fullName;

        assemblyTime.textContent = routine.assembly;

        routineBody.innerHTML = "";


        routine.schedule.forEach(item => {

            const row = document.createElement("tr");

            if (item.isBreak) {
                row.classList.add("break-row");
            }

            row.innerHTML = `
                <td>${item.time}</td>

                ${item.subjects.map(subject =>
                    `<td>${subject}</td>`
                ).join("")}
            `;

            routineBody.appendChild(row);

        });

    }


    /* =====================================
       20. INITIALIZE ROUTINE
    ===================================== */

    if (classSelect) {

        populateClassSelector();

        classSelect.addEventListener("change", renderRoutine);

        renderRoutine();

    }


    /* =====================================
       21. DOWNLOAD / PRINT PDF
    ===================================== */

    if (downloadButton) {

        downloadButton.addEventListener("click", function () {

            if (!classSelect || !routineDatabase[classSelect.value]) {
                return;
            }

            window.print();

        });

    }

});

