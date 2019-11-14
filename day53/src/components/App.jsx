import React, { useState, useEffect } from "react";
import UserPanel from './User-Panel.jsx';
import UserList from './User-List.jsx';


const App = props => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);

  const url = 'https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/';

  useEffect(()=>{
    fetch(url)
        .then(response => response.json())
        .then(data => {
          setData(() => data)
          setLoaded(() => true)              
        });
    
  }, []);

  const setSelectedUser = (index) => {
    setUser(()=> data[index]);
    setSelectedUserIndex(index);
  }

  let content = (<div style={{ fontSize: "6rem" }}>Loading...</div>);
  if (loaded) {
      content = (
        <>
          <UserList
            users={data}
            selectedUserIndex={selectedUserIndex}
            setSelectedUser={setSelectedUser}
          />
          <UserPanel
            user={user}
          /> 
        </>
      )
    }
    // let content = (<div style={{ fontSize: "6rem" }}>Loading...</div>);
  return (
    <>
      {content}
    </>
  );
}

export default App;
