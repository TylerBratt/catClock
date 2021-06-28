let wakeuptime = 7;
const noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let partytime;
const evening = 18;

const showCurrentTime = function() {
  const clock = document.getElementById('clock');
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  let meridian = 'AM';

  //set Hours

  if (hours >= noon) {
    merdian = 'PM';
  }
  if (hours > noon) {
    hours = hours - 12;
  }

  // set Minutes

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

   // set Seconds

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  //string the displayed time
  const clockTime = `${hours}:${minutes}:${seconds} ${meridian}!`;

  clock.innerText = clockTime;
};

//Getting the clock to increment on its own and change messages and pictures

const updateClock = function() {
  const time = new Date().getHours();
  let messageText;
  let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
  const timeEventJS = document.getElementById('timeEvent');
  const lolcatImageJS = document.getElementById('lolcatImage');

  if (time === partytime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = `Let's Party!`;
  } else if(time === wakeuptime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = `Wake Up!`;
  } else if (time === lunchtime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = `Lunch Time!!`
  } else if (time === naptime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = `Sleepy Times!`;
  } else if (time < noon) {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = `Good Morning :)`;
  } else if (time >= evening) {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = `Good Evening!`;
  } else {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = `Good Afternoon!`;
  }

  timeEventJS.innerText = messageText;
  lolcatImageJS.src = image;

  showCurrentTime();
};
updateClock();

// getting the clock to increment once a second
const oneSecond = 1000;
setInterval(updateClock, oneSecond);

// getting the party Time Buttton to work

const partyButton = document.getElementById('partyTimeButton');
const partyEvent = function() {
  if (partytime < 0) {
    partytime = new Date().getHours();
    partyTimeButton.innerText = `Party Over :(`;
    partyTimeButton.style.backgroundColor = "#0A8DAB";
  } else {
    partytime = -1;
    partyTimeButton.innerText = `Party Time!`;
    partyTimeButton.style.backgroundColor = `#222`;
  }
};

partyButton.addEventListener('click', partyEvent);
partyEvent();

//activate wakeup selector

const wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
const wakeUpEvent = function() {
  wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

//activate lunch selector

const lunchTimeSelector = document.getElementById('lunchTimeSelector');
const lunchEvent = function() {
  lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener('change', lunchEvent)

//activate nap selector

const napTimeSelector = document.getElementById('napTimeSelector');
const napEvent = function() {
  naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener('change', napEvent)