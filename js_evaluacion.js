function validaNumeros(valor){
    var valorRegistrado = (valor.which) ? valor.which : valor.keyCode
    if (valorRegistrado > 31 && (valorRegistrado < 48 || valorRegistrado > 57))
        return false;
    return true;
}