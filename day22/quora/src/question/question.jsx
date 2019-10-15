import React from 'react';
import './index.scss';
import Answer from '../answer/answer.jsx';

export default class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allLikes: 0,
    };
  }

  coutLikes = () => {
    this.setState({ allLikes: parseInt(this.state.allLikes, 10) + 1});
  }
  
  render() {
    return (
      <div className="question">
        <h1>{this.props.headline}</h1>
        <p>{this.props.question}</p>
        <p>Total likes: {this.state.allLikes}</p>
        {
          this.props.answers.map(answer => (
            <Answer
              key= {answer.user}
              onClick= {this.coutLikes}
              answer= {answer.text}
              user= {answer.user}
              likes= "0"
            />
          ))
        }
      </div>
    );
  }
}
