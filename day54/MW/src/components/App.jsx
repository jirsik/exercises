import React, { useState } from "react";

const formStyle = { display: "flex", flexDirection: "column", height: '300px', width:  '300px', alignItems: 'space-between'}
const divStyle = { display: "flex", width:  '300px', justifyContent: 'space-between' }
const buttonStyle = { border: '1px solid blue', margin: '5px'}

const URL = 'https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod'
const App = props => {
  
  // Declare the proper variables for state using useState
  const [inputValues, setInputValues] = useState({email: '', password: ''});
  const [errorMessage, setErrorMessage] = useState('');
  // Make the inputs 'controlled input' using the function below
  const handleTextValueChange = e => {
    setInputValues({
      ...inputValues,
      [e.target.id]: e.target.value
    })

  };

  const handleSubmitClick = (e) => {
    e.preventDefault()
    
    fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "email": inputValues.email,
                "password": inputValues.password,
            })
        })
        .then(e => e.json())
        .then(json_data => {
          console.log(json_data)
          setErrorMessage(json_data.error.message)
        })
        .catch((e) => {
          console.log('error:' + e);
        })
    // When the submit button is clicked, submit a POST request to the above URL
    // It will always return an error
    // Find the error message in the returned body and add the error message to the bottom of the form
  }

  return (
    <form style={formStyle}>
      <div style={divStyle}>
        <p>Email</p>
        <input
          type="email"
          id="email"
          value={inputValues.email}
          onChange={handleTextValueChange}
        />
      </div>
      <div style={divStyle}>
        <p>Password</p>
        <input
          type="password"
          id="password"
          value={inputValues.password}
          onChange={handleTextValueChange}
        />
      </div>
      <button style={buttonStyle} onClick={handleSubmitClick}>Submit</button>
    {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default App;