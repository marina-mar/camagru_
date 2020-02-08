import React, { Component } from "react";
import "../style/Pages.style.css";

export default class Sticker extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <img src={ this.props.img }
                     alt={ this.props.title }
                     style={{
                         maxHeight: "9vh",
                         minWidth: "13vw",
                         maxWidth: "13vw",
                     }}
                />
                <hr />
            </div>
        );
    }
}