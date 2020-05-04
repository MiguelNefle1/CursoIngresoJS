function mostrar()
{
    var primo=1;
    numero=prompt("ingrese un numero");

for(i=2;i<=numero && primo==1;i++){
    
    if(numero%i==0){
        alert("no es primo")
        primo++;
    }
    else{
        alert("es primo")
        primo++;
    }
}



}//FIN DE LA FUNCIÓN