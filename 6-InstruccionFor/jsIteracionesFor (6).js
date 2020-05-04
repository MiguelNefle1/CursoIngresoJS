function mostrar()
{
var pares;
var contador=0;
numero=prompt("introduce el numero")

for(i=1;i<=numero;i++){

    if(i%2==0){
        alert(i)
        contador++;
    }

   
}
alert("la cantidad de pares encontrados es: "+ contador);

}//FIN DE LA FUNCIÓN