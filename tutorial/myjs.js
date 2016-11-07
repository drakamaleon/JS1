var name= "Carlos León";
var myArray= ["Ana","Carlos", "Juan","Pedro"];


function mostrar2() {
	console.log(name);
	console.log(myArray);
}

function añadir() {
	var nombre =document.getElementById('txt').value;
	if(nombre==""){
		alert("No puede dejar el campo vacío");
	}
	else{
		myArray.push(nombre);
		console.log(myArray);
		document.getElementById('txt').value="";
	}
}