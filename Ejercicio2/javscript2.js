var frase ="";

function palindromo(cadena) {
	cadena = quitarEspacio(cadena);
	cadena = cadena.toLowerCase();
	var invertido = invertir(cadena);
	if(cadena==invertido){
		return true;
	}
	else{
		return false;
	}
	
}

function invertir(cadena) {
  var x = cadena.length;
  var cadenaInvertida = "";
 
  while (x>=0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    x--;
  }
  return cadenaInvertida;
}



function quitarEspacio(cadena){
	var longitud =cadena.length;
	var cad="";
	var x =0;
	while(x<longitud){
			if (cadena[x] !=' '){
			cad= cad+cadena[x];
			
		}
		x++;
	}
	return cad;
}

palindromo(frase);