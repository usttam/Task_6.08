const trafficLightEl = document.querySelector('#trafficLight-green');
const trafficLightE2 = document.querySelector('#trafficLight-yellow');
const trafficLightE3 = document.querySelector('#trafficLight-red');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightE2.style.background = ('black'); 
    trafficLightE3.style.background = ('black'); 
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightE2.removeEventListener('click', makeGreen);
    trafficLightE3.removeEventListener('click', makeGreen);
    trafficLightE2.addEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLightE3.addEventListener('click', makeYellow);
}
function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightEl.style.background = ('black'); 
    trafficLightE3.style.background = ('black');   
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightE2.removeEventListener('click', makeYellow);
    trafficLightE3.removeEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeRed);
    trafficLightE3.addEventListener('click', makeRed);
}
function makeRed() {
    trafficLightE2.style.background = ('black');
    trafficLightEl.style.background = ('black'); 
    trafficLightE3.style.background = ('red');   
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightE2.removeEventListener('click', makeRed);
    trafficLightE3.removeEventListener('click', makeRed);
    trafficLightE2.addEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeGreen);
    trafficLightE3.addEventListener('click', makeGreen);
}
trafficLightEl.addEventListener('click', makeGreen);
trafficLightE2.addEventListener('click', makeGreen);
trafficLightE3.addEventListener('click', makeGreen);