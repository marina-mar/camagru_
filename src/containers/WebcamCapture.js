import React, { Component } from "react";
import Webcam from "react-webcam";
import "../style/Pages.style.css";
import {WebcamContext} from "../context/webcamContext";
import {UserContext} from "../context/userContext";

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
        console.log(this.context);
        return (
            <div style={{
                marginLeft: "0",
                height: "48vh",
                maxWidth: "58%",
            }}>
                <canvas ref="canvas" width="100%" height="100%" />
                <Webcam
                    audio={false}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    style={{
                        height: "48vh",
                        maxWidth: "80%",
                        border: "1vh #4C9D97 solid"
                    }}/>
                    <button onClick={this.capture}>Capture photo</button>
            </div>
        );
        }
}

WebcamCapture.contextType = UserContext;