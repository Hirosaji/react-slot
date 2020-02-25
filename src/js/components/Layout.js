import React from "react";
import Reel from "./Reel";
import {START, STOP} from "./Button";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Reel />
                <START />
                <STOP />
            </div>
        );
    }
}