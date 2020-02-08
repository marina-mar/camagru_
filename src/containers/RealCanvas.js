import React, { Component } from "react";
import "../style/Pages.style.css";
import { WebcamContext } from "../context/webcamContext";
import WebcamCapture from "./WebcamCapture";

//#The realCanvas
//this canvas most important feature is the ability to merge the gif stickers with the picture

export default class RealCanvas extends Component {
    constructor(props) {
        super(props);
        /* create ref to connect the variable and the DOM element */
        this.mycanvas = React.createRef();
    }

    componentDidMount() {
        /* need to set the width and height to the canvas, canvas doesnt use vw and vh */
        this.context.updateCanvasDimensions();
        /* Every resize will run componentDidMount again! */
        window.addEventListener("resize", this.context.updateCanvasDimensions.bind(this));
        /*set context to canvas */
        this.ctx = this.mycanvas.current.getContext("2d");
        this.context.setRealCanvas(this.ctx);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
    render () {
        return (
            <canvas ref={ this.mycanvas }
                    style={{
                        width: this.context.canvasWidth,
                        height: this.context.canvasHeight,
                        backgroundColor: "transparent",
                        Zindex: "0",
                        position: "absolute",
                        left: "16vw",
                        border: "1vw blue solid",
                    }}
            />
        );
    }
}

RealCanvas.contextType = WebcamContext;