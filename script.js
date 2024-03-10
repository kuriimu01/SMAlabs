// Task 1
let date = document.getElementById("date");
date.innerHTML = getCurrentDateTime(); 

function getCurrentDateTime() {
  const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пʼятниця', 'субота'];
  const now = new Date();
  const dayOfWeek = days[now.getDay()];
  const time = now.toLocaleTimeString([], {hour12: false});
  return `Сьогодні: ${dayOfWeek} <br/> Поточний час: ${time}`;
}

// Task 2
let lastDay = document.getElementById("lastDay");
document.getElementById("form1").addEventListener("submit", function(event) {
  event.preventDefault();
  let year = document.getElementById("inputYear").value;
  let month = document.getElementById("inputMonth").value-1;
  lastDay.innerHTML = `<br> ${getLastDayOfMonth(year, month)}`;
});

function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

// Task 3
let secondsPassed = document.getElementById("secondsPassed");
secondsPassed.innerHTML = getSecondsOfDay();

function getSecondsOfDay() {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  const passed = Math.floor((now - startOfDay) / 1000);
  const left = Math.floor((endOfDay - now) / 1000);
  return `Пройшло секунд: ${passed} <br/> Лишилося секунд: ${left}`;

}

// Task 4
let getCentury = document.getElementById("getCentury");

document.getElementById("form2").addEventListener("submit", function(event) {
  event.preventDefault();
  let year = document.getElementById("inputYear2").value;
  console.log(year);
  getCentury.innerHTML = `<br> ${getCenturyAndMillennium(year)}`;
});

function getCenturyAndMillennium(year) {
  const halfCentury = year % 100 <= 50 ? 1 : 2;
  const century = Math.ceil(year / 100);
  const millennium = Math.ceil(year / 1000);
  return `${halfCentury}, ${century}, ${millennium}`;
}

// Task 5


document.getElementById("form3").addEventListener("submit", function(event) {
  event.preventDefault();
  let date1 = document.getElementById("inputDate1").value;
  let date2 = document.getElementById("inputDate2").value;
  fullYears.innerHTML = `<br> ${calculateEventDuration(date1, date2)}`;
});

function calculateEventDuration(startDateString, endDateString) {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const yearDifference = endDate.getFullYear() - startDate.getFullYear();
  const isNegative = yearDifference < 0;
  return isNegative ? Math.abs(yearDifference) - 1 : yearDifference;
}

// Task 6
let getDeviation = document.getElementById("getDeviation");

document.getElementById("form4").addEventListener("submit", function(event) {
  event.preventDefault();
  let sunrise = document.getElementById("sunrise").value;
  let sunset = document.getElementById("sunset").value;
  getDeviation.innerHTML = `<br> ${calculateTimeDeviation(sunrise, sunset)}`;
});

function calculateTimeDeviation(sunrise, sunset) {
  const [sunriseHour, sunriseMinute] = sunrise.split(':').map(Number);
  const [sunsetHour, sunsetMinute] = sunset.split(':').map(Number);

  // Переведемо години та хвилини в хвилини
  const sunriseTotalMinutes = sunriseHour * 60 + sunriseMinute;
  const sunsetTotalMinutes = sunsetHour * 60 + sunsetMinute;

  // Знайдемо середнє значення між сходом та заходом
  const averageMinutes = (sunriseTotalMinutes + sunsetTotalMinutes) / 2;

  // Різниця між середнім значенням та 12:00
  const deviationMinutes = Math.abs(averageMinutes - 12 * 60);

  // Розрахунок годин\хвилин відхилення
  const deviationHours = Math.floor(deviationMinutes / 60);
  const deviationRemainingMinutes = deviationMinutes % 60;

  return [deviationHours, -deviationRemainingMinutes];
}

