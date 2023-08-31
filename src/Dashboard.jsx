import React from "react";
import { StudentProfilePage } from "./StudentProfilePage";

export function Dashboard() {
  const students = [{ id: 1, name: "First", url: "https://via.placeholder.com/150", width: 150, height: 150 }];

  return (
    <div>
      <h1>Dashboard</h1>
      <StudentProfilePage />
    </div>
  );
}
