import React, { Component } from "react";
import Webcam from "react-webcam";
import "../style/Pages.style.css";
import {WebcamContext} from "../context/webcamContext";

export default class WebcamCapture extends Component {
    constructor(props) {
        super(props);
    }

    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        this.context.addPic(imageSrc);
    };

    render () {
        return (
            <div style={{
                        display: "flex",
                        flexDirection: "column"
                        }}>
                <Webcam
                    audio={false}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    minScreenshotHeight={this.context.canvasWidth}
                    minScreenshotWidth={this.context.canvasWidth}
                    style={{
                        width: this.context.canvasWidth,
                        height: this.context.canvasHeight,
                        Zindex: "1",
                        border: "1vw #4C9D97 solid"
                    }}/>
                <button onClick={this.capture}>Capture photo</button>
            </div>
        );
        }
}

WebcamCapture.contextType = WebcamContext;