// src/components/ServiceList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeamList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/api/services')
      .then(response => setServices(response.data.services))
      .catch(error => console.error('Error fetching services:', error));
  }, []);

  return (
    <div>
      <h2>Team List</h2>
      <ul>
        {services.map(service => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
