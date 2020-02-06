function mostrar()
{
//tomo la edad  
edad = parseInt(document.getElementById("edad").value);
 if(edad>17){
     alert("es mayor");
 }
 else if(edad<13){
     alert("es un niño")
 }
 else{
     alert("es adolescente")
 }



}//FIN DE LA FUNCIÓN