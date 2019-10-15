import React from 'react';
import './index.scss';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="game-wrap">
                <h3> {this.props.name}</h3>
                <div className="game">
                    <img src={this.props.image_url} alt={this.props.name}/>
                    <div>
                        <p>{this.props.description}</p>
                        <p>Rating: {this.props.rating}</p>
                        <p>Released at: {this.props.released_at}</p>
                    </div>

                    
                    
                </div>
            </div>
        );
    }
}