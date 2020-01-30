import React, { Component } from "react";
import Webcam from "react-webcam";
import "../style/Pages.style.css";
import VideoArea from "./VideoArea";
import {WebcamProvider} from "../context/webcamContext";
import {UserContext} from "../context/userContext";

export default class Studio extends Component {
	render () {
		if (this.context.isLoggedIn === true)
		{
			return (
				<div className="studioPage">
						<VideoArea photoStickers={this.context.photoStickers}/>
				</div>
			)
		}
		return (
			<div className="studioPage">
			</div>
		);
	}
}
Studio.contextType = UserContext;