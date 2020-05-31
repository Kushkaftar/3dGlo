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

export default calc;