import React, { Component } from "react";
import "../style/Pages.style.css";
import { WebcamContext } from "../context/webcamContext";

export default class ShowJustTakenPics extends Component {
    printImages () {
        if (this.context.totalPics > 0)
        {
            return this.context.allPics.map( pic => {
                return  <img src = {pic.imageData}
                             alt="new"
                             style={{ width: "15vw" }}/>
            })
        }
        else {
            return <p> no pics yet</p>
        }
    };
    render() {
        console.log(`total pics: `+ this.context.totalPics);
        return (
            <div style={{
                overflowX: "scroll",
                display: "flex",
                flexDirection: "row",
                height: "15vh",
                width: "70vw",
                border: "1vw #4C9D97 solid",
                marginLeft: "3vw"
            }}>
                { this.printImages() }
            </div>
        );
    }
}

ShowJustTakenPics.contextType = WebcamContext;