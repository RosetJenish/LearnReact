import React from "react";
class App extends React.Component {
  render() {
    return (
    <button className="App"> 
    <h1>Hello World</h1>
    {this.props.value}
    </button>
    );
  }
}
export default App ;
