
    
// =========================================
// SUNRISE MODEL SCHOOL & COLLEGE
// TUITION FEES PAGE JAVASCRIPT
// =========================================


// =========================================
// LOAD SHARED NAVBAR AND FOOTER
// =========================================


// =========================================
// FEE STRUCTURE DATA
// =========================================

const feeStructure = [

    {
        icon: "fa-user-graduate",
        category: "Admission Fee",
        amount: 3000
    },

    {
        icon: "fa-calendar-days",
        category: "Monthly Tuition Fee",
        amount: 1200
    },

    {
        icon: "fa-book",
        category: "Session Fee",
        amount: 1500
    },

    {
        icon: "fa-circle-check",
        category: "Examination Fee",
        amount: 500
    },

    {
        icon: "fa-id-card",
        category: "ID Card Fee",
        amount: 200
    },

    {
        icon: "fa-book-open",
        category: "Library Fee",
        amount: 300
    },

    {
        icon: "fa-trophy",
        category: "Sports Fee",
        amount: 300
    }

];


// =========================================
// CLASS-WISE MONTHLY TUITION DATA
// =========================================

const monthlyFees = [

    {
        className: "Play – Nursery",
        amount: 800
    },

    {
        className: "Class 1 – 2",
        amount: 900
    },

    {
        className: "Class 3 – 5",
        amount: 1000
    },

    {
        className: "Class 6 – 8",
        amount: 1200
    },

    {
        className: "Class 9 – 10",
        amount: 1500
    }

];


// =========================================
// OFFICE PAYMENT INFORMATION
// =========================================

// Demo information.
// Replace the details with the school's
// verified payment information.

const officeInformation = [

    {
        label: "Account Name",
        value: "Sunrise Model School & College"
    },

    {
        label: "Bank",
        value: "Dutch-Bangla Bank"
    },

    {
        label: "Branch",
        value: "Mirpur Branch"
    },

    {
        label: "Account Number",
        value: "Contact School Office"
    },

    {
        label: "Payment Deadline",
        value: "10th of Every Month"
    }

];


// =========================================
// FORMAT CURRENCY
// =========================================

function formatCurrency(amount) {

    return "৳" + Number(amount).toLocaleString("en-BD");

}


// =========================================
// GENERATE FEE STRUCTURE TABLE
// =========================================

function renderFeeStructure() {

    const tableBody =
        document.getElementById("feeStructureBody");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    feeStructure.forEach(item => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>
                <i class="fa-solid ${item.icon} fee-icon"></i>
            </td>

            <td>${item.category}</td>

            <td>
                <span class="fee-amount">
                    ${formatCurrency(item.amount)}
                </span>
            </td>
        `;

        tableBody.appendChild(row);

    });

}


// =========================================
// GENERATE MONTHLY FEE TABLE
// =========================================

function renderMonthlyFees() {

    const tableBody =
        document.getElementById("monthlyFeeBody");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    monthlyFees.forEach(item => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.className}</td>

            <td>
                ${formatCurrency(item.amount)}
            </td>
        `;

        tableBody.appendChild(row);

    });

}


// =========================================
// GENERATE OFFICE INFORMATION TABLE
// =========================================

function renderOfficeInformation() {

    const tableBody =
        document.getElementById("officeInfoBody");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    officeInformation.forEach(item => {

        const row = document.createElement("tr");

        const labelCell = document.createElement("td");
        const valueCell = document.createElement("td");

        labelCell.textContent = item.label;
        valueCell.textContent = item.value;

        row.appendChild(labelCell);
        row.appendChild(valueCell);

        tableBody.appendChild(row);

    });

}


// =========================================
// INITIALIZE TUITION PAGE
// =========================================

function initializeTuitionPage() {

    renderFeeStructure();

    renderMonthlyFees();

    renderOfficeInformation();

}


// =========================================
// RUN PAGE
// =========================================

document.addEventListener(
    "DOMContentLoaded",
    initializeTuitionPage
);

    
