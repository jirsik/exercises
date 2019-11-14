import React from 'react';

export default class Piece extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
            
        // };
    }
    handleDirectoryChange = (event) => {
        let sender = event.target;
        sender.value = this.props.player;
        this.props.onClick(this.props.x, this.props.y, sender.value);
    }

    render() {
        return (
            <div className="card" onClick={this.handleDirectoryChange}>{this.props.value}</div>
        )
    }

}