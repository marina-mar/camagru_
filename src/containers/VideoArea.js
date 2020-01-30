import React, { Component } from "react";

import "../style/Pages.style.css";
import { WebcamContext } from "../context/webcamContext";
import StickerSelector from "./StickerSelector";
import WebcamCapture from "./WebcamCapture";
import ShowJustTakenPics from "./showJustTakenPics";

export default class VideoArea extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
                <div className="videoSystem">
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        minWidth: "75vw",
                        maxWidth: "75vw",
                        marginRight: "5%",
                        marginLeft: "5%",
                        marginTop: "3%",
                    }}>
                        <StickerSelector photoStickers={this.props.photoStickers}/>
                        <WebcamCapture />
                        {/*<Canvas />
					<PreviousPictures />*/}
                </div>
                    <ShowJustTakenPics />
                </div>
            );
    }
}
VideoArea.contextType = WebcamContext;