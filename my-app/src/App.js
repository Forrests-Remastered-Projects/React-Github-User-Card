import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

componentDidMount() {
  console.log("First Render (mounting)");
  fetch('http://api.github.com/users/forrestdarabian')
    .then(res => res.json())
    .then(data => this.setState({ user: data }));
    fetch('http://api.github.com/users/forrestdarabian/followers')
    .then(res => res.json())
    .then(data => this.setState({ followers: data }));
}

componentDidUpdate() {
  console.log(this.state);
}

  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

function UserCard(props) {
  return (
  <div>
    <h2>{props.user.login}</h2>
    <p>{props.user.location}</p>
    <p>{props.user.url}</p>

  </div>
  );
}

export default App;
