import React, { Component } from "react";
import "../style/Pages.style.css";
import test from "../images/test.jpg";
import { WebcamContext } from "../context/webcamContext";

export default class Sticker extends Component {
    constructor(props) {
        super(props);
    };

    addSticker = () => {
        const image = new Image();
        image.src = this.props.img;
        this.context.canvas.drawImage(image, 0, 0);
    };

    render() {
        return (
            <div>
                <img src={ this.props.img }
                     alt={ this.props.title }
                     style={{
                         maxHeight: "9vh",
                         width: "12vw",
                     }}
                     onClick={ this.addSticker }
                />
                <hr />
            </div>
        );
    }
}

Sticker.contextType = WebcamContext;