import React, { Component } from 'react';

/*setup the context provider*/
const WebcamContext = React.createContext();

// Context Provider Component
//  will store, in its state, the data we need
class WebcamProvider extends Component {
    /* webcamPics manipulation*/
    addPic = (newPic) => {
        this.setState({
            allPics: [...this.state.allPics,
                {
                    imageData: newPic,
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

    state = {
            totalPics: 0,
            allPics: [],
            addPic: this.addPic,
            canvas: null,

        /* sticker on Canvas related: */
            imgsOnCanvas: [],
            totalImgsOnCanvas: 0,
            addStickerToCanvas: this.addStickerToCanvas
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