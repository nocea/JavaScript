function lista(){
let alumnos = ["Alfonso","Alberto","Carlos","José María"];

let alumno=alumnos[2];
let letra= alumno.charAt(2);

/*
Es lo mismo que hacer esto 
alumno=alumnos[2][2];
esto elige a Carlos y lo vuelve otro array y elige la tercera letra.
*/

document.write(alumno);
document.write("<br>");
document.write(letra);
}
function lista2(){
	let lista2=[123,"Mario"];
	//lo siguiente sale undefined porque no se le puede hacer el charAt a un int
	let numero=lista2[0][1];
	let palabra=lista2[1][1];
	
	document.write(numero);
	document.write("<br>");
	document.write(palabra);
	document.write("<br>");
	document.write("<br>");
	for(i=0;i<lista2.length;i++){
		document.write("\n"+ typeof lista2[i])
	}
	
}