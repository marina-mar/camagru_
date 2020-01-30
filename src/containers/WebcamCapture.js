import React, { Component } from "react";
import Webcam from "react-webcam";
import "../style/Pages.style.css";
import { UserContext } from "../context/userContext";
import StickerSelector from "./StickerSelector";

export default class WebcamCapture extends Component {
    setRef = webcam => {
        this.webcam = webcam;
        this.state = {
            imageData: null,
            imageName: "",
            saveImage: false
        }
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        this.setState({
            imageData: imageSrc
        })
    };

    printPhoto = () => {
        if (this.state.imageSrc === null)
            return ("no pictures yet....");
        else
        {
            <img
        }

    };

    render () {
        return (
            <div style={{
                marginLeft: "0"
            }}>
                <Webcam
                    audio={false}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    style={{
                        height: "48vh",
                        maxWidth: "58%",
                        border: "1vh #4C9D97 solid"
                    }}/>
                    <button onClick={this.capture}>Capture photo</button>
                    <img src={this.state.imageData} />
            </div>
        );
        }
}

Webcam.contextType = UserContext;