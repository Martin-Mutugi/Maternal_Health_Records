let records = [];
let editIndex = -1;

document.getElementById('saveRecord').addEventListener('click', function() {
    const patientId = document.getElementById('patientId').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (patientId && name && phone) {
        const newRecord = { patientId, name, phone };

        if (editIndex === -1) {
            records.push(newRecord);
        } else {
            records[editIndex] = newRecord;
            editIndex = -1;
        }

        document.getElementById('patientForm').reset();
        displayRecords();
    } else {
        alert("Please fill all fields!");
    }
});

function displayRecords() {
    const recordTableBody = document.getElementById('recordTableBody');
    recordTableBody.innerHTML = '';

    records.forEach((record, index) => {
        const row = `<tr>
            <td>${record.patientId}</td>
            <td>${record.name}</td>
            <td>${record.phone}</td>
            <td>
                <button class="btn btn-warning" onclick="editRecord(${index})">Edit</button>
                <button class="btn btn-danger" onclick="deleteRecord(${index})">Delete</button>
            </td>
        </tr>`;
        recordTableBody.innerHTML += row;
    });
}

function deleteRecord(index) {
    records.splice(index, 1);
    displayRecords();
}

function editRecord(index) {
    const record = records[index];
    document.getElementById('patientId').value = record.patientId;
    document.getElementById('name').value = record.name;
    document.getElementById('phone').value = record.phone;
    editIndex = index;
}
