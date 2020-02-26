import React from "react";

let timeoutEvent;
let renew = true;
const emSize = 38;

export function START(props) {
    let timing = "ease-in";

    function startReel () {
        const targetReels = document.getElementsByClassName("numbers");

        [].forEach.call(targetReels, targetReel => {
            // caculate targetNum
            let targetNumbers = targetReel.getElementsByClassName("number");
            let targetNum = targetNumbers.length / 2;

            // fire init start event
            let addStyles = [
                "transform: translate(0px, -" + targetNum * emSize + "px);",
                "transition-duration: 0.5s;",
                "transition-timing-function:" + timing + ";"
            ];
            targetReel.setAttribute("style", addStyles.join(""));

            // set transition end event ①
            targetReel.addEventListener('webkitTransitionEnd', function (event) {
                timing = "linear";
                addStyles = [
                    "transform: translate(0px, 0px);",
                    "transition-timing-function:" + timing + ";"
                ];
                if (renew) targetReel.setAttribute("style", addStyles.join(""));
            }, false);
        });

        // set transition end event ②
        timeoutEvent = setTimeout(function () {
            startReel();
        }, 20);
    }

    return (
        <button onClick={startReel}>START</button>
    )
}

export function STOP(props) {
    function stopReel() {
        // remove start event
        clearTimeout(timeoutEvent);
        renew = false;

        // set common var & func
        const targetReels = document.getElementsByClassName("numbers");
        const rangeFunc = (start, stop, step = emSize) =>
            Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step);

        let resultValue = "";

        [].forEach.call(targetReels, targetReel => {
            // caculate targetNum
            let targetNumbers = targetReel.getElementsByClassName("number");
            let targetNum = targetNumbers.length / 2;

            // set 1st & 2nd stop event var
            let range = rangeFunc(emSize * 0, emSize * (targetNum - 1));
            let transitionY1st = range[Math.floor(Math.random() * range.length)]
            let transitionY2nd = transitionY1st + emSize * targetNum;

            // fire 1st stop event
            let addStyles = [
                "transform: translate(0px, -" + transitionY1st + "px);",
            ];
            targetReel.setAttribute("style", addStyles.join(""));

            // fire 2nd stop event
            addStyles = [
                "transform: translate(0px, -" + transitionY2nd + "px);",
                "transition-duration: 2.5s;",
                "transition-timing-function:ease-out;"
            ];
            targetReel.setAttribute("style", addStyles.join(""));

            // get result
            let thisValue = transitionY2nd / emSize - targetNum;
            thisValue = (targetNum === 3) ? targetNumbers[thisValue].textContent : thisValue;
            resultValue = resultValue + (thisValue).toString()
        });

        console.log(resultValue);
    }

    return (
        <button onClick={stopReel}>STOP</button>
    )
}