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



function myFunction() {
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





// onclick="sortTable(2)"
// function sortTable(n) { 
//     var table; 
//     table = document.getElementById("birthdayList"); 
//     var rows, i, x, y, count = 0; 
//     var switching = true; 

//     // Order is set as ascending 
//     var direction = "ascending"; 

//     // Run loop until no switching is needed 
//     while (switching) { 
//         switching = false; 
//         var rows = table.rows; 

//         //Loop to go through all rows 
//         for (i = 1; i < (rows.length - 1); i++) { 
//             var Switch = false; 

//             // Fetch 2 elements that need to be compared 
//             x = rows[i].getElementsByTagName("TD")[n]; 
//             y = rows[i + 1].getElementsByTagName("TD")[n]; 

//             // Check the direction of order 
//             if (direction == "ascending") { 

//                 // Check if 2 rows need to be switched 
//                 if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
//                     { 
//                     // If yes, mark Switch as needed and break loop 
//                     Switch = true; 
//                     break; 
//                 } 
//             } else if (direction == "descending") { 

//                 // Check direction 
//                 if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) 
//                     { 
//                     // If yes, mark Switch as needed and break loop 
//                     Switch = true; 
//                     break; 
//                 } 
//             } 
//         } 
//         if (Switch) { 
//             // Function to switch rows and mark switch as completed 
//             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); 
//             switching = true; 

//             // Increase count for each switch 
//             count++; 
//         } else { 
//             // Run while loop again for descending order 
//             if (count == 0 && direction == "ascending") { 
//                 direction = "descending"; 
//                 switching = true; 
//             } 
//         } 
//     } 
// } 






birthdayList.onclick = function(e) {
    if (e.target.tagName != 'TH') return;

    let th = e.target;
 
    sortlist(th.cellIndex, th.dataset.type);
  };

  function sortlist(colNum, type) {
    let tbody = birthdayList.querySelector('tbody');

    let rowsArray = Array.from(tbody.rows);

    // compare(a, b) compares two rows, need for sorting
    let compare;

    switch (type) {
      case 'number':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
        };
    //     break;
    //   case 'string':
    //     compare = function(rowA, rowB) {
    //       return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
    //     };
        break;
    }

    // sort
    rowsArray.sort(compare);

    tbody.append(...rowsArray);
  }
