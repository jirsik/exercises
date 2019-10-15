import React from 'react';
import './index.scss';

export default class Week extends React.Component {
    render() {
        return(
            <div className="week-forecast">
               {this.props.content}
            </div>
        );
    }
}