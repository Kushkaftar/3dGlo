window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    // Timer ...

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

            setInterval(updateClock, 1000);
        };

        updateClock();


    };

    const addNull = (str) => String(str).length > 1 ? str : `0${str}`;

    countTimer("14 july 2019");

    // menu ...

    const toggleMenu = () => {

        const btnMenu = document.querySelector(".menu"),
            menu = document.querySelector("menu"),
            btnClose = document.querySelector(".close-btn"),
            menuItems = menu.querySelectorAll("ul>li");

        const handlerMenu = () => menu.classList.toggle("active-menu");

        btnMenu.addEventListener("click", handlerMenu);

        btnClose.addEventListener("click", handlerMenu);

        menuItems.forEach((el) => el.addEventListener("click", handlerMenu));
    };

     toggleMenu();

     // popup ...

    const togglePopup = () => {

        const popup = document.querySelector(".popup"),
            btnPopup = document.querySelectorAll(".popup-btn"),
            popupClose = document.querySelector(".popup-close");

        const animate = () => {
            popup.style.position = "relative";
            // popup.style.left = "45%";
            popup.style.display = "block";
            let top = popup.scrollTop,
            scrollHeight = popup.scrollHeight;
            console.dir(popup);

            console.dir(document.documentElement.clientHeight);
            console.dir(document.documentElement.clientWidth);
            console.log(top);
            console.log(scrollHeight);
            let start = Date.now();

            let timer = setInterval(function() {
                let timePassed = Date.now() - start;

                popup.style.left = timePassed / 5 + 'px';

                if (timePassed > 2000) clearInterval(timer);

            }, 20);

        };

        btnPopup.forEach((el) => {
            el.addEventListener("click", animate);
        });

        popupClose.addEventListener("click", () => popup.style.display = "none");
    };

    togglePopup();
});