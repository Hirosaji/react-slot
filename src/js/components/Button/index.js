import React from "react";

let timeoutEvent;
let renew = true;

export function START(props) {
    let timing = "ease-in";

    function startReel () {
        const targetReel = document.getElementById("roulette");
        
        // fire init start event
        let addStyles = [
            "transform: translate(0px, -450px);",
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
        const targetReel = document.getElementById("roulette");
        const emSize = 38;
        const rangeFunc = (start, stop, step = emSize) =>
            Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step);

        // set 1st stop event var
        const range1st = rangeFunc(emSize * 0, emSize * 9);
        const transitionY1st = range1st[Math.floor(Math.random() * range1st.length)]

        // fire 1st stop event
        let addStyles = [
            "transform: translate(0px, -" + transitionY1st + "px);",
        ];
        targetReel.setAttribute("style", addStyles.join(""));

        // set 2nd stop event var
        const range2nd = rangeFunc(emSize * 9, emSize * 19);
        const transitionY2nd = range2nd[Math.floor(Math.random() * range2nd.length)]

        // fire 2nd stop event
        addStyles = [
            "transform: translate(0px, -" + transitionY2nd + "px);",
            "transition-duration: 2.5s;",
            "transition-timing-function:ease-out;"
        ];
        targetReel.setAttribute("style", addStyles.join(""));

        console.log(transitionY2nd / emSize - 10)
    }

    return (
        <button onClick={stopReel}>STOP</button>
    )
}