var textInput= document.querySelector("#text-input")
var searchButton = document.querySelector("#search-button")
searchButton.addEventListener('click', searchCity)

function searchCity () {
    var cityName = textInput.value;

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
            var convertedTemp = (data.current.temp - 273.15) * 9/5 + 32;

            var tempDetails = document.querySelector('#temp-details');
            tempDetails.textContent = "Temp: " + convertedTemp + " °F";

            var uvIndex = document.querySelector('#uv-details');
            uvIndex.textContent= "uvindex: " + data.current.uvi ;
        })
    })
}