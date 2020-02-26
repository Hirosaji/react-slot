import React from "react";

export default function Reel (props) {
    const reelData = (props.unit === "%") ?
        [
            ["±", "+", "-", "±", "+", "-"],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        ] :
        [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        ];

    let reelList = [];
    reelData.forEach((thisReelData, i) => {
        let DOMList = thisReelData.map((e, j) => {
            return <div className="number" key={j}>{e}</div>;
        });
        reelList.push(
            <div className="reel" key={i}>
                <div className="group numbers" key={i}>
                    {DOMList}
                </div>
            </div>
        );
    })

    return (
        <div className="reels">
            {reelList}
        </div>
    );
}