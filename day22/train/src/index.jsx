import React from 'react';
import ReactDOM from 'react-dom';

import Train from './train/train.jsx';
import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <Train
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
