
function Calculo() {
	//var loteria
		var temp = Math.floor(Math.random() * 10);
		//alert(temp);
		document.getElementById("primero").innerHTML=temp;
		var temp2 = Math.floor(Math.random() * 10);
		document.getElementById("segundo").innerHTML=temp2;		
		var temp3 = Math.floor(Math.random() * 10);
		document.getElementById("tercero").innerHTML=temp3;	
		var temp4 = Math.floor(Math.random() * 10);
		document.getElementById("cuarto").innerHTML=temp4;
		var temp5 = Math.floor(Math.random() * 10);
		document.getElementById("quinto").innerHTML=temp5;
		var temp6 = Math.floor(Math.random() * 10);
		document.getElementById("sexto").innerHTML=temp6;
}

//window.onload=function(){
//		document.NumerosSuerte.calcular.onclick = Calculo
//	}