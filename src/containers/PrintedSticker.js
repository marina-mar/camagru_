import React, { Component } from "react";
import "../style/Pages.style.css";
import { WebcamContext } from "../context/webcamContext";

class PrintedSticker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            mouseX: 0,
            mouseY: 0,
            startX: 0,
            startY: 0
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

/* mouse handles to move the stickers */
    handleMouseDown(e) {
        //stop default browser answer:
        e.preventDefault();
        e.stopPropagation();
        //get mouse start position
        this.setState({
            startX: e.clientX,
            startY: e.clientY,
            clicked: true
        });
        console.log("startX: " + this.state.startX + "\nstartY: " + this.state.startY + "\nimg Xpos: ");
    }
    handleMouseUp() {
        this.setState({clicked: false});
    }
    handleMouseMove(e) {
        console.log("on mouse move");
        //stop default browser answer:
        e.preventDefault();
        e.stopPropagation();
        //get mouse movement IF clicked is on
        if (this.state.clicked === true)
        {
            const x = e.clientX;
            const y = e.clientY;
            //checks side that mouse is moving and moves in the WebcamContext
            //right moves +1 * how much moved
            if (this.state.mouseX !== 0 && this.state.mouseX < x)
                this.context.moveStickerX(this.props.stickerObject.zPos, (x - this.state.mouseX));
            //left moves -1 * how much moved
            else if (this.state.mouseX !== 0 && this.state.mouseX > x)
                this.context.moveStickerX(this.props.stickerObject.zPos, -1 * (this.state.mouseX - x));
            console.log("\nthis is mouseY: " + this.state.mouseY + " this is clientY: " + e.clientY);
            //up moves +1 * how much moved
            if (this.state.mouseY !== 0 && this.state.mouseY > y)
                this.context.moveStickerY(this.props.stickerObject.zPos, (this.state.mouseY - y));
            //down moves -1 * how much moved
            else if (this.state.mouseY !== 0 && this.state.mouseY < y)
                this.context.moveStickerY(this.props.stickerObject.zPos, -1 * (y - this.state.mouseY));
            this.setState({
                mouseX: e.clientX,
                mouseY: e.clientY
            });
        }
        console.log("mouseX: " + this.state.mouseX + "\nmouseY: " + this.state.mouseY);
    }
    handleMouseOut() {
        this.setState({clicked: false})
    }

    render () {
        return (
            <img src = {this.props.stickerObject.imgUrl}
                 alt="new"
                 style={{
                     position: "absolute",
                     bottom: this.props.stickerObject.yPos,
                     left: this.props.stickerObject.xPos,
                     maxHeight: "9vh",
                     width: "12vw",
                 }}
                 onMouseDown={this.handleMouseDown}
                 onMouseUp={this.handleMouseUp}
                 onMouseMove={this.handleMouseMove}
                 onMouseOut={this.handleMouseOut}
            />
        );
    }
}

PrintedSticker.contextType = WebcamContext;
export default PrintedSticker;