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

export default slider;