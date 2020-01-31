import React, { Component } from "react";
import "../style/Pages.style.css";
import {WebcamContext} from "../context/webcamContext";

export default class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        };
        /* create ref to connect the variable and the DOM element */
        this.mycanvas = React.createRef();
    }
    updateDimensions () {
        this.setState({
            width: window.innerWidth * 0.38,
            height: window.innerHeight * 0.45
        });
    }
    componentDidMount() {
        /* need to set the width and height to the canvas, canvas doesnt use vw and vh */
        this.updateDimensions();
        /* Every resize will run componentDidMount again! */
        window.addEventListener("resize", this.updateDimensions.bind(this));
        /*set context to canvas */
        this.ctx = this.mycanvas.current.getContext("2d");
        this.context.canvas = this.ctx;
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render () {
        console.log(`window width: ` + this.state.width);
        return (
            <canvas ref={ this.mycanvas }
                    width={this.state.width}
                    height={this.state.height}
                    style={{
                        Zindex: "2",
                        position: "absolute",
                        left: "16vw",
                        border: "1vw pink solid",
                    }}
            />
        );
    }
}

Canvas.contextType = WebcamContext;