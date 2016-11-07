var arreglo=["sol","dffdf","dsfd","sol"];
var palabra="sol";
var numero=2;

function verificar(arreglo,cadena,numero) {
	var cont=0;
	for (var i = arreglo.length - 1; i >= 0; i--) {
		if(arreglo[i]==cadena){
			cont++;
		}
	}
	if(cont==numero){
		console.log("True");
	}
	else{
		console.log("False");
	}
}


verificar(arreglo,palabra,numero);