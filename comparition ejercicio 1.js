function numero(a){
        if (a > 10){
            alert(true);//alert muestra la ventana con el resultado
        }else{
            alert(false);
        }
    }
    
    let num = parseInt(prompt("Ingrese un número: ")) /*prompt muestra la ventana con la pregunta y regresa una cadena de texto, 
    parseInt cambia la cadena a tipo número*/
    
    numero(num);