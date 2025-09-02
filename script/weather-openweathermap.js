function loadWeather(city, apiKey, success, error) {
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
  $.getJSON(url)
    .done(function(data) {
      // Build weather object similar to what your app expects
      var weather = {
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        description: data.weather[0].description,
        code: data.weather[0].icon, // OpenWeatherMap uses icon codes
        region: '', // Not directly available, can be omitted or mapped
        units: { temp: "C" }
      };
      success(weather);
    })
    .fail(function(jqXHR) {
      error(jqXHR.responseJSON ? jqXHR.responseJSON.message : "Error loading weather");
    });
}
