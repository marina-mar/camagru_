import React, { Component } from "react";
import "../style/Pages.style.css";
import Sticker from "../components/Sticker";

export default class StickerSelector extends Component {
    constructor(props) {
        super(props);
    }
    printImages () {
        return this.props.photoStickers.map( oneSticker => {
            return <Sticker id={oneSticker.id}
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
                width: "14vw",
                border: "1vw #4C9D97 solid",
                marginRight: "0"
            }}>
                { this.printImages() }
            </div>
        );
    }
}