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
                target.value = evt.target.value.replace(/[^А-ЯЁа-яё.,;:?!'`"\-\s]/g, "");
                break;
            case "user_phone":
                evt.target.value = evt.target.value.replace(/[^+0-9]/gi, "");
                break;
        }
    }

    forms.forEach(elm => elm.addEventListener("input", evt => inputValid(evt)))


};

export default validation;