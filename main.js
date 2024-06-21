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
	const datetime = data.list[0].dt_txt;
	const temp = data.list[0].main.temp;
	const feelsLike = data.list[0].main.feels_like;
	const type = data.list[0].weather[0].description;
	const wind = data.list[0].wind.speed;
	//display
	console.log(temp + "°C");

	//STEP THREE. inject temp into the DOM next to region
	let weather = document.createElement("div");
	weather.textContent = `${type} ${temp}°C, feels like ${feelsLike}°C, wind ${wind} m/s`;
	weather.style.fontFamily = "Arial, sans-serif";
	weather.style.fontSize = "0.875rem";
	regionName.parentNode.insertBefore(weather, regionName.nextSibling);
}

//A/B TESTING
if (testParams) {
	fetchTemperature();
}
