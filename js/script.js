var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["day"] = document.getElementById("day").value;
    formData["month"] = document.getElementById("month").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("birthdayList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = "";
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.day;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.month;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button type="button" class="btn edit-btn" onClick="onEdit(this)">Edit</button>
                       <button type="button" class="btn delete-btn" onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("day").value = selectedRow.cells[2].innerHTML;
    document.getElementById("month").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.day;
    selectedRow.cells[3].innerHTML = formData.month;
}

function onDelete(td) {
    row = td.parentElement.parentElement;
    document.getElementById("birthdayList").deleteRow(row.rowIndex);
    resetForm();

}

function validate() {
    isValid = true;
    return isValid;
}