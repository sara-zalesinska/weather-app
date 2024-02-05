import '../styles/style.scss'

const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");

const URL = 'http://api.weatherapi.com/v1'
const API_KEY = '0fff874edc6f41f78c8170213233001'

const API_FULL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`







