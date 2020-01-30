import React, { Component } from "react";
import "../style/Pages.style.css";
import { UserContext } from "../context/userContext";

export default class ShowJustTakenPics extends Component {
    printImages () {
        console.log(`total pics: `+ this.context.totalPics);
        if (this.context.totalPics > 0)
        {
            return this.context.allPics.map( pic => {
                return  <img src = {pic.imageData} alt="new" style={{
                                                                        width: "15vw"
                                                                    }}
                />
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
                maxWidth: "100%",
                border: "1vh #4C9D97 solid",
                marginRight: "5%",
                marginLeft: "5%"
            }}>
                { this.printImages() }
            </div>
        );
    }
}

ShowJustTakenPics.contextType = UserContext;