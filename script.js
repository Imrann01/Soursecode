function search() {
	let input = document.getElementById("search-bar").value;
	input=input.toLowerCase();
	let file = "data.txt";
	fetch(file).then(function(response) {
		response.text().then(function(text) {
			let data = text.toLowerCase();
			if (data.includes(input)) {
				document.getElementById("search-results").innerHTML = "Found: " + input;
			} else {
				document.getElementById("search-results").innerHTML = "Not found";
			}
		});
	});
}

