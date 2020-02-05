/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{

	var nombre;

	nombre = prompt("ingrese su nombre");
	//insertamos el valor al revez que la pagina 3
	document.getElementById("elNombre").value = nombre;



}

