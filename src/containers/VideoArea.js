import React, { Component } from "react";

import "../style/Pages.style.css";
import { WebcamContext } from "../context/webcamContext";
import StickerSelector from "./StickerSelector";
import WebcamCapture from "./WebcamCapture";
import ShowJustTakenPics from "./showJustTakenPics";
import FakeCanvas from "./fakeCanvas"
import RealCanvas from "./RealCanvas";

export default class VideoArea extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
                <div className="videoSystem">
                    <div style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        height: "49vh",
                        width: "72vw",
                        marginLeft: "3vw",
                        marginTop: "3%",
                    }}>
                        <StickerSelector photoStickers={this.props.photoStickers}/>
                        <FakeCanvas />
                        <RealCanvas />
                        <WebcamCapture />
                        <StickerSelector photoStickers={this.props.photoStickers}/>
                </div>
                    <ShowJustTakenPics />
                </div>
            );
    }
}
VideoArea.contextType = WebcamContext;