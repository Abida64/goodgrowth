//A/B testing, use parameter ?=test=1
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
