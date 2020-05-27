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


        };

        updateClock();
        setInterval(updateClock, 1000);


    };

    const addNull = (str) => String(str).length > 1 ? str : `0${str}`;

    countTimer("14 june 2020");

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

                let lis = i === slide.length - 1 ? `<li class=\"dot dot-active\"></li>` : `<li class=\"dot\"></li>`;

                ul.insertAdjacentHTML("afterbegin", lis);

            });
        };
        addDot();

        const dot = document.querySelectorAll(".dot"),
            sliderParent = document.querySelector(".portfolio-content");

        let currentSlide = 0,
            internal;

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

        sliderParent.addEventListener("click", evt => {
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

        sliderParent.addEventListener("mouseover", evt => {
            if (evt.target.matches(".dot, .portfolio-btn")) stopSlide();
        });

        sliderParent.addEventListener("mouseout", evt => {
            if (evt.target.matches(".dot, .portfolio-btn")) startSlide();
        });

        startSlide(1.5);

    };

    slider();

    // commandPhoto ...

    const commandPhoto = () => {
        const command = document.getElementById("command");

        const changePhoto = (event) => {
            if (event.target.matches(".command__photo")) {
                let interim = event.target.src;
                event.target.src = event.target.dataset.img;
                event.target.dataset.img = interim;

            }
        };

        command.addEventListener("mouseover", evt => changePhoto(evt));

        command.addEventListener("mouseout", evt => changePhoto(evt))
    };

    commandPhoto();

    // calc ...

    const calc = (price = 100) => {

        const calcBlock = document.querySelector(".calc-block"),
        selector = document.querySelector(".calc-type"),
        inputSquare = document.querySelector(".calc-square"),
        inputCount = document.querySelector(".calc-count"),
        inputDay = document.querySelector(".calc-day"),
        totalValue = document.getElementById("total");


        const  countSum = () => {
            let  total = 0,
            countValue = 1,
            dayValue = 1;
            const typeValue = selector.options[selector.selectedIndex].value,
            squareValue = +inputSquare.value;

            if (inputCount.value > 1) {
                countValue += (inputCount.value -1) / 10;
            }

            if (inputDay.value && inputDay.value < 5) {
                dayValue *= 2;
            } else if (inputDay.value && inputDay.value < 10) {
                dayValue *= 1.5;
            }

            Math.round10 = function(value, exp) {
                return decimalAdjust('round', value, exp);
            }
            function decimalAdjust(type, value, exp) {
                if (typeof exp === 'undefined' || +exp === 0) {
                    return Math[type](value);
                }
                value = +value;
                exp = +exp;
                if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
                    return NaN;
                }
                value = value.toString().split('e');
                value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
                value = value.toString().split('e');
                return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
            }

            if (typeValue && squareValue) {
                total = price * typeValue * Math.round10(countValue * squareValue, -1) * dayValue;
            }


            totalValue.textContent = String(total);
        };


        calcBlock.addEventListener("change", evt => {
            let target = evt.target;

            if (target.matches("input") || target.matches("select")) countSum();

        })


    };

    calc(100);

    // calcValidation ...

    const validation = () => {

        const calcBlock = document.querySelector(".calc-block");

        calcBlock.addEventListener("input", evt => {

            if (evt.target.matches("input")) {
                evt.target.value = evt.target.value.replace(/\D/g, "");
            }
        })
        const forms = document.querySelectorAll("form");

        const inputValid = (evt) => {
            let target = evt.target;

            switch (target.getAttribute("name")) {
                case "user_name":
                    target.value = evt.target.value.replace(/[^А-ЯЁа-яё\s]/g, "");
                    break;
                case "user_message":
                    target.value = evt.target.value.replace(/[^А-ЯЁа-яё\s]/g, "");
                    break;
                case "user_phone":
                    evt.target.value = evt.target.value.replace(/[^+0-9]/gi, "");
                    break;
            }
        }

        forms.forEach(elm => elm.addEventListener("input", evt => inputValid(evt)))


    };

    validation();

    // send form

    const  sendForm = () => {
        const errorMassage = "что-то пошло не так...",
            loadMassage = "load...",
            successMassage = "Thanks!";

        const statusMassage = document.createElement("div");
        statusMassage.style.cssText = `font-size: 2rem;
                                        color: #fff`;

        const forms = document.querySelectorAll("form");

        const sendToServer = (evt) => {
            evt.preventDefault();

            let target = evt.target;
            target.appendChild(statusMassage);

            const formData = new FormData(target);
            statusMassage.textContent = loadMassage;
            let body = {};

            formData.forEach((val, key) => body[key] = val);

            postData(body, () => {
                statusMassage.textContent = successMassage;
                setTimeout(() => statusMassage.remove(), 5000);
            }, (error) => {
                statusMassage.textContent = errorMassage;
                console.error(error);
                setTimeout(() => statusMassage.remove(), 5000);
            });

            let formClear = target.querySelectorAll("input");
            formClear.forEach(elm => elm.value = "");


        }

        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
            request.addEventListener("readystatechange", () => {

                if (request.readyState !== 4) return;
                if (request.status === 200) {
                    outputData();
                } else {
                    errorData(request.status);
                }
            });

            request.open("post", "./server.php");
            request.setRequestHeader("Content-Type", "application/json");

            request.send(JSON.stringify(body));
        }

        forms.forEach(item => item.addEventListener("submit", evt => sendToServer(evt)))


    };

    sendForm();

});