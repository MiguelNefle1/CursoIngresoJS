function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	num = parseInt(Math.random()*11);

	if (num>=9){

		alert("EXCELENTE");

	}
	else if (num > 3){
		alert("APROBÓ");
	}
	else{
		alert("Vamos, la proxima se puede");
	}





}//FIN DE LA FUNCIÓN