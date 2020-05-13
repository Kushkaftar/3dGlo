const body = document.querySelector("body"),
    p = document.createElement("p");



const happyNewYear = () => {
    const now = Date.now(),
        year = new Date().getFullYear(),
        dateStop = new Date(`01 01 ${year + 1}`).getTime();
        return Math.floor((dateStop - now) / 1000 / 60 / 60 / 24);

};

const day = () => {
    const now = new Date(),
        date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds()),
        options = {
            era: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        },
        ru = date.toLocaleString("ru", options).split(',')[0].trim(),
        en = date.toLocaleString("en-US", options).split(',')[3].trim();
        let partDay = "";
    if (now.getHours() >= 5 && now.getHours() <= 11) {
        partDay = "Доброе утро";
    } else if (now.getHours() > 11 && now.getHours() <= 16) {
        partDay = "Добрый день";
    } else if (now.getHours() >= 17 && now.getHours() <= 22) {
        partDay = "Добрый вечер";
    } else {
        partDay = "Доброй ночи";
    }


        return {ru, en, partDay}
};
day();

console.log(happyNewYear());

p.innerHTML = `
    ${day().partDay}<br>
    Сегодня: ${day().ru}<br>
    Текущее время:${day().en}<br>
    До нового года осталось ${happyNewYear()} дней
`;

body.prepend(p);
