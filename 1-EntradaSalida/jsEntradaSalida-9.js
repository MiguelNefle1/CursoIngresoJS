/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var sueldo;
    var RESULTADO;
    
    sueldo = document.getElementById("sueldo").value;

    parseInt(sueldo);

    RESULTADO = (sueldo + (sueldo * 10)/100);

    alert("el resto es : " + RESULTADO);
	
}
