class Forecast {
  constructor() {
    this.key = "g6hR9aA2mTk5BCWP6qdq4JzUwnMyGAtb";
    this.weatherURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }
  async updateCity(city) {
    const cityDets = await this.getCity(city);
    const weather = await this.getWeather(cityDets.Key);

    return {
      cityDets,
      weather,
    };
  }
  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;

    const response = await fetch(this.cityURI + query);
    const data = await response.json();

    return data[0];
  }
  async getWeather(locationKey) {
    const query = `${locationKey}?apikey=${this.key}`;

    const response = await fetch(this.weatherURI + query);
    const data = await response.json();

    return data[0];
  }
}

// const key = "g6hR9aA2mTk5BCWP6qdq4JzUwnMyGAtb";

// // get weather information
// const getWeather = async (locationKey) => {
//   const base = "http://dataservice.accuweather.com/currentconditions/v1/";
//   const query = `${locationKey}?apikey=${key}`;

//   const response = await fetch(base + query);
//   const data = await response.json();

//   return data[0];
// };

// // get city information
// const getCity = async (city) => {
//   const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
//   const query = `?apikey=${key}&q=${city}`;

//   const response = await fetch(base + query);
//   const data = await response.json();

//   return data[0];
// };

// getCity("seoul")
//   .then((data) => getWeather(data.Key))
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
