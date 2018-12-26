import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')} className="ui button primary">Posts</button>
        <button onClick={() => setResource('todos')} className="ui button primary">To Dos</button>
      </div>
      <ResourceList  resource={resource}/>
    </div>
  );
}

export default App;
