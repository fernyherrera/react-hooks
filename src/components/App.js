import React, { useState } from 'react';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')} className="ui button primary">Posts</button>
        <button onClick={() => setResource('todos')} className="ui button primary">To Dos</button>
      </div>
      {resource}
    </div>
  );
}

export default App;
