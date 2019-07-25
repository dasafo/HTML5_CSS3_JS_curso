
function pregunta() {

	var objetos = ['screen', 'history', 'document', 'navigator', 'location', 'window'];
	var choise = prompt("Introduce el nombre de un objeto:\n(screen, history, document, navigator, location, o window)");
	var idx = objetos.indexOf(choise);
	var msg = document.getElementById("valores");

	if (idx !== -1) {
		msg.innerHTML= "";
		printTabla(choise);
	} 
	else {
		msg.innerHTML= "Objeto no encontrado";
	}
}


function printTabla(obj) {

	var tabla = document.getElementById("tabla");
	var contenido = "<caption>Objeto '" + obj + "'</caption><tr><th>Propiedad</th><th>Valor</th></tr>";
	var tiposImprimibles = ['string', 'number', 'boolean'];

	for(i in window[obj]) {
		var valor = window[obj][i];
		var tipo = typeof(window[obj][i]);
		var idx = tiposImprimibles.indexOf(tipo);

		if (idx === -1) {
			console.log(typeof(valor));
			valor = "No Imprimible";
		}
		contenido += "<tr><td>" + i + "</td><td>" + valor + "</td></tr>";
	}
	tabla.innerHTML = contenido;
}