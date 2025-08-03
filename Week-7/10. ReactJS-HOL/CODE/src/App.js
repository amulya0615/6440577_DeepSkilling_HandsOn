import React from 'react';

function App() {
  const heading = <h1>Office Space Rental</h1>;

  const officeImage = "https://via.placeholder.com/400x200.png?text=Office+Space";

  const officeList = [
    { name: "Regus", rent: 45000, address: "Banjara Hills" },
    { name: "WeWork", rent: 65000, address: "HiTech City" },
    { name: "CoWrks", rent: 50000, address: "Gachibowli" },
    { name: "Innov8", rent: 72000, address: "Jubilee Hills" }
  ];

  const renderOfficeDetails = officeList.map((office, index) => (
    <div key={index} style={{ marginBottom: '15px' }}>
      <h3>{office.name}</h3>
      <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
        Rent: ₹{office.rent}
      </p>
      <p>Address: {office.address}</p>
    </div>
  ));

  return (
    <div>
      {heading}
      <img src={officeImage} alt="Office Space" style={{ width: "400px", height: "200px" }} />
      <div style={{ marginTop: '20px' }}>
        {renderOfficeDetails}
      </div>
    </div>
  );
}

export default App;
