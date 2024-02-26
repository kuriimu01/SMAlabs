let daysTime = document.getElementById("days");
let hoursTime = document.getElementById("hours");
let minutesTime = document.getElementById("minutes");
let secondsTime = document.getElementById("seconds");

daysTime.innerHTML = "0 days";
hoursTime.innerHTML = "0 hours";
minutesTime.innerHTML = "0 minutes";
secondsTime.innerHTML = "0 seconds";

const updateTimer = (endTime) => {
  const currentTime = new Date().getTime();
  const timeDifference = endTime - currentTime;

  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
};

const endTime = new Date('February 28, 2024 00:00:00').getTime();

setInterval(() => {
  const { days, hours, minutes, seconds } = updateTimer(endTime);
  daysTime.innerHTML = `${days} days`;
  hoursTime.innerHTML = ` ${hours} hours `;
  minutesTime.innerHTML = ` ${minutes} minutes`;
  secondsTime.innerHTML = ` ${seconds} seconds`;
}, 1000);
