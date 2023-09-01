import { useState, useEffect } from "react";
import axios from "axios";
import { StudentProfilePage } from "./StudentProfilePage";

export function Dashboard() {
  const [student, setStudent] = useState([]);

  const handleShowStudent = (jwt) => {
    console.log("HIIII!");
    axios.get(`https://resume-data-api-7hzu.onrender.com/student/${jwt}.json`);
  };

  useEffect(handleShowStudent, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <StudentProfilePage />
    </div>
  );
}
