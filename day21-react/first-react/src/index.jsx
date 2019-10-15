import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './contact/contact.jsx';
import Frame from './frame/frame.jsx';
import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <Frame
        content = {<Contact 
          firstName="Homer" 
          lastName="Simpson"
          email="homer@springmail.com" 
        />}
      />
      

    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
