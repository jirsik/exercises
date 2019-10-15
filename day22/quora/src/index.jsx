import React from 'react';
import ReactDOM from 'react-dom';

import Question from './question/question.jsx';
import './index.scss';
import './index.html';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [
        { headline: "1",
          question: "What?",
          answers:[
            {user: 'baked_turtle', text: 'Your question is stupid.' },
            {user: 'naked_eye', text: 'Chill out, man!' },
            {user: 'faked_icecream', text: 'Holy Moly!' },
          ]
        },
        { headline: "2",
          question: "Why?",
          answers:[
            {user: 'baked_turtle', text: 'Your question is stupid.' },
            {user: 'naked_eye', text: 'Chill out, man!' },
            {user: 'faked_icecream', text: 'Holy Moly!' },
            {user: 'naked_eye', text: 'Chill out, man!' },
          ]
        },
        { headline: "3",
          question: "When?",
          answers:[
            {user: 'baked_turtle', text: 'Your question is stupid.' },
            {user: 'naked_eye', text: 'Chill out, man!' },
          ]
        },
      ],
    };
  }
  render() {
    return (
      <>
      {this.state.questions.map(question => (
        <Question 
        headline = {question.headline}
        question = {question.question}
        answers = {question.answers}
      />
      ))}
      
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
