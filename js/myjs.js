var possibilities = ["povo","economia","lettere","filosofia","mesiano",
					"ingegneria","giurisprudenza","sociologia","scienze cognitive",
					"giuri","socio","help"];

function delay(t) {
	return new Promise(function(resolve) { 
		setTimeout(resolve, t)
	});
}

function showCommand(){
	console.log("showCommand")
	var table = document.getElementById("table_div");
	table.style.visibility = "visible";
	let tmp = table.style.visibility;
	return tmp;

}

//funzione per chiamare result.html con la query inserita dall'utente
function go(){
	let url;
	let q = document.getElementById("inserisci").value;
	let geo = document.getElementById("geoloc").value;
	if (geo == true)
		url = "result.html?geoloc=true&q="+q;
	//prima bisogna parsare la q e poi aggiungere il parametro polo/aula all'url
	else
		url = "result.html?q="+q;
	myurl = url;
	location.href = url;
}


function getQueryVariable(url_string,param) {
	var url = new URL(url_string);
	var query = url.searchParams.get(param);
	if(query)
		return query;
	return null;
}


/*function contains(arr, element) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === element) {
		return true;
		}
	}
	return false;
}*/


/*function getLocation() {
	return new Promise(
		function(resolve,reject){
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition((pos) => {
					resolve(showPosition1(pos));
				});
			} else { 
				console.log("Geolocation is not supported by this browser.") ;
				reject();
			}
		}
	);
}


function showPosition(position) {
	return new Promise(
		function(resolve,reject){
			console.log("enter show position");
			lat = position.coords.latitude;
			lng = position.coords.longitude;
			let pos = {'lat':lat, 'lng':lng};

			resolve(pos);
		}
	);
}


function getQueryVariable_q(url_string) {
	var url = new URL(url_string);
	var query = url.searchParams.get("q");
	if(query)
		return query;
	return null;
}

function getQueryVariable_geoloc(url_string) {
	var url = new URL(url_string);
	var query = url.searchParams.get("geoloc");
	if(query)
		return query;
	return null;
}*/
module.exports = {getQueryVariable, showCommand, go};
