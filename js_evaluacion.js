function validaNumeros(valor){
    var valorRegistrado = (valor.which) ? valor.which : valor.keyCode
    if (valorRegistrado > 31 && (valorRegistrado < 48 || valorRegistrado > 57))
        return false;
    return true;
}

function agregarFila() {
    var nombres, apellidos, edad, especialidad, experiencia, url;
    nombres         = document.getElementById("txtNombres").value;
    apellidos       = document.getElementById("txtApellidos").value;
    edad            = document.getElementById("txtEdad").value;
    especialidad    = document.getElementById("cbxEspecialidad").value;
    experiencia     = document.getElementById("txtExperiencia").value;
    url             = document.getElementById("txtUrl").value;

    
    var indice = 0;
    
    switch (especialidad) {
        case "Matemàtica":
            indice = experiencia * 3;
            break;
        case "Programaciòn":
            indice = experiencia * 4;
            break;
        case "Fìsica":
            indice = experiencia * 3;
            break;
        case "Arte":
            indice = experiencia * 3;
            break;
        case "Quìmica":
            indice = experiencia * 2;
            break;
    
        default:
            indice = experiencia * 3;
            break;
    }
    
    if(url != ""){
        indice = indice + 10;
    }  

    if (nombres == "" || apellidos == "" || edad == "" || especialidad == "" || experiencia == "") {
        alert("Llenar campos requeridos por favor!");
    } else {
        document.getElementById("tblData").insertRow(-1).innerHTML = '<td>' + indice + '</td><td>' + nombres + '</td><td>' + especialidad + '</td><td><input id="btnMas" type="button" value="+" onclick="actionExec(1)"/></td><td><input id="btnMenos" class = "btnMenos" type="button" value="-" onclick="actionExec(2)"/></td><td><input id="btnDelete" type="button" value="Eliminar" onclick="actionExec(3)"/></td><td><input id="btnEnviar" type="button" value="Eviar" onclick="actionExec(4)"/></td>';
        limpiarCampos();
    }
}

function limpiarCampos() {
    document.getElementById("txtNombres").value = "";
    document.getElementById("txtApellidos").value = "";
    document.getElementById("txtEdad").value = "0";
    document.getElementById("cbxEspecialidad").value = "Matemàtica";
    document.getElementById("txtExperiencia").value = "0";
    document.getElementById("txtUrl").value = "";
}

function actionExec(parame) {
    switch (parame) {
        case 1:
            // Subir e un 10%
            alert("Subir Indice en 10%");
            break;
        
        case 2:
            // Bajar e un 10%
            alert("Bajar Indice 10%");
            break;

        case 3:
            if(confirm("¿Está seguro en eliminar esta fila?")){
                eliminarFila();
                limpiarCampos()
            }
            break;

        case 4:
            // Enviar Validaciòn
            alert("");
            break;

        default:
            alert("PRESIONO VER");
            break;
    }
}

function eliminarFila() {
    var td = event.target.parentNode; 
    var tr = td.parentNode;
    var index = Array.from(tr.parentNode.children).indexOf(tr);
    tr.parentNode.removeChild(tr);
}
