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

export default commandPhoto;