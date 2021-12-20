function articulos(a,b,c){
        if(a > b && a > c){
            alert("Los artículos más baratos cuestan: " + b +"$" + " y" + c+"$");
        }else if (b > a && b > c){
            alert("Los artículos más baratos cuestan: " + a+"$" + " y" + c+"$");
        }else if (c > a && c > b){
            alert("Los artículos más baratos cuestan: " + a+"$" + " y" + b+"$");
        }
    }
    
    let numero1 = parseInt(prompt("Ingrese el primer número: "));
    let numero2 = parseInt(prompt("Ingrese el segundo número: "));
    let numero3 = parseInt(prompt("Ingrese el tercer número: "));
    
    articulos(numero1,numero2,numero3);