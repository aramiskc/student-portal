import React from "react";

function Dashboard({ studentData }) {
  return (
    <div>
      <h2>Dashboard</h2>
      {studentData ? (
        <div>
          <h3>Welcome, {studentData.firstName}!</h3>
          {/* Display student data here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
