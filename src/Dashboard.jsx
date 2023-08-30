import React from "react";

export function Dashboard() {
  const students = [{ id: 1, name: "First", url: "https://via.placeholder.com/150", width: 150, height: 150 }];

  return (
    <div>
      <h1>Dashboard</h1>
      <StudentList students={students} /> {/* Renamed the component */}
    </div>
  );
}

function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>
      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <img src={student.url} alt={student.name} width={student.width} height={student.height} />
        </div>
      ))}
    </div>
  );
}
