import React from 'react';
import './index.scss';

export default class Headline extends React.Component {
  render() {
    return (
      <h1>{this.props.headline}</h1>
    );
  }
}
