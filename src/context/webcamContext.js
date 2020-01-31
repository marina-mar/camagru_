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
    setImgToPrint = (newImage) => {
        this.setState({
            sticker: {
                imgToPrint: {
                    xPos: 0,
                    yPos: 0,
                    zPos: 0,
                    imgUrl: newImage.img,
                    id: newImage.key,
                    title: newImage.title
                }
            }
        });
    };

    state = {
            totalPics: 0,
            allPics: [],
            addPic: this.addPic,
            canvas: null,
            sticker: {
                imgToPrint: null,
                imgsOnCanvas: [],
            },
            setImgToPrint: this.setImgToPrint
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