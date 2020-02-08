import React, { Component } from "react";

/* image resizer */
import Resizer from 'react-image-file-resizer';

import "../style/Pages.style.css";
import Sticker from "../components/Sticker";

export default class StickerSelector extends Component {
    constructor(props) {
        super(props);
     //   this.changeImgSize = this.changeImgSize.bind(this);
    }
    /* need to resize image because of the merging size */
   // changeImgSize (img) {
   //      /* sets the source image of the OBJECT image to the sticker */
   //      Resizer.imageFileResizer(
   //          img,
   //          0.12 * window.innerWidth,
   //          0.09 * window.innerHeight,
   //          'WEBP',
   //          100,
   //          0,
   //          uri => {
   //              console.log("this is the uri" + uri)
   //          },
   //          'base64'
   //      );
   //
   //      return img;
   //  }
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