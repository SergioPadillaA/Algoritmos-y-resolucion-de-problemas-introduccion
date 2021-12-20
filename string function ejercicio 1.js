let cadena = prompt("Introduce la cadena");

function checkEmptyString(cadena) {
  if (cadena == ""){
    console.log("Esta cadena esta vacía");
  }else{
    console.log(cadena.substr(0,1));
  }
}
checkEmptyString(cadena);