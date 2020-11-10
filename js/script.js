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
    cell4.innerHTML = `<button type="button" class="btn edit-btn" onClick="onEdit(this)"><i class="fas fa-edit"></i></button>
                       <button type="button" class="btn delete-btn" onClick="onDelete(this)"><i class="fa fa-trash"></i></button>`;
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


function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("name").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("name").classList.contains("hide"))
            document.getElementById("name").classList.add("hide");
    }
    return isValid;
}



////// search input filter//////

function SearchInput() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filter");
    filter = input.value.toUpperCase();
    table = document.getElementById("birthdayList");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}






//////sort number////


birthdayList.onclick = function (e) {
    if (e.target.tagName != 'TH') return;

    let th = e.target;

    sortlist(th.cellIndex, th.dataset.type);
};

function sortlist(colNum, type) {
    let tbody = birthdayList.querySelector('tbody');

    let rowsArray = Array.from(tbody.rows);
    let compare;

    switch (type) {
        case 'number':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };

            break;
    }

    // sort
    rowsArray.sort(compare);

    tbody.append(...rowsArray);
}