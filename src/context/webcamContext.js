import React, { Component } from 'react';

/*setup the context provider*/
const WebcamContext = React.createContext();

// Context Provider Component
//  will store, in its state, the data we need
class WebcamProvider extends Component {
    state = {
            //addPic: this.addPic,
            totalPics: 0,
            allPics: [],
        };

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