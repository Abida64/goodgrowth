# Good Growth Tech Test - National Trust Weather

## Brief:
The National Trust would like to have their properties’ information pages display the weather in
that property’s location. They believe that this additional information will increase the probability of users
visiting a property.

## How To Use
Chrome browser snippets would be ideal, however, you can run this on any browser's console.

Using Chrome Snippets:
1. **Go to https://openweathermap.org/, generate your own API Key and enter it on line 10 replacing "YOUR_API_KEY"**
2. **Go to any property page from the [National Trust](https://www.nationaltrust.org.uk/visit/birmingham-west-midlands/birmingham-back-to-backs) site**
3. **Right-click and select "inspect". For Mac, Command+Option+i. Ensure you are on the test page, by adding ?test=1 to the end of the URL**
4. **Go to "Sources" > more tabs (double arrow) > "Snippets" > "New Snippet" > give your new snippet a name. Copy and paste the script from the main.js file into your new snippet**
   <img src="https://github.com/Abida64/goodgrowth/assets/149109371/f2d339e2-66ba-4e6a-9de2-dd112d9a45e1" width="700" />
5. **Run the code snippet, either by pressing Ctrl + Enter, or clicking the button on the bottom right. You should see the current weather from the API display next to the region name:**
   <img src="https://github.com/Abida64/goodgrowth/assets/149109371/d3c671bb-6478-4da7-809d-9aab164eee30" width="700" />
6. **The script will display the current weather for any location on the property pages:**
   <img src="https://github.com/Abida64/goodgrowth/assets/149109371/352a0279-3fdf-402d-8069-fdc5933257c1" width="700" />


## How It Was Built
This script is designed to fetch the current temperature for a specific location and display the weather on the property's location. For the purposes of A/B testing, the function will run if the test parameter is present in the URL. Here's a simple overview:

1. Check URL Parameter: Before doing anything, the script checks the webpage's URL for a parameter named "test". This is used to differentiate between the control and test webpages (A/B testing).
2. Fetch Weather Data: The script retrieves weather information from the Open Weather Map. It specifically fetches the temperature for a location based on the city name.
4. Display Temperature: If the "test" parameter is found in the URL, the script fetches the weather data. Once the data is retrieved, it extracts the temperature and then adds this information to the region element of the test webpage.
5. User Interaction: The temperature is displayed in degrees celsius next to the relevant region on the webpage, enhancing the user's experience by providing real-time weather information.

In summary, this script dynamically updates a webpage with current temperature information, but only when a specific condition (presence of a test URL parameter) is met.
## A/B testing
Google Optimise is a great tool for A/B testing. It allows the insertion of code snippets to create many variations of webpages to test against each other. It allows manipulation of many elements and measures the goal of the impact - in this case, the number of bookings depending on the weather displaying or not.

By setting a query parameter in the URL it'll enable switching between the control and the test. In this case, the query parameter is "?test=1"
