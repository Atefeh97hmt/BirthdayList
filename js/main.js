function addRow() {

    var myName = document.getElementById("name");
    var day = document.getElementById("day");
    var month = document.getElementById("month");
    var table = document.getElementById("TableInfo");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    // row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(0).innerHTML = '<div type="text" value ="*"> ';
    row.insertCell(1).innerHTML = myName.value;
    row.insertCell(2).innerHTML = day.value;
    row.insertCell(3).innerHTML = month.value;
    row.insertCell(4).innerHTML = '<div type="text" value ="*"> ';
    // row.insertCell(4).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';

}




// function deleteRow(obj) {

//     var index = obj.parentNode.parentNode.rowIndex;
//     var table = document.getElementById("TableInfo");
//     table.deleteRow(index);

// }