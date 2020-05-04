/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var resultado;
var precioFinal;
function numeros () {
precioUno=parseInt(document.getElementById("PrecioUno").value);
precioDos=parseInt(document.getElementById("PrecioDos").value);
precioTres=parseInt(document.getElementById("PrecioTres").value);
}

function Sumar () 
{
    numeros();
    resultado=precioUno+precioDos+precioTres;
	alert(resultado)
}
function Promedio () 
{
    numeros();
    resultado=(precioUno+precioDos+precioTres)/3;
    alert(resultado);
}
function PrecioFinal () 
{
    numeros();
    resultado=precioUno+precioDos+precioTres;
    precioFinal=resultado+((resultado)*21)/100;
	alert(precioFinal);
	
}