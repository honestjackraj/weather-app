const API_KEY = `b6d588c186ae9cc085207e4b59050f93`;

const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  // console.log(city);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const setInnerText = (id, text) => {
  console.log(id, text)
  document.getElementById(id).innerText = text;
};

const displayTemperature = (temperature) => {
  console.log(temperature);
  setInnerText("city", temperature.name);
  setInnerText("temp", temperature.main.temp);
  setInnerText("weather", temperature.weather[0].main);


  //weather icon setting
  const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById('image-icon');
  imgIcon.setAttribute('src', url);
};

// date
var date = new Date(); 
var dd = date.getDate(); 
var mm = date.getMonth() + 1; 
var yyyy = date.getFullYear(); 
var newDate = dd + "-" + mm + "-" +yyyy; 
var p1 = document.getElementById("currentdate1"); 
var p2 = document.getElementById("currentdate2"); 
var p3 = document.getElementById("currentdate3"); 
p1.innerHTML = newDate; 
p2.innerHTML = newDate; 
p3.innerHTML = newDate; 

// time

var time = new Date(); 
var newtime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
console.log(newtime);
document.getElementById("currenttime").innerHTML = newtime;


// week


const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = days[d.getDay()];
document.getElementById("currentweekday").innerHTML = day;



