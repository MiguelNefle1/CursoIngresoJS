function mostrar()
{
    var divisor;
    var contador=0;

numero=prompt("ingrese un numero");

for(i=1;i<=numero;i++){

    if(numero%i==0){
        alert(i);
        contador++;
    }



}
alert("la cantida encontrada es: " + contador);


}//FIN DE LA FUNCIÓN