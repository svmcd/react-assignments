import React from "react";

class Activity extends React.Component {

    render(){
        return (
            <li key={this.props.activity.id} className="itrell__activity">
                <h3 onClick={this.props.onLabelClicked} className="itrell__label">{this.props.activity.label || "n/a"}</h3>
                <p className="itrell__desc">{this.props.activity.desc || "n/a"}</p>
            </li>
        );
    }
}

export default Activity;