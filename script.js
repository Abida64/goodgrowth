function requestXMLHttpRequest() {
	var xhr = new XMLHttpRequest();
	xhr.responseType = "json"; //1
	xhr.open("GET", uri);
	xhr.send();
	xhr.onload = function () {
		if (xhr.status != 200) {
			//2
			console.log("XMLHttpRequest error: " + xhr.status);
			return;
		}
		processWeatherData(xhr.response); //3
	};
	xhr.onerror = function () {
		//4
		console.log("XMLHttpRequest Request failed");
	};
}
