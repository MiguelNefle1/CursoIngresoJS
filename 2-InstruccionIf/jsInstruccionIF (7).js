function mostrar()
{
//tomo la edad  
edad = parseInt(document.getElementById("edad").value);
estadoCivil= document.getElementById("estadoCivil").value;

if(edad < 18 && estadoCivil != "soltero"){

alert("Es muy pequeño para NO ser soltero");
    
}
	


}//FIN DE LA FUNCIÓN