import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Profile = () => {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="page-container">
      <h2>Profile Page</h2>
      <p>
        Welcome to <span 
          onClick={() => setShowBio(!showBio)} 
          className="name-toggle" 
          style={{ cursor: "pointer", fontWeight: "bold", color: "#007bff" }}>
          Maria Teresa
        </span>'s profile page.
      </p>
      <div 
        className="bio-container" 
        style={{ 
          maxHeight: showBio ? "100px" : "0px", 
          overflow: "hidden", 
          transition: "max-height 0.3s ease-in-out",
          background: "#444"
        }}>
        <p className="bio">I am passionate web developer with a love for React.😂😂😂😂</p>
      </div>
      <Link to="/" className="back-button">Go Back</Link>
    </div>
  );
};

export default Profile;