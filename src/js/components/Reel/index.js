import React from "react";

export default function Reel (props) {
    const reelData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const DOMList = reelData.map((e, i) => {
        return <div className="number" key={i}>{e}</div>;
    });

    return (
        <div className="reel">
            <div className="group" id="roulette">
                {DOMList}
            </div>
        </div>
    );
}