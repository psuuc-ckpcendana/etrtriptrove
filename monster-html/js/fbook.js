var selectedRow = null;
function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}
//retrieve data
function readFormData() {
    

    var formData = {};
    formData["Nothin"] = document.getElementById("Nothin").value;
    formData["Type"] = document.getElementById("Type").value;
    formData["Name"] = document.getElementById("Name").value;
    formData["From"] = document.getElementById("From").value;
    formData["To"] = document.getElementById("To").value;
    formData["alis"] = document.getElementById("alis").value;
    return formData;
}

//insert data
function insertNewRecord(data) {
      var table = document.getElementById("flightT").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
                cell1.innerHTML = data.Nothin;
    var cell2 = newRow.insertCell(1);
                cell2.innerHTML = data.Type;
    var cell3 = newRow.insertCell(2);
                cell3.innerHTML = data.Name;
    var cell4 = newRow.insertCell(3);
                cell4.innerHTML = data.From;
    var cell5 = newRow.insertCell(4);
                cell5.innerHTML = data.To;
    var cell6 = newRow.insertCell(5);
                cell6.innerHTML = data.alis;
}

//edit
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Type').value = selectedRow.cells[0].innerHTML;
    document.getElementById('Name').value = selectedRow.cells[1].innerHTML;
    document.getElementById('From').value = selectedRow.cells[2].innerHTML;
    document.getElementById('To').value = selectedRow.cells[3].innerHTML;
    document.getElementById('alis').value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Type;
    selectedRow.cell[1].innerHTML = formData.Name;
    selectedRow.cells[2].innerHTML = formData.From;
    selectedRow.cell[3].innerHTML = formData.To;
    selectedRow.cell[4].innerHTML = formData.alis;
}
//delete
function onDelete(td) {
    if(confirm('do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('flightT').deleteRow(row.rowIndex);
    }
    resetForm();
}

//reset
function resetForm() {
    document.getElementById('Type').value = '';
    document.getElementById('Name').value = '';
    document.getElementById('From').value = '';
    document.getElementById('To').value = '';
    document.getElementById('alis').value = '';
}