import React, { Component} from "react";
import "../style/smallComponents.css";

class DeleteOption extends Component {
    constructor(props) {
        super(props);
    this.state = {
        isClicked: false
    };
    this.click = this.click.bind(this);
    }
    click () {
        if (this.state.isClicked)
        {
            return (
                <div style={{fontSize: "2vh",
                            marginBottom: "5%"}}>
                    insert your password to delete account
                    <form>
                        <input className="accountOptionInput"
                               style={{height: "3vh"}}
                               type="password" required/>
                       <br />
                        <button type="submit" onClick={this.isClicked}>delete</button>
                    </form>
                </div>
            )
        }
        else
            return (
                <p>
                    delete account ?
                </p>
            )
    }
    render () {
        return (
            <div className= "deleteOption"
                 onClick={ (e) => {
                     e.target.style.height= (e.target.style.height === "12vh");
                     e.target.style.marginBottom= (e.target.style.marginBottom === "1vh");
                     this.setState({isClicked: !this.isClicked})
                 }}
            >
                { this.click() }
            </div>
        );
    }
}

export default DeleteOption;