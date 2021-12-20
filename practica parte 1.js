let number1 = parseInt(prompt("Ingrese cantidad de tareas"));

   
    if(number1 > 0 && number1<=6){
    
    alert("Fallo");

   }else if(number1 > 6 && number1 <=9){
  
   alert("Insuficiente");

   }else if(number1 > 9 && number1 <=14){

    alert("Bueno");

   }else if(number1===15){

    alert("Excelente");

   }else{

    alert("Error");

   }