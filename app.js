let numeroSecreto= 0;
let intentos=0;
let listaNumerosSorteado=[];
let numeroMaximo=10;
//console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
}

function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos);
    if(numeroDeUsuario===numeroSecreto){
    asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez':'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
         } else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
         } 
         intentos++;    
         limpiarCaja();
    }
}

function limpiarCaja(){
document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1; 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteado);
    //Si ya sorteamos todas las variables
    if(listaNumerosSorteado.length== numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }
        else
        {

       
          //Verifcar que el numero generad no este en la lita
          if(listaNumerosSorteado.includes(numeroGenerado)){
          return generarNumeroSecreto();
          }
          else{
            listaNumerosSorteado.push(numeroGenerado);
            return numeroGenerado;
              }
        }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Introduce un numero del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //Genarar el numero aleatorio     
    //Inicializar el numero de intentos    
    //Deshabilitar el boton de nuevo juego  
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();