import React from 'react';

class App extends React.Component {
  state = { resource : 'posts'}
  render () {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({resource: 'posts'})} className="ui button primary">Posts</button>
          <button onClick={() => this.setState({resource: 'todos'})} className="ui button primary">To Dos</button>
        </div>
        {this.state.resource}
      </div>
    );
  };
}

export default App;
