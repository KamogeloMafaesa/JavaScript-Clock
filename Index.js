setInterval(setClock, 1000);

const Hourhand = document.querySelector('[data-hour-hand]');
const Minutehand = document.querySelector('[data-minute-hand]');
const Secondhand = document.querySelector('[data-second-hand]');


function setClock(){
    const currentDate = new Date()
    const secondsRatio = (currentDate.getSeconds())/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) /60
    const hourssRatio = (minutesRatio + currentDate.getHours()) / 12


    setRotation(Secondhand,secondsRatio);
    setRotation(Minutehand,minutesRatio);
    setRotation(Hourhand,hoursRatio);

}


function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()