const Time = document.querySelector("#js-clock");

function getTime(){
    const curTime = new Date();
    console.log(curTime.getTime());

    const hour = curTime.getHours();
    const minute = curTime.getMinutes();
    const second = curTime.getSeconds();

    console.log(hour);
    console.log(minute);
    Time.innerHTML = 
    `${hour < 10? `0${hour}` : `${hour}`} : ${minute < 10? `0${minute}` : `${minute}`} : ${second < 10? `0${second}` : `${second}`}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();