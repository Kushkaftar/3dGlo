const countTimer = (dedLine) => {

    let timerHours = document.getElementById("timer-hours"),
        timerMinutes = document.getElementById("timer-minutes"),
        timerSeconds = document.getElementById("timer-seconds");

    const getTimeRemaning = () => {
        let dateStop = new Date(dedLine).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds,
            minutes,
            hours;

        if (dateNow < dateStop) {
            seconds = addNull(Math.floor(timeRemaining % 60));
            minutes = addNull(Math.floor(timeRemaining /60 % 60));
            hours = addNull(Math.floor(timeRemaining / 60 / 60));
        } else {
            hours = "00";
            minutes = "00";
            seconds = "00";
        }

        return { hours, minutes, seconds, }
    };

    const updateClock = () => {
        let timer = getTimeRemaning();
        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;


    };
    const addNull = (str) => String(str).length > 1 ? str : `0${str}`;

    updateClock();
    setInterval(updateClock, 1000);


};

export default countTimer;