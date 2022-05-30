const csv = 'javascript, python, c++, rust, go,';
let csv2=csv;
function printValues(){
    const valor=csv2.substring(0, csv2.indexOf(','));
    csv2=csv2.slice(csv2.indexOf(',')+1);
    console.log(csv2);
    mostrarMensaje(valor);
}

function mostrarMensaje(mensaje){
    const newValor= document.createElement('H3');
    newValor.textContent= mensaje;
    divMensaje.appendChild(newValor);
    
}

