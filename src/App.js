import axios from 'axios';
import './App.css';
import CitySearch from './components/CitySearch/CitySearch';
import Main from './components/Main/Main';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCity, addWeather } from './store/weather-reducer';


function App() {

  const dispatch = useDispatch();

  let weather = useSelector((state) => state.weather);

  async function fetchSity(e) {
  e.preventDefault()
  const cityName = e.target.elements.city.value
  const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`)
  dispatch(addCity(response.data.results[0].name, response.data.results[0].latitude, response.data.results[0].longitude))
  }


  async function fetchWeatcher() {
  const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${weather.latitude}&longitude=${weather.longitude}&hourly=temperature_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min&current_weather=true&forecast_days=1&timezone=auto`)
  dispatch(addWeather(response.data))
  }

  useEffect( ()=> {
    fetchWeatcher() 
}, [weather.city])

  return (
    <div className="App">
      <div className='City'>
        <CitySearch fetchSity={fetchSity} />
      </div>
      <div className='Main'>
        <Main weather={weather}/>
      </div>
    </div>
  );
}

export default App;
