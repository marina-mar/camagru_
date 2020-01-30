import React, { Component } from "react";
import Webcam from "react-webcam";
import "../style/Pages.style.css";
import VideoArea from "./VideoArea";
import {UserContext} from "../context/userContext";

export default class Studio extends Component {
	render () {
		if (this.context.isLoggedIn === true)
		{
			return (
				<div className="studioPage">
					<VideoArea />
				</div>
			)
		}
		return (
			<div className="studioPage">
				<div className="videoSystem">
					{/*<StickersBar />
					<AddText />*/}
					<Webcam />
					{/*<Canvas />
					<PreviousPictures />*/}
				</div>
			</div>
		);
	}
}
Studio.contextType = UserContext;