var textInput= document.querySelector("#text-input")
var searchButton = document.querySelector("#search-button")
searchButton.addEventListener('click', () => {
    searchCity(textInput.value)
})

var searchedCities = [];

function searchCity (cityName) {
    
    // check if it already exists
    var alreadyExists  = searchedCities.some( function( v ) {
        return v.indexOf( cityName ) !== -1 ;
    });

    if(!alreadyExists) {
        // add the cityName to searchedCities array
        searchedCities.push(cityName)


        // add cityName into the city search history
        // <button class="w-100 btn btn-secondary mb-2">New York</button>
        var historyBtn = document.createElement('button');
        historyBtn.classList.add('btn', 'btn-secondary', 'mb-2');
        historyBtn.textContent = cityName;

        // add an event listener to the historybtn
        historyBtn.addEventListener('click', (event) => {
            searchCity(event.target.textContent)
        })

        // attach this newly created button into the city search history
        var cityHistory = document.querySelector('#city-history');
        cityHistory.append(historyBtn);
    }

    

    console.log(cityName)


    // var url_endpoint = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=aaf8adfff2227aaa7f0b71fe1498e7b1"

    var first_endpoint = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=85000a1b352882fd04e9a2a12a4c34e3"

    fetch(first_endpoint)
    .then(function(res){return res.json()})
    .then(function(data){
        var second_endpoint = "https://api.openweathermap.org/data/2.5/onecall?lat="+ data.coord.lat  + "&lon="+ data.coord.lon + "&appid=85000a1b352882fd04e9a2a12a4c34e3";

        fetch(second_endpoint)
        .then(function(res){return res.json()})
        .then(function(data){
            console.log(data)

            var currentDate = dayjs().format('MM/DD/YYYY');

            var cityDetails = document.querySelector('#city-details');
            cityDetails.textContent = cityName + " (" + currentDate + ")";

            // convert kelvin temp to fahrenheit
            var convertedTemp = Math.round(((data.current.temp - 273.15) * 9/5 + 32), 2);

            var tempDetails = document.querySelector('#temp-details');
            tempDetails.textContent = "Temp: " + convertedTemp + " °F";

            // wind
            var windDetails = document.querySelector('#wind-details');
            windDetails.textContent= "Wind: " + data.current.wind_speed ;

            // humidity
            var humidityDetails = document.querySelector('#humidity-details');
            humidityDetails.textContent= "Humidity: " + data.current.humidity ;

            var uvIndex = document.querySelector('#uv-details');
            uvIndex.textContent= "UV Index: " + data.current.uvi ;

            // Start editing the 5 day forecast elemts!

            // DAY 1
            var day1Date = document.querySelector("#day-1-date");
            day1Date.textContent = dayjs(data.daily[1].dt*1000).format('MM/DD/YY');
        
            var day1Icon = document.querySelector("#day-1-icon");
            day1Icon.src = "https://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + ".png"

            var day1Temp = document.querySelector("#day-1-temp");
            var convertedTempDay1 = Math.round(((data.daily[1].temp.day - 273.15) * 9/5 + 32), 2);
            day1Temp.textContent = "Temp: " + convertedTempDay1  + " °F";

            var day1Wind = document.querySelector("#day-1-wind");
            day1Wind.textContent = "Wind: " + data.daily[1].wind_speed;

            var day1Hum = document.querySelector("#day-1-hum");
            day1Hum.textContent = "Humidity: " + data.daily[1].humidity;

           

            // DAY 2
            var day2Date = document.querySelector("#day-2-date");
            day2Date.textContent = dayjs(data.daily[2].dt*1000).format('MM/DD/YY');

            var day2Icon = document.querySelector("#day-2-icon");
            day2Icon.src = "https://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + ".png"

            var day2Temp = document.querySelector("#day-1-temp");
            var convertedTempDay2 = Math.round(((data.daily[2].temp.day - 273.15) * 9/5 + 32), 2);
            day2Temp.textContent = "Temp: " + convertedTempDay2  + " °F";

            var day2Wind = document.querySelector("#day-2-wind");
            day2Wind.textContent = "Wind: " + data.daily[2].wind_speed;

            var day2Hum = document.querySelector("#day-2-hum");
            day2Hum.textContent = "Humidity: " + data.daily[2].humidity;






            // DAY 3
            var day2Date = document.querySelector("#day-2-date");
            day2Date.textContent = dayjs(data.daily[2].dt*1000).format('MM/DD/YY');

            var day2Icon = document.querySelector("#day-2-icon");
            day2Icon.src = "https://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + ".png"

            var day2Temp = document.querySelector("#day-1-temp");
            var convertedTempDay2 = Math.round(((data.daily[2].temp.day - 273.15) * 9/5 + 32), 2);
            day2Temp.textContent = "Temp: " + convertedTempDay2  + " °F";

            var day2Wind = document.querySelector("#day-2-wind");
            day2Wind.textContent = "Wind: " + data.daily[2].wind_speed;

            var day2Hum = document.querySelector("#day-2-hum");
            day2Hum.textContent = "Humidity: " + data.daily[2].humidity;


            // DAY 4
            var day2Date = document.querySelector("#day-2-date");
            day2Date.textContent = dayjs(data.daily[2].dt*1000).format('MM/DD/YY');

            var day2Icon = document.querySelector("#day-2-icon");
            day2Icon.src = "https://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + ".png"

            var day2Temp = document.querySelector("#day-1-temp");
            var convertedTempDay2 = Math.round(((data.daily[2].temp.day - 273.15) * 9/5 + 32), 2);
            day2Temp.textContent = "Temp: " + convertedTempDay2  + " °F";

            var day2Wind = document.querySelector("#day-2-wind");
            day2Wind.textContent = "Wind: " + data.daily[2].wind_speed;

            var day2Hum = document.querySelector("#day-2-hum");
            day2Hum.textContent = "Humidity: " + data.daily[2].humidity;


            // DAY 5
            var day2Date = document.querySelector("#day-2-date");
            day2Date.textContent = dayjs(data.daily[2].dt*1000).format('MM/DD/YY');

            var day2Icon = document.querySelector("#day-2-icon");
            day2Icon.src = "https://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + ".png"

            var day2Temp = document.querySelector("#day-1-temp");
            var convertedTempDay2 = Math.round(((data.daily[2].temp.day - 273.15) * 9/5 + 32), 2);
            day2Temp.textContent = "Temp: " + convertedTempDay2  + " °F";

            var day2Wind = document.querySelector("#day-2-wind");
            day2Wind.textContent = "Wind: " + data.daily[2].wind_speed;

            var day2Hum = document.querySelector("#day-2-hum");
            day2Hum.textContent = "Humidity: " + data.daily[2].humidity;

        })
    })
}