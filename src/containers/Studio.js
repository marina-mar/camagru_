import React, { Component } from "react";
import Webcam from "react-webcam";
import "../style/Pages.style.css";

export default class Studio extends Component {
	render () {
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