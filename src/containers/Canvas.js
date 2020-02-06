import React, { Component } from "react";
import "../style/Pages.style.css";
import { WebcamContext } from "../context/webcamContext";
import PrintedSticker from "./PrintedSticker";
export default class Canvas extends Component {
    constructor(props) {
        super(props);
    }

    placeStickers () {
            console.log(`total stickers: `+ this.context.totalImgsOnCanvas);
            if (this.context.totalImgsOnCanvas > 0)
            {
                return this.context.imgsOnCanvas.map( pic => {
                    return < PrintedSticker stickerObject={ pic } />;
                });
            }
            else {
                return <p> Add some stickers, baby! </p>
            }
    }
    render () {
        return (
            <div    className="myCanvas">
                { this.placeStickers() }
            </div>
        );
    }
}

Canvas.contextType = WebcamContext;