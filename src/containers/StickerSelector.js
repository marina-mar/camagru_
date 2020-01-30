import React, { Component } from "react";
import "../style/Pages.style.css";
import Sticker from "../components/Sticker";
import {UserContext} from "../context/userContext";

export default class StickerSelector extends Component {
    constructor(props) {
        super(props);
    }
    printImages () {
        return this.props.photoStickers.map( oneSticker => {
            return <Sticker key={oneSticker.id}
                            img={oneSticker.img}
                            title={oneSticker.title} />;
        })
    };
    render() {
        return (
            <div style={{
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
                height: "48vh",
                maxWidth: "20%",
                border: "1vh #4C9D97 solid",
                marginRight: "0"
            }}>
                { this.printImages() }
            </div>
        );
    }
}

StickerSelector.contextType = UserContext;