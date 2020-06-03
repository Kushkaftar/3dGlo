const togglePopup = () => {

    const popup = document.querySelector(".popup"),
        btnPopup = document.querySelectorAll(".popup-btn"),
        popupContent = document.querySelector(".popup-content");



    btnPopup.forEach((el) => {
        el.addEventListener("click", () => {
            popup.style.display = "block";
            if (document.documentElement.clientWidth >= 767) {
                popupContent.style.position = "relative";
                let start = Date.now();

                let timer = setInterval(function() {
                    let timePassed = Date.now() - start;

                    popupContent.style.top = timePassed / 5 + 'px';

                    if (timePassed > 1000) clearInterval(timer);

                }, 20);
            }
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

export default togglePopup;