// src/App.js
import React from 'react';
import ServiceList from './components/ServiceList';
import TeamList from './components/TeamList';
import RequestsList from './components/RequestsList';

function App() {
  return (
    <div>
      <ServiceList />
      <TeamList />
      <RequestsList />
    </div>
  );
}

export default App;
