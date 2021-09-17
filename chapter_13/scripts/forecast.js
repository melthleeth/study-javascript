const key = "g6hR9aA2mTk5BCWP6qdq4JzUwnMyGAtb";

// get weather information
const getWeather = async (locationKey) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${locationKey}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

// get city information
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

// getCity("seoul")
//   .then((data) => getWeather(data.Key))
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
