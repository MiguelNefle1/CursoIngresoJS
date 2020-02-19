function mostrar()
{

	var contador =0 ;
	var acumulador = 0;
	var respuesta='si';

	while(respuesta == "si"){

	suma = parseInt(prompt("ingrese un numero a operar"));

	acumulador += suma;

	contador++;

	respuesta = prompt("desea ingresar mas numeros?").toLowerCase();

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN