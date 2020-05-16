window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    // Timer ...

    // const countTimer = (dedLine) => {
    //
    //     let timerHours = document.getElementById("timer-hours"),
    //         timerMinutes = document.getElementById("timer-minutes"),
    //         timerSeconds = document.getElementById("timer-seconds");
    //
    //     const getTimeRemaning = () => {
    //         let dateStop = new Date(dedLine).getTime(),
    //         dateNow = new Date().getTime(),
    //         timeRemaining = (dateStop - dateNow) / 1000,
    //             seconds,
    //             minutes,
    //             hours;
    //
    //         if (dateNow < dateStop) {
    //             seconds = addNull(Math.floor(timeRemaining % 60));
    //             minutes = addNull(Math.floor(timeRemaining /60 % 60));
    //             hours = addNull(Math.floor(timeRemaining / 60 / 60));
    //         } else {
    //             hours = "00";
    //             minutes = "00";
    //             seconds = "00";
    //         }
    //
    //         return { hours, minutes, seconds, }
    //     };
    //
    //     const updateClock = () => {
    //         let timer = getTimeRemaning();
    //         timerHours.textContent = timer.hours;
    //         timerMinutes.textContent = timer.minutes;
    //         timerSeconds.textContent = timer.seconds;
    //
    //         setInterval(updateClock, 1000);
    //     };
    //
    //     updateClock();
    //
    //
    // };

    const addNull = (str) => String(str).length > 1 ? str : `0${str}`;

    //countTimer("14 july 2019");

    // menu ...

    const toggleMenu = () => {

        const btnMenu = document.querySelector(".menu"),
            menu = document.querySelector("menu");

        const handlerMenu = () => menu.classList.toggle("active-menu");

        btnMenu.addEventListener("click", handlerMenu);

        menu.addEventListener("click",(evt) => {
            let target = evt.target;

            if (target.tagName === "A") {
                handlerMenu();
            }
        })
    };

     toggleMenu();

     // popup ...

    const togglePopup = () => {

        const popup = document.querySelector(".popup"),
            btnPopup = document.querySelectorAll(".popup-btn"),
            popupContent = document.querySelector(".popup-content");



        btnPopup.forEach((el) => {
            el.addEventListener("click", () => {
                popup.style.display = "block"
            });
        });

        popup.addEventListener("click", (evt) => {
            let target = evt.target;

            if (target.classList.contains("popup-close")) {
                popup.style.display = "none";
            } else  {
                target = target.closest(".popup-content");
                if (!target) {
                    popup.style.display = "none";
                }
            }

        });
    };

    togglePopup();

    // tabs ...

    const tabs = () => {
        const tabHeader = document.querySelector(".service-header"),
            tab = tabHeader.querySelectorAll(".service-header-tab"),
            tabContent = document.querySelectorAll(".service-tab");
        console.log(tabHeader);

        const  toggleTabContent = (index) => {
            console.log("toggleTabContent");
          for (let i = 0; i < tabContent.length; i++) {
              if (index === i) {
                  tab[i].classList.add("active");
                  tabContent[i].classList.remove("d-none");
              } else {
                  tab[i].classList.remove("active");
                  tabContent[i].classList.add("d-none");
              }
          }
        };

        tabHeader.addEventListener("click", (evt) => {
            let target = evt.target;
            target = target.closest(".service-header-tab");
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                })
            }

        })
    };

    tabs();
});