import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const Registration = () => {
  const [MemberID, setMemberID] = useState("");

  const [Name, setName] = useState("");

  const [Address, setAddress] = useState("");

  const [ContactNumber, setContactNumber] = useState("");

  const [email, setEmail] = useState("");

  const [Password, setPassword] = useState("");

  const [c_password, setc_password] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Password !== c_password) {
      alert("Password and confirm Password do not match");

      return;
    }

    const registrationData = {
      MemberID,

      Name,

      Address,

      ContactNumber,

      email,

      Password,

      c_password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5002/users",
        registrationData
      );

      console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
      } else if (error.request) {
        console.error("No response from server:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <>
      <div className="container">
        <h3>Registration Form</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Member ID:</label>

            <input
              type="number"
              value={MemberID}
              onChange={(e) => setMemberID(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Name:</label>

            <input
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Address:</label>

            <input
              type="text"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Contact Number:</label>

            <input
              type="text"
              value={ContactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>

            <input
              type="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password:</label>

            <input
              type="Password"
              value={c_password}
              onChange={(e) => setc_password(e.target.value)}
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Registration;
