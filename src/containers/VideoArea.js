import React, { Component } from "react";

import "../style/Pages.style.css";
import { UserContext } from "../context/userContext";
import StickerSelector from "./StickerSelector";
import WebcamCapture from "./WebcamCapture";

export default class VideoArea extends Component {
    render () {
        const WebcanCapture = () => {
            const webcamRef = React.useRef(null);

            const capture = React.useCallback(
                () => {
                    const imageSrc = webcamRef.current.getScreenshot();
                },
                [webcamRef]
            );
        }
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
                        <StickerSelector />
                        <WebcamCapture />
                        {/*<Canvas />
					<PreviousPictures />*/}
                </div>
                </div>
            );
    }
}
VideoArea.contextType = UserContext;