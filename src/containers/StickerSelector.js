import React, { Component } from "react";

/* image resizer */
import Resizer from 'react-image-file-resizer';

import "../style/Pages.style.css";
import Sticker from "../components/Sticker";

export default class StickerSelector extends Component {
    constructor(props) {
        super(props);
        this.changeImgSize = this.changeImgSize.bind(this);
    }
    /* need to resize image because of the merging size */
    changeImgSize (img) {
        const imageObject = new Image();
        let newImage;

        /* sets the source image of the OBJECT image to the sticker */
        imageObject.src = img;
        console.log(img);
        Resizer.imageFileResizer(
            imageObject,
            0.12 * window.innerWidth,
            0.09 * window.innerHeight,
            'WEBP',
            100,
            0,
            img => {
                newImage = img;
            },
            'base64'
        );
        return img;
    }
    printImages () {
        return this.props.photoStickers.map( oneSticker => {
            return <Sticker id={oneSticker.id}
                            img={this.changeImgSize(oneSticker.img)}
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