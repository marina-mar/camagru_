import React, { Component } from "react";
import "../style/Pages.style.css";
import {WebcamContext} from "../context/webcamContext";

export default class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            mouseX: 0,
            mouseY: 0,
            startX: 0,
            startY: 0
        };
        /* create ref to connect the variable and the DOM element */
        this.mycanvas = React.createRef();
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
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
    /* mouse handles to move the stickers */
    handleMouseDown(e) {
        //stop default browser answer:
        e.preventDefault();
        e.stopPropagation();
        //get start position of gram
        this.setState({
            startX: e.clientX - this.state.width,
            startY: e.clientY - (this.state.height / 2),
        });
        console.log("startX: " + this.state.startX + "\nstartY: " + this.state.startY + "\nimg Xpos: ");
     //test position against shapes
        this.context.imgsOnCanvas.filter((image) => {
            const endImg = image.xPos + (window.innerWidth * 0.12);
            console.log("image xPos :" + image.xPos + "\nimage end pos: " + endImg);
            //check if pos + width is where the mouse is
            return (((image.xPos <= this.state.startX) || (this.state.startX >= endImg) &&
                    ((image.yPos <= this.state.startY) || (this.state.startY >= (image.yPos + (window.innerHeight * 0.09)))));
        })

    }
    handleMouseUp() {
        console.log("on mouse up");
    }
    handleMouseMove() {
        console.log("on mouse move");
    }
    handleMouseOut() {
        console.log("on mouse out");
    }
    render () {
        console.log(`window width: ` + this.state.width);
        return (
            <canvas ref={ this.mycanvas }
                    width={this.state.width}
                    height={this.state.height}
                    className="myCanvas"
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                    onMouseMove={this.handleMouseMove}
                    onMouseOut={this.handleMouseOut}
            />
        );
    }
}

Canvas.contextType = WebcamContext;