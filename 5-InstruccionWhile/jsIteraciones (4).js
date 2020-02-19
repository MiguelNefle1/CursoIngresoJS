function mostrar()
{
	//dos formas de resolverlo
	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	/*while(!(numero>=0 && numero <=9)){

		numero =parseInt(prompt("numero incorrecto,ingreselo nuevamente"));

	}

	document.getElementById("Numero").value = numero;
	*/
	while(numero < 0 || numero > 9 || isNaN(numero)){

		numero =parseInt(prompt("numero incorrecto,ingreselo nuevamente"));

	}

	document.getElementById("Numero").value = numero;

	// la forma || quiere decir "O"
	//isNaN = no es un numero



}//FIN DE LA FUNCIÓN