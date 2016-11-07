function Armstrong(numero) {
	var num =numero.toString();
	var calculo=0;
	for (var i = num.length - 1; i >= 0; i--) {
		dig =parseInt(num[i]);
		calculo=calculo+(dig**num.length);
	}
	return (calculo==numero);
}

function mostrar() {
	for (var i = 100; i < 1000; i++){
		if(Armstrong(i)){
			console.log(i)
		}
	}
}

mostrar();