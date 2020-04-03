import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "../Signup/index.css"
export default function Signup() {
    return (
      
        <div>
          <Router>
            <form action="preferencepage">
    <div className="container">
      <h1>Sign Up</h1>

      <label for="input1"><b>Email</b></label>
      <input type="text" placeholder="example@example.com" name="preference" required/>

      <label for="input1"><b>Password</b></label>
      <input type="text" placeholder="Enter Password" name="preference" required/>

      <label for="input1"><b>Name</b></label>
      <input type="text" placeholder="Name" name="preference" required/>

      <label for="input1"><b>Gender</b></label>
      <input type="text" placeholder="M/F" name="preference" required/>

      <label for="input1"><b>Age</b></label>
      <input type="text" placeholder="Enter Age" name="preference" required/>

      <label for="input1"><b>Weight</b></label>
      <input type="text" placeholder="ex. 0.00lbs" name="preference" required/>




      <div>
        <button type="button" className="cancelbtn">Cancel</button>
        <button type="submit" className="signupbtn">Save</button>
      </div>
    </div>
  </form>
  </Router>
        </div>
    )
}
