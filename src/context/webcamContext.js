import React, { Component } from 'react';

/* image merger */
import mergeImages from "merge-images";

/* image resizer */

/*setup the context provider*/
const WebcamContext = React.createContext();

// Context Provider Component
//  will store, in its state, the data we need
class WebcamProvider extends Component {
    /* webcamPics manipulation*/

    organizeArray (newPic) {
        let array = [];

        let myImage = new Image();
        myImage.src = newPic;
        array.push({src: 'data:image/gif+xml;base64,' + btoa(myImage), x: 0, y: 0});
        let newArray = (this.state.imgsOnCanvas.map(img => {
                let resizeImage = require('resize-image');
                /* my canvas (x, y) are inverted in the y and the x needs a little fix also for the merging:*/
                const x = img.xPos * 5;
                let y;
                if (img.yPos === 0)
                    y = window.innerHeight * 1.5;
                else if (img.yPos === window.innerHeight * 0.36)
                    y = 0;
                else
                    y = 4 * img.yPos;
                let image = new Image();
                image.width = 200;
                image.height = 300;
                image.src = img.imgUrl;
                console.log(image);
                return ({ src: 'data:image/gif+xml;base64,' + btoa(image), x: x, y: y})})
        );
        return array.concat(newArray);
    }

    addPic = (newPic) => {
        this.setState({ mergingImage: newPic });
        /*merge image with stickers */
        if (this.state.totalImgsOnCanvas > 0)
        {
            let stuffToMerge = this.organizeArray(newPic);
            mergeImages(stuffToMerge)
                .then(b64 => this.setState({mergingImage: b64}));
        }
        this.setState({
            allPics: [...this.state.allPics,
                {
                    imageData: this.state.mergingImage,
                    index: this.totalPics
                }],
            totalPics: this.state.totalPics + 1
        });
    };
/* add sticker to canvas line */
    addStickerToCanvas = (newSticker) => {
        this.setState({
                imgsOnCanvas:[...this.state.imgsOnCanvas,
                            {
                                xPos: 0,
                                yPos: 0,
                                zPos: this.state.totalImgsOnCanvas,
                                imgUrl: newSticker.img,
                                id: newSticker.key,
                                title: newSticker.title
                            }
                ],
                totalImgsOnCanvas: this.state.totalImgsOnCanvas + 1
        });
    };
/*move sticker in canvas */
    moveStickerX = (id, side) => {
        //copy the array:
        const newImgsOnCanvas = this.state.imgsOnCanvas.slice();
        const oldPos = newImgsOnCanvas[id].xPos;
        //if move to SIDE right => +1, if move to SIDE left => -1
        newImgsOnCanvas[id].xPos = oldPos + side;
        this.setState({
            imgsOnCanvas: newImgsOnCanvas
        });
    };
    moveStickerY = (id, side) => {
        //copy the array:
        const newImgsOnCanvas = this.state.imgsOnCanvas.slice();
        const oldPos = newImgsOnCanvas[id].yPos;
        //if move to SIDE up => +1, if move to SIDE down => -1
        newImgsOnCanvas[id].yPos = oldPos + side;
        this.setState({
            imgsOnCanvas: newImgsOnCanvas
        });
    }

    state = {
            totalPics: 0,
            allPics: [],
            addPic: this.addPic,
            canvas: null,

        /* sticker on Canvas related: */
            imgsOnCanvas: [],
            totalImgsOnCanvas: 0,
            addStickerToCanvas: this.addStickerToCanvas,
            moveStickerX: this.moveStickerX,
            moveStickerY: this.moveStickerY,
            mergingImage: ''
        };

    render () {
        return (
            <WebcamContext.Provider value={this.state}>
                {this.props.children}
            </WebcamContext.Provider>
        );
    }
}

const webcamConsumer = WebcamContext.Consumer;
export { WebcamProvider, webcamConsumer, WebcamContext };