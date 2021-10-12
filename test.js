function save_data() {
  
    
    let table = document.getElementById("data_table");
    let rowCount = table.rows.length;
    let name = document.getElementById("full_name_id").value;
    let last = document.getElementById("full_last_name_id").value;
    let age = document.getElementById("age_id").value;
    let specialty = document.getElementById("specialty_id").value;
    let yearsExp = document.getElementById("years_exp_id").value;
    let linkedin = document.getElementById("url_id").value;
    let index = 0
    if (linkedin != ''){
        index = (yearsExp * specialty) + 10;
        // document.getElementById('index').setAttribute('value', aux)
    } else {
        index = (yearsExp * specialty);
    }

    let loadData = "<tr id='row" + rowCount + "'>";
    loadData += "<td id='new_name" + rowCount + "'>" + name + "</td>";
    loadData += "<td id='new_specialty" + rowCount + "'>" + specialty + "</td>";
    loadData += "<td id='new_index" + rowCount + "'>" + index + "</td>";
    loadData += "<td>";
    loadData += "<input type='button' id='add_level' value='+' class='btn btn-success' onclick='addLevel("+rowCount+")'>";
    loadData += "<input type='button' id='down_level' value='-' class='btn btn-primary' onclick='downLevel("+rowCount+")'>";
    loadData += "<input type='button' value='Eliminar' class='btn btn-danger' onclick='deleteRow(this)'>";
    loadData += "<input type='button' value='Validar' class='btn btn-info' onclick='validateRow("+index+")'>";
    loadData += "</td>";
    loadData += "<td><input type='hidden' id='new_last_name' value='"+last+"'></td>";
    loadData += "<td><input type='hidden' id='new_age' value='"+age+"'></td>";
    loadData += "<td><input type='hidden' id='new_years' value='"+yearsExp+"'></td>";
    loadData += "<td><input type='hidden' id='new_linkedin' value='"+linkedin+"'></td>";
    loadData += "</tr>";
    console.log(loadData);
    table.insertRow(-1).innerHTML = loadData;
   
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function addLevel(rowCount){
let index =  document.getElementById("new_index"+rowCount).value;
index += 10;
document.getElementById('new_index' + rowCount).setAttribute('value', index)
}

function downLevel(rowCount){
    let index =  document.getElementById("new_index"+rowCount).value;
    index = index-10;
    document.getElementById('new_index' + rowCount).setAttribute('value', index)
    }

