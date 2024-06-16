//*******OPEN WEATHER MAP***************
const nationalTrust = new URLSearchParams(window.location.search);
const testParams = nationalTrust.has("test");

//STEP ONE. read inner text to identify city name
const regionName = document.querySelector(
	'[data-testid="place-summary-region"]'
);
let cityName = regionName.textContent;

const apiKey = "YOUR_API_KEY";
const urlApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;

//STEP TWO. fetch data using the city name
async function fetchTemperature() {
	const response = await fetch(urlApi, {
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
	//get temp from json object
	const temp = data.list[0].main.temp;
	//temp display
	console.log(temp + "°C");

	//STEP THREE. inject temp into the DOM next to region
	let addTemp = document.createTextNode(", " + temp + "°C");
	regionName.appendChild(addTemp);
}

//A/B TESTING
if (testParams) {
	fetchTemperature();
}

//GG MOCK BACKEND
// const urlTemp =
// 	"https://europe-west1-amigo-actions.cloudfunctions.net/recruitment-mock-weather-endpoint/forecast?appid=a2ef86c41a&lat=27.987850&lon=86.925026";
// const nationalTrust = new URLSearchParams(window.location.search);
// const testParams = nationalTrust.has("test");
// async function fetchTemperature() {
// 	const response = await fetch(urlTemp, {
// 		headers: {
// 			Accept: "application/json",
// 		},
// 	});
// 	//if failed
// 	if (!response.ok) {
// 		console.error(response.status);
// 		console.error(await response.text());
// 		return;
// 	}
// 	const data = await response.json();
// 	//pull temp from json object
// 	const temp = data.list[0].main.temp;
// 	//convert temp to 1 decimal place
// 	const tempConverted = temp.toFixed(1);
// 	console.log(tempConverted + "°C");

// 	//2. inject into the DOM next to region
// 	let additionalText = document.createTextNode(", " + tempConverted + "°C");
// 	let className = document.querySelector(
// 		".Pillstyle__StyledPill-sc-1tc0qet-0.jpeAyR.PlaceSummarystyle__StyledPill-sc-uf3onk-1.htYDvg"
// 	);
// 	className.appendChild(additionalText);
// }
// //check url of current site has parameter present, to differentiate between A/B
// // if url contains a paramter e.g. test, run the script else, dont run the script
// if (testParams) {
// 	//1. fetch weather data
// 	//call function
// 	fetchTemperature();
// }
