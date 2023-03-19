import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector('input#datetime-picker');
const btn = document.querySelector('button[data-start]');
const seconds = document.querySelector('span[data-seconds]');
const minutes = document.querySelector('span[data-minutes]');
const hours = document.querySelector('span[data-hours]');
const days = document.querySelector('span[data-days]');
input.style.width = '350px';
input.style.height = '25px';
input.style.margin = '0 15px 0 60px';
btn.style.height = '25px';
btn.style.width = '100px';

btn.disabled = true;
let selectedDate = 0;
let timerId = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    onSelectValidDate(selectedDates[0]);
  }
};

flatpickr(input, options);
// вибір дати
function onSelectValidDate(selectedDates) {
   selectedDate = selectedDates.getTime();
   if (selectedDates < Date.now()) {
    Notiflix.Notify.warning('Please choose a date in the future');
   } else {
    btn.disabled = false;
   }
  
}
// відлік часу - слухач на кнопку Старт
btn.addEventListener('click', onBtnClick);

function onBtnClick() {
   timerId = setInterval(startTimer, 1000);
   btn.disabled = true;
   input.disabled = true;
  }

  function startTimer() {
    const deltaTime = selectedDate - Date.now();
    const formatDate = convertMs(deltaTime);
    renderDate(formatDate);
    if (days.textContent === '00' && hours.textContent === '00' &&
       minutes.textContent === '00' && seconds.textContent === '00'){
      clearInterval(timerId);
      Notiflix.Notify.success('TIME IS OVER!');
      input.disabled = false;
    }
   }  

function renderDate(formatDate) {
  seconds.textContent = addLeadingZero(formatDate.seconds);
  minutes.textContent = addLeadingZero(formatDate.minutes);
  hours.textContent = addLeadingZero(formatDate.hours);
  days.textContent = addLeadingZero(formatDate.days);
}

//Функція convertMs() повертає об'єкт з розрахованим часом, що залишився до кінцевої дати.
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
// функцію addLeadingZero(value), яка використовує метод padStart() і перед рендерингом інтефрейсу форматує значення.
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};
 





