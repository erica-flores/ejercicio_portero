function init(){
    let piso;
    let dpto;
    let resultado = document.getElementById('resultado');
    let reset = document.getElementById('reset');
    let llamar = document.getElementById('llamar');
    let resultadoPiso = document.getElementById('btnPiso');
    let resultadoDpto = document.getElementById('btnDpto');
    
    uno.onclick = function(e){
        resultado.textContent += "1";
    }
    dos.onclick = function(e){
        resultado.textContent += "2";
    }
    tres.onclick = function(e){
        resultado.textContent += "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent += "4";
    }
    cinco.onclick = function(e){
        resultado.textContent += "5";
    }
    seis.onclick = function(e){
        resultado.textContent += "6";
    }
    siete.onclick = function(e){
        resultado.textContent += "7";
    }
    ocho.onclick = function(e){
        resultado.textContent += "8";
    }
    nueve.onclick = function(e){
        resultado.textContent += "9";
    }
    cero.onclick = function(e){
        resultado.textContent += "0";
    }

    llamar.onclick = function(e){
        dpto = resultado.textContent;
        limpiar()
        pisoVacio()
        
    }
    reset.onclick = function(e){
        resetear();
    }

    resultadoPiso.onclick = function (e){
        pisoVacio()
        document.getElementById('labelPiso').style.display = 'inline';
        document.getElementById('textoPiso').style.display = 'inline';
        document.getElementById('textoDpto').style.display = 'none';
        limpiar()
    }

    resultadoDpto.onclick = function (e){
        piso = resultado.textContent;
        document.getElementById('textoPiso').style.display = 'none';
        document.getElementById('textoDpto').style.display = 'inline';
        limpiar()
    }
    
    
    function limpiar(){
        resultado.textContent = "";
      }

    function resetear(){
        resultado.textContent = "";
        document.getElementById('labelPiso').style.display = 'none';
        document.getElementById('textoPiso').style.display = 'none';
        document.getElementById('textoDpto').style.display = 'none';
        
        piso = 0;
        dpto = 0;

    }

    function pisoVacio(){
        if(piso == undefined || piso == "" || piso > 42 || dpto > 8 || dpto == ""){
            limpiar()
            document.getElementById('textoDpto').style.display = 'none';
            resultado.textContent = "Error"
            
        } else {
           
            document.getElementById('textoDpto').style.display = 'none';
            resultado.textContent += `Llamando al piso ${piso}, departamento ${dpto}`;
        }
    }
    


} 


