function  hideOpciones() {
	document.getElementById("Opciones").style.display="none";
}

function showOpciones() {
	document.getElementById("Opciones").style.display="block";
}

function Calculo() {
	Nombre = document.CalculoIGC.Nombre.value
	Peso = document.CalculoIGC.Peso.value
	Sexo = document.CalculoIGC.Sexo.value
	Cintura = document.CalculoIGC.Cintura.value
	Cadera = document.CalculoIGC.Cadera.value

		if (Sexo=="Sexm") {
			var IGChom = (Peso-((Peso*0,85)+28-(Cintura*0.35)))*100/Peso;
			alert("Su Indice de Gasa Corporal es: "+IGChom.toFixed(2)+" %");
		}
		else
			var IGChom = (Peso-((Peso*0.86)+24-(Cintura*0.14)-(Cadera*0.2)))*100/Peso;
			alert("Su Indice de Gasa Corporal es: "+IGChom.toFixed(2)+" %");
		}

}

window.onload = function() {
	document.CalculoIGC.Resultado.onclick = Calculo
}