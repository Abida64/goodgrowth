const urlTemp =
	"https://europe-west1-amigo-actions.cloudfunctions.net/recruitment-mock-weather-endpoint/forecast?appid=a2ef86c41a&lat=27.987850&lon=86.925026";
const nationalTrust = new URLSearchParams(window.location.search);
const testParams = nationalTrust.has("test");
//check url of current site has parameter present, to differentiate between A/B
// if url contains a paramter e.g. test, run the script else, dont run the script
if (testParams) {
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

		//2. inject into the DOM next to region
		let additionalText = document.createTextNode(", " + tempConverted + "°C");
		let className = document.querySelector(
			".Pillstyle__StyledPill-sc-1tc0qet-0.jpeAyR.PlaceSummarystyle__StyledPill-sc-uf3onk-1.htYDvg"
		);
		className.appendChild(additionalText);
	}
}
//call function
fetchTemperature();
