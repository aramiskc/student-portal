import axios from "axios";
import { useState } from "react";

export function Resume() {
  return (
    <div id="resume">
      <hr />
      <form>
        <h1>Experience</h1>
        <div>
          Start Date: <input name="start_date" type="date" />
        </div>
        <div>
          End Date: <input name="end_date" type="date" />
        </div>
        <div>
          Job Title: <input name="job_title" type="text" />
        </div>
        <div>
          Company Name: <input name="company_name" type="text" />
        </div>
        <div>
          Details: <input name="details" type="text" />
        </div>
        <button type="submit">Add more work experience</button>
        <h1>Education</h1>
        <div>
          Start Date: <input name="start_date" type="date" />
        </div>
        <div>
          End Date: <input name="end_date" type="date" />
        </div>
        <div>
          Degree: <input name="degree" type="text" />
        </div>
        <div>
          University Name: <input name="university_name" type="text" />
        </div>
        <div>
          Details: <input name="details" type="text" />
        </div>
        <button type="submit">Add more education</button>
        <h1>Skills</h1>
        <div>
          Skill: <input name="skill" type="text" />
        </div>
        <div>
          Skill: <input name="skill" type="text" />
        </div>
        <div>
          Skill: <input name="skill" type="text" />
        </div>
        <button type="submit">Add another skill</button>
        <h1>Capstone</h1>
        <div>
          Name: <input name="capstone_name" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          URL: <input name="url" type="url" />
        </div>
        <div>
          Screenshot: <input name="screenshot" type="text" />
        </div>
        <button type="submit">Add another capstone</button>
      </form>
    </div>
  );
}
