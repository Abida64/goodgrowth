Good Growth Tech Test - National Trust Weather

Brief:
The National Trust would like to have their properties’ information pages display the weather in
that property’s location. Their belief is that this additional information will increase the probability of users
visiting a property.

How To Use

Chrome browser would be ideal, however you can run this on any browser's console.

For Chrome Browser, paste into snippet, run it,

How It Was Built

Step One - Fetch the Data
Using Postman, test the given endpoint is displaying weather data. Thunderclient, is also an option. Essentially, I did this to see how the data is structured, and that the link is functioning. Initially I got an error message "lat is not defined". Turns out the problem was, "amp;" inside the query parameters - once I deleted this the data was populating. I noticed it is a json object, and the temperature was nested inside an array.

I wrote an async function to fetch the weather data from the URL - this essentially pulls the weather wherever I want it to. Initially, I logged the data into the console, just to check it is working. I noticed the weather data is very long (e.g. 10.8374743), so I used toFixed() function to round the data to 1 decimal place. I then added degrees C next to the weather.

Step Two - Inject Into the DOM
I first selected the element for the region, in this case it was London. I added a new element by using the createElement() function, specically a new paragraph which I stored inside a variable.

Step Three - Styling

A/B testing
Google Optimiser is a great tool for A/B testing. It's simple to use, the user can insert their code snippet and begin testing. The user can create many variations of web pages and test them against each other. The user can manipulate many elements and measure the goal of the impact - in this case, the number of bookings depending on weather displaying or not.

todo:
write how to use
