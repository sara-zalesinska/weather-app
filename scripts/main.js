import '../styles/style.scss';

const input = document.querySelector('input');
const button = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');

const URL = 'http://api.weatherapi.com/v1';
const API_KEY = '0fff874edc6f41f78c8170213233001';

const API_FULL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

async function currentWeather() {
  const city = input.value;
  const getWeather = `${API_FULL}&q=${city}`;

  try {
    const res = await axios.get(getWeather);
    setWeather(res.data);
  } catch (error) {
    warning.textContent = 'Something went wrong...';
  }
}

const setWeather = (data) => {
  weather.textContent = data.current.condition.text;
  temperature.textContent = `${data.current.temp_c} °C `;
  humidity.textContent = `${data.current.humidity} %`;
  cityName.textContent = data.location.name;
  photo.setAttribute('src', data.current.condition.icon);
  warning.textContent = '';
};

const enterCheck = (e) => {
  if (e.key === 'Enter') {
    currentWeather();
  }
};

button.addEventListener('click', currentWeather);
input.addEventListener('keyup', enterCheck);
