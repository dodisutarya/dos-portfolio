import React, { Component } from 'react';
import { Button } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="container">
        
        <h1>hello world!</h1>
        <h3>Here we are!</h3>   
        <Button variant="primary">Primary</Button>     
      </div>
    );
  }
}

export default App;