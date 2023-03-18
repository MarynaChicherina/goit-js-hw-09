
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');


startBtn.style.height = '45px';
startBtn.style.width = '100px';
stopBtn.style.height = '45px';
stopBtn.style.width = '100px';


//рандомна зміна кольору
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } 

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

//зміна кольору background
function changeBackground() {
    const bodyColor = getRandomHexColor();
    body.style.backgroundColor = bodyColor;
}

let intervalColorChange = undefined;

function onStartBtnClick() {
    intervalColorChange = setInterval(() => changeBackground(), 1000);
    stopBtn.removeAttribute('disabled');
    startBtn.setAttribute('disabled', true);
}

function onStopBtnClick() {
    clearInterval(intervalColorChange);
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', true);
}



