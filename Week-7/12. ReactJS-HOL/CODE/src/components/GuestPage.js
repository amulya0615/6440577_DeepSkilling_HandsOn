import React from 'react';
import FlightDetails from './FlightDetails';

function GuestPage() {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>Please log in to book your ticket.</p>
      <FlightDetails />
    </div>
  );
}

export default GuestPage;
