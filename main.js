//1. fetch weather
const urlTemp =
	"https://europe-west1-amigo-actions.cloudfunctions.net/recruitment-mock-weather-endpoint/forecast?appid=a2ef86c41a&lat=27.987850&lon=86.925026";

async function fetchTemperature() {
	const response = await fetch(urlTemp, {
		headers: {
			Accept: "application/json",
		},
	});
	//if failed
	if (!response.ok) {
		console.error(response.status);
		console.error(await response.text());
		return;
	}

	const data = await response.json();
	//pull temp from json object
	const temp = data.list[0].main.temp;
	//convert temp to 1 decimal place
	const tempConverted = temp.toFixed(1);
	//temp display
	console.log(tempConverted + "°C");

	//2. inject weather into the DOM
	const elements = document.getElementsByClassName(
		"PlaceSummarystyle__Summary-sc-uf3onk-0 kKcMe Placestyle__StyledPlaceSummary-sc-7yy3d-2 kKgkNU"
	);
	if (elements.length > 0) {
		const element = elements[0]; // Get the first matching element
		const newPara = document.createElement("p");
		newPara.textContent = tempConverted + "°C";
		element.appendChild(newPara);
	} else {
		console.error("No matching elements found.");
	}
}

//call function
fetchTemperature(element);

// function requestXMLHttpRequest() {
// 	var xhr = new XMLHttpRequest();
// 	xhr.responseType = "json"; //xhr response will populate as json
// 	xhr.open("GET", uri);
// 	xhr.send();
// 	xhr.onload = function () {
// 		if (xhr.status != 200) {
// 			//2
// 			console.log("XMLHttpRequest error: " + xhr.status);
// 			return;
// 		}
// 		processWeatherData(xhr.response); //3
// 	};
// 	xhr.onerror = function () {
// 		//4
// 		console.log("XMLHttpRequest Request failed");
// 	};
// }
