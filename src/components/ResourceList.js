import React, { useState, useEffect } from 'react';
import jsonplaceholder from '../api/jsonplaceholder';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await jsonplaceholder.get(`${resource}`);

    setResources(response.data)
  }

  useEffect(() => {
    fetchResource(resource)
  }, [resource])

  return resources;

}

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <ul>
      {resources.map(record => {
        return (
          <li key={record.id}>
            {record.title}
          </li>
        );
      })}
    </ul>
  );
}

export default ResourceList;
