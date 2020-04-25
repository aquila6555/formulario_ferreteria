function ValidaDatos() {
    var nomb = document.frmDatos.txtNombre;
    var dir = document.frmDatos.txtDir;
    var Celu = document.frmDatos.txtCelu;
    var prod = document.frmDatos.cboProducto;
    var nit = document.frmDatos.txtNIT;
    var CI = document.frmDatos.txtCI;
    var ciudad = document.frmDatos.txtCiudad;
    var fechai = document.frmDatos.FechaiProducto;
    var fechas = document.frmDatos.FechasProducto;
    var nombp = document.frmDatos.txtNombrePro;

     /*controlar el rango de digitos*/
    if(CI.value.length != 8){
        alert("introduzca la cantidad exacta de digitos del carnet");
        return false;
    }
    /*corrobora que sean digitos enteros y no asi caracteres */
    for(var i=0; i< CI.value.length; i++){
        if(isNaN(parseInt(CI.value.charAt(i)))== true){
           alert("solamente numeros enteros");
        return false;
           }
    
}
    
    if (nomb.value == "" || dir.value == "" || celu.value == "" || prod.value == "" || nit.value == "" || CI.value == "" || ciudad.value == "" ||fechai.value == "" || fechas.value == "" || nombp.value == "") {
        alert("todos los campos son obligatorios")
        return false;
    }
    
    

}
