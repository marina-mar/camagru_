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

    height = window.innerHeight * 1.9;
    width = window.innerWidth * 1.4;

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
                    minScreenshotHeight= {this.height}
                    minScreenshotWidth= {this.width}
                    style={{
                        Zindex: "1",
                        height: "45vh",
                        width: "38vw",
                        border: "1vw #4C9D97 solid"
                    }}/>
                <button onClick={this.capture}>Capture photo</button>
            </div>
        );
        }
}

WebcamCapture.contextType = WebcamContext;