import React, { useState, useEffect } from 'react';
import jsonplaceholder from '../api/jsonplaceholder';

const ResourceList = ({ resource }) => {

  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await jsonplaceholder.get(`${resource}`);

    setResources(response.data)
  }

  useEffect(() => {
    fetchResource(resource)
  }, [resource])

  return (
    <div>{resources.length}</div>
  );
}

export default ResourceList;
