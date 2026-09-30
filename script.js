function procesarNumeros(){
    // 1. Obtener los valores de los inputs usando su id
  let val1 = document.getElementById("num1").value;
  let val2 = document.getElementById("num2").value;
  let val3 = document.getElementById("num3").value;

 const datos = [];
 datos.push(val1);
 datos.push(val2);
 datos.push(val3);

 datos.sort((a,b)=> b-a);
 mostrarResultado(datos);
}

function mostrarResultado(datosNuevos){
    const Elemento = document.createElement("p");
    const nuevoElemento = document.createTextNode(` resultado es ${datosNuevos}`);
    Elemento.appendChild(nuevoElemento);
    document.getElementById("information").appendChild(Elemento);
}