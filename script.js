const wasteForm = document.getElementById('wasteForm');
const recordsTable = document.getElementById('recordsTable').getElementsByTagName('tbody')[0];
const top5List = document.getElementById('top5List');
const undoBtn = document.getElementById('undoBtn');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

let records = [];
let undoStack = [];

// Add record to table
function addRecordToTable(record) {
    const newRow = recordsTable.insertRow();
    newRow.insertCell(0).innerText = record.householdName;
    newRow.insertCell(1).innerText = record.address;
    newRow.insertCell(2).innerText = record.wasteType;
    newRow.insertCell(3).innerText = record.weight;
    newRow.insertCell(4).innerText = record.date;
}

// Refresh table and highlight Top 5
function refreshTable() {
    recordsTable.innerHTML = "";
    sortRecordsByWeight();

    for (let i = 0; i < records.length; i++) {
        addRecordToTable(records[i]);
        if (i < 5) {
            recordsTable.rows[i].classList.add("highlight");
        }
    }

    updateTop5List();
}

// Bubble Sort by weight (Descending)
function sortRecordsByWeight() {
    for (let i = 0; i < records.length - 1; i++) {
        for (let j = 0; j < records.length - i - 1; j++) {
            if (records[j].weight < records[j + 1].weight) {
                [records[j], records[j + 1]] = [records[j + 1], records[j]];
            }
        }
    }
}

// Update Top 5 section
function updateTop5List() {
    top5List.innerHTML = "";
    for (let i = 0; i < Math.min(5, records.length); i++) {
        const li = document.createElement("li");
        li.innerText = `${records[i].householdName} - ${records[i].weight} kg`;
        top5List.appendChild(li);
    }
}

// Undo last record
undoBtn.addEventListener('click', () => {
    if (undoStack.length > 0) {
        const last = undoStack.pop();
        const index = records.indexOf(last);
        if (index > -1) {
            records.splice(index, 1);
            refreshTable();
        }
    }
});

// Search household
searchBtn.addEventListener('click', () => {
    const name = searchInput.value.trim().toLowerCase();
    if (!name) return alert("Enter a household name to search!");

    const found = records.find(r => r.householdName.toLowerCase() === name);
    if (found) {
        alert(`Found:\n${found.householdName}\n${found.address}\n${found.wasteType}\n${found.weight} kg`);
    } else {
        alert("Household not found!");
    }
});

// Form submit
wasteForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const record = {
        householdName: document.getElementById('householdName').value,
        address: document.getElementById('address').value,
        wasteType: document.getElementById('wasteType').value,
        weight: parseInt(document.getElementById('weight').value),
        date: document.getElementById('date').value
    };

    records.push(record);
    undoStack.push(record);
    refreshTable();
    wasteForm.reset();
});

//  FULL 50 SAMPLE RECORDS
const initialRecords = [];

const wasteTypes = ["Plastic", "Biodegradable", "Glass", "Metal"];
for (let i = 1; i <= 50; i++) {
    initialRecords.push({
        householdName: `Household ${i}`,
        address: `Address ${i}`,
        wasteType: wasteTypes[i % 4],
        weight: Math.floor(Math.random() * 50) + 1, // 1–50 kg
        date: `2025-12-${(i % 30 + 1).toString().padStart(2, '0')}`
    });
}

// Load 50 records
for (let rec of initialRecords) {
    records.push(rec);
    undoStack.push(rec);
}

refreshTable();
