let number1 = parseInt(prompt("Ingrese primer numero"));
let number2 = parseInt(prompt("Ingrese segundo numero"));
let number3 = parseInt(prompt("Ingrese tercer numero"));
let number4 = parseInt(prompt("Ingrese cuarto numero"));
let number5 = parseInt(prompt("Ingrese quinto numero"));


if(number1>number2 && number1>number3 && number1>number4 && number1>number5){
  
            alert("El Primer numero ingresado es el mayor es " + number1);
}else if(number2>number1 && number2>number3 && number2>number4 && number2>number5){
            alert("El Segundo numero ingresado es el mayor es " + number2);
}else if(number3>number1 && number3>number2 && number3>number4 && number3>number5){
            alert("El Tercer numero ingresado es el mayor es " + number3);
}else if(number4>number1 && number4>number2 && number4>number3 && number4>number5){
            alert("El Cuarto numero ingresado es el mayor es " + number4);
}else if(number5>number1 && number5>number2 && number5>number3 && number5>number4){
            alert("El Quinto numero ingresado es el mayor es " + number5);
}