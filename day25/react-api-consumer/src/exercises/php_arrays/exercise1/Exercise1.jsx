import React from 'react';
import './index.scss';

export default class Exercise1 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="basic-ul">
                {
                    this.props.data.map(item => (
                        <li className="movie_li">
                            <h4>Movie:</h4>
                            { item }
                        </li>
                    ))
                }
            </ul>
        );
    }
}