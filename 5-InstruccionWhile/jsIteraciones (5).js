function mostrar()
{

var sexo = prompt("ingrese f ó m .").toLowerCase();

while(sexo != "f" && sexo != "m"){

    sexo= prompt("ingrese el sexo correcto").toLowerCase();

}
/* esta es otra forma de resolverlo

while(!(sexo == "f" || sexo == "m")){

    sexo = prompt("ingrese el sexo correcto");
}
*/
//toLowerCase significa convertir a minusculas


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN