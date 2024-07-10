const time = document.querySelector('#time-date .time');

const date = document.querySelector("#time-date .date");

let h = new Date().getHours();
let min = new Date().getMinutes();

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const month = new Date().getMonth();

const day = new Date().getDay();

const dt = new Date().getDate();

h = h < 10 ? '0' + h: h;
min = min < 10 ? '0' + min: min;

time.textContent = `${h}:${min}`

date.textContent = `${days[day]}, ${months[month]} ${dt}`