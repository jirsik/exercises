import React from 'react';
import './index.scss';

export default class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: "0"
        };

    }
    
    handleLikeBtn = () => {
        this.setState({likes: parseInt(this.state.likes, 10) + 1});
        this.props.onClick();
    }

    render() {
        return(
            <div className="answer">
                <p>{this.props.answer}</p>
                <p>{this.props.user}</p>
                <button onClick={this.handleLikeBtn}>Like</button>
                <p>like: {this.state.likes}</p>
            </div>
        );
    }
}