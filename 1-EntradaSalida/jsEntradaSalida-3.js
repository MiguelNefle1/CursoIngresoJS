/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    var nombre;
    //esto es la caja de texto;busco en archivo html el "id"(input type:...)
    nombre=document.getElementById("elNombre").value;
    
    alert(nombre)


}


