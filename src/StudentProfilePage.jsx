/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

export function StudentProfilePage(props) {
  console.log(props);
  return (
    <div id="student-profile-index">
      <h3>HERE ARE THE ARTICLES YOU REQUESTED</h3>
      {props.student}
    </div>
  );
  // return (
  //   <div>
  //     <h2>Student Profile</h2>
  //     <form>
  //       <div>
  //         <label>
  //           First Name:
  //           <input type="text" name="firstName" />
  //         </label>
  //       </div>

  //       <div>
  //         <label>
  //           Last Name:
  //           <input type="text" name="lastName" />
  //         </label>
  //       </div>
  //       <div>
  //         <label>
  //           Email:
  //           <input type="email" name="email" />
  //         </label>
  //       </div>
  //       <div>
  //         <label>
  //           Phone Number:
  //           <input type="tel" name="phoneNumber" />
  //         </label>
  //       </div>
  //       <div>
  //         <label>
  //           Short Bio:
  //           <textarea name="shortBio" />
  //         </label>
  //       </div>

  //       <div>
  //         <label>
  //           LinkedIn URL:
  //           <input type="url" name="linkedInURL" />
  //         </label>
  //       </div>
  //       <div>
  //         <label>
  //           Twitter Handle:
  //           <input type="text" name="twitterHandle" />
  //         </label>
  //       </div>
  //       <div>
  //         <label>
  //           Personal Blog/Website URL:
  //           <input type="url" name="personalBlogURL" />
  //         </label>
  //       </div>

  //       <div>
  //         <label>
  //           Online Resume URL:
  //           <input type="url" name="onlineResumeURL" />
  //         </label>
  //       </div>
  //       <div>
  //         <label>
  //           Github URL:
  //           <input type="url" name="githubURL" />
  //         </label>
  //       </div>

  //       <div>
  //         <label>
  //           Photo URL:
  //           <input type="url" name="photoURL" />
  //         </label>
  //       </div>
  //       <button type="submit">Update</button>
  //     </form>
  //   </div>
  // );
}
