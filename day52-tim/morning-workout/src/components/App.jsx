import React, { Component } from "react";
import UserPanel from './User-Panel.jsx';
import UserList from './User-List.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        loading: false,
        loaded: false,
        data: [],
        user: null,
    };

    this.url = 'https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/';
  }

  componentDidMount() {
      this.loadData();
  }

  loadData() {
      if (this.url) {
          this.setState({ 
              loading: true,
              loaded: false,
              data: []
          })

          fetch(this.url)
              .then(response => response.json())
              .then(data => {
                  this.setState({ 
                      loaded: true,
                      data: data
                  })
              })
              .finally(this.setState({
                  loading: false
              }));
      }
  }

  setSelectedUser = (index) => {
    this.setState({
      user: this.state.data[index],
    });
  }

  render() {
    let content = (<div style={{ fontSize: "6rem" }}>Loading...</div>);
    if (this.state.loaded) {
      content = (
        <>
          <UserList
            users={this.state.data}
            setSelectedUser={this.setSelectedUser}
          />
          <UserPanel
            user={this.state.user}
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
}

export default App;
