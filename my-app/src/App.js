import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

componentDidMount() {
  fetch('http://api.github.com/users/forrestdarabian')
    .then(res => res.json())
    .then(data => console.log(data));
}

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
