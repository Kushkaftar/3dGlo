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
                popup.style.display = "block";
                popupContent.style.position = "relative";
                let start = Date.now();

                let timer = setInterval(function() {
                    let timePassed = Date.now() - start;

                    popupContent.style.top = timePassed / 5 + 'px';

                    if (timePassed > 1000) clearInterval(timer);

                }, 20);

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

        const  toggleTabContent = (index) => {
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

    // slider ...



    const slider = () => {

        const slide = document.querySelectorAll(".portfolio-item");

        const addDot = () => {
            const ul = document.querySelector(".portfolio-dots");
            slide.forEach((e,i) => {

                let lis = "";
                lis = i === slide.length- 1 ? `<li class=\"dot dot-active\"></li>` : `<li class=\"dot\"></li>`;
                console.log(i, lis);

                ul.insertAdjacentHTML("afterbegin", lis);

            });
            console.log(ul);
        };
        addDot();

        const dot = document.querySelectorAll(".dot"),
            sliderParent = document.querySelector(".portfolio-content");

        let currentSlide = 0,
            internal;

        console.log(dot);

        const prevSlide = (elem, index, strClass) => elem[index].classList.toggle(strClass);

        const autoPlaySlide = () => {

            prevSlide(slide , currentSlide,"portfolio-item-active");
            prevSlide(dot, currentSlide, "dot-active");

            currentSlide++;

            if (currentSlide >= slide.length) currentSlide = 0;

            prevSlide(slide , currentSlide,"portfolio-item-active");
            prevSlide(dot, currentSlide, "dot-active");
        };

        const startSlide = (second = 3) => internal = setInterval(autoPlaySlide, second * 1000);

        const stopSlide = () => clearInterval(internal);

        sliderParent.addEventListener("click", (evt) => {
            evt.preventDefault();
            let  target = evt.target;
            if (!target.matches(".dot, .portfolio-btn")) return;

            prevSlide(slide , currentSlide,"portfolio-item-active");
            prevSlide(dot, currentSlide, "dot-active");

            switch (target.getAttribute("class")) {
                case "portfolio-btn next":
                    currentSlide++;
                    break;
                case "portfolio-btn prev":
                    currentSlide--;
                    break;
                case "dot":
                    dot.forEach((elem, index) => {
                        if (elem === target) currentSlide =index;
                    });
                    break;
            }

            currentSlide = currentSlide >= slide.length ? currentSlide = 0 : currentSlide;
            currentSlide = currentSlide < 0 ? currentSlide = slide.length - 1: currentSlide;

            prevSlide(slide , currentSlide,"portfolio-item-active");
            prevSlide(dot, currentSlide, "dot-active");

        });

        sliderParent.addEventListener("mouseover", (evt) => {
            if (evt.target.matches(".dot, .portfolio-btn")) stopSlide();
        });

        sliderParent.addEventListener("mouseout", evt => {
            if (evt.target.matches(".dot, .portfolio-btn")) startSlide();
        });

        startSlide(1.5);

    };

    slider();

});