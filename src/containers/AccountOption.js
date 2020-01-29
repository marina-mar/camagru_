import React, { Component} from "react";
import "../style/smallComponents.css";

class AccountOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickOptionEffect: "accountOption",
            optionIsClicked: false,
        };
        this.isClicked = this.isClicked.bind(this);
    }

    isClicked = () => {
        this.setState({
            clickOptionEffect: "accountOption",
            optionIsClicked: !this.state.optionIsClicked
        });
    };

    render () {
            if (this.state.optionIsClicked) {
                return (
                    <div className={this.state.clickOptionEffect}>
                        <div style={{fontSize: "2vh",
                                    paddingTop: "1%",
                                    lineHeight: "2vh"}}
                             onClick={this.isClicked}
                        > {this.props.item} </div>
                        <div style={{fontSize: "3vh",
                                    marginBottom: 0,
                                    lineHeight: "3vh"}}
                             onClick={this.isClicked}> {this.props.userData} </div>
                        <form>
                            <input className="accountOptionInput"
                                   type="text"
                                   name={this.props.item} required/>
                            <button className="optionsButton" type="submit" onClick={this.isClicked}>ok!</button>
                        </form>
                    </div>
                );
            } else {
                return (
                    <div className={this.state.clickOptionEffect}
                         onClick={() => {
                             this.setState({
                                 clickOptionEffect: "accountOptionClicked",
                                 optionIsClicked: !this.state.optionIsClicked
                             });
                         }}
                    >
                        {this.props.item}
                    </div>
                );
    }
        }
}

export default AccountOption;