import React from 'react';

const toQueryString = (obj) => {
  const parts = [];
  for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
          parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
      }
  }
  return parts.join('&');
}

class Weather extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      weather: {}
    }

    this.pollWeather = this.pollWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.pollWeather);
  }

  pollWeather(location) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    const params = {
      lat: location.coords.latitude,
      lon: location.coords.longitude
    };
    url += toQueryString(params);
    const apiKey = 'f816d7f39052e3a98b21952097a43076';
    // This is our API key; please use your own!
    url += `&APPID=${apiKey}`;

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      //ready state of DONE means this is complete
      if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
        const data = JSON.parse(xmlhttp.responseText);
        this.setState({weather: data});
      }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  convertToF(K) {
    return Math.floor((K - 273.15) * 9/5 + 32)
  }

  render() {
    const {weather} = this.state
    console.log(weather);
    if(Object.keys(weather).length === 0) return null;
    return(
      <div>
        <h1>
          {weather.name}
          {this.convertToF(weather.main.temp)}
        </h1>
      </div>
    )
  }
}

export default Weather;