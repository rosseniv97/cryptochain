import React, { Component } from "react";

class App extends Component {
  state = {
    userInfo: {
      id: "abcd123",
      name: "Rossen",
    },
  };

  render() {
    const { id, name } = this.state.userInfo;

    return (
      <div>
        <div>Welcome to the Blockchain</div>

        <div> Id: {id} </div>
        <div> Name: {name} </div>
      </div>
    );
  }
}

export default App;
