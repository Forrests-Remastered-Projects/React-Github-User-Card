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
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

function UserCard(props) {
  return (
  <div>
    <h2>{props.user.login}</h2>
    <img src={props.user.avatar_url} />
    <p>Hi, my name is {props.user.name}</p>
    <p>I live in {props.user.location}</p>
    <p>I am a {props.user.bio}</p>
    <div class="follow">
      My followers on Github are listed below <br/> 
      <br/>
      {props.followers.map(follower => (<div key={follower.id}>{follower.login}</div>))}
    </div>
  </div>
  );
}

export default App;
