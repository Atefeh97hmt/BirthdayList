


function addRow() {

    var myName = document.getElementById("name");
    var day = document.getElementById("day");
    var month = document.getElementById("month");
    var table = document.getElementById("TableInfo");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    // row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(0).innerHTML = myName.value;
    row.insertCell(1).innerHTML = day.value;
    row.insertCell(2).innerHTML = month.value;

}




// function deleteRow(obj) {

//     var index = obj.parentNode.parentNode.rowIndex;
//     var table = document.getElementById("TableInfo");
//     table.deleteRow(index);

// }