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

        const thenReq = () => {
            statusMassage.textContent = successMassage;
            setTimeout(() => statusMassage.remove(), 5000);
        };

        const errReq = (error) => {
            statusMassage.textContent = errorMassage;
            console.error(error);
            setTimeout(() => statusMassage.remove(), 5000);
        };
        postData(body)
            .then((response) => {
                if (response.status !== 200) throw new Error("status not 200");
                thenReq()
            })
            .catch((error) => errReq(error));

        let formClear = target.querySelectorAll("input");
        formClear.forEach(elm => elm.value = "");


    };

    const postData = (body) => {

        return fetch("server.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        });
    };

    forms.forEach(item => item.addEventListener("submit", evt => sendToServer(evt)))


};

export default sendForm;