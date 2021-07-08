


class CountdownTimer{
 constructor({onTick, targetDate, selector}) {
this.onTick = onTick
this.targetDate = targetDate
this.selector = selector
  }
  
changeTime() {
  
setInterval(() => {
const curentTime = new Date();
const time = this.targetDate - curentTime
const timerComponents = getTimerComponents(time)
this.onTick(timerComponents)
 },1000) 
}

  
}


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate : new Date('Jul 03, 2021'),
  onTick: updateTimer
});

timer.changeTime()





const refs =  {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]')
}


function pad(value) {
  return String(value).padStart(2, "0")
}

function getTimerComponents(time) {
const days =  pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours =  pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad( Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs =  pad(Math.floor((time % (1000 * 60)) / 1000));    
    
return {days, hours, mins, secs}
};

function updateTimer({ days, hours, mins, secs }) {
  refs.days.textContent = `${ days }`
  refs.hours.textContent = `${ hours }`
  refs.mins.textContent = `${mins}`
  refs.secs.textContent = `${secs}`  
}
