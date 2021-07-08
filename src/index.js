/* Добавил немного разметки , 
хотел провить будет ли работать c 2мя таймерами 
 */

class CountdownTimer{
 constructor({targetDate, selector}) {

this.targetDate = targetDate
this.selector = selector
  }

 pad(value) {
  return String(value).padStart(2, "0")
}
 
#getTimerComponents() {
  
let curentTime = new Date();
let time = this.targetDate - curentTime
    
const days =  this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours =  this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins =  this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs =  this.pad(Math.floor((time % (1000 * 60)) / 1000));    
return {days, hours, mins, secs}
};


 getMarkUp() {
  
  let components = this.#getTimerComponents()
  const curentTimer = document.querySelector(`${this.selector}`)
  curentTimer.querySelector(' [data-value="days"]').textContent = components.days;
  curentTimer.querySelector(' [data-value="hours"]').textContent = components.hours;
  curentTimer.querySelector(' [data-value="mins"]').textContent = components.mins;
  curentTimer.querySelector(' [data-value="secs"]').textContent = components.secs;
}


changeTime() {
setInterval(() => {
  this.getMarkUp()
 },1000) 
}
 
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate : new Date('Jul 07, 2021'),

});

timer.getMarkUp()
timer.changeTime()

const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate : new Date('Jul 07, 2022, 15:48'),
 
});

timer2.getMarkUp()
timer2.changeTime()















