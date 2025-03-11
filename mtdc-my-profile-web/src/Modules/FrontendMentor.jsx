import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const RandomBgColor = () => {
  useEffect(() => {
    document.body.style.backgroundColor = getRandomColor(); // Change background color when page loads
  }, []); // Runs only once when the component mounts

  const getRandomColor = () => {
    const colors = ["#FFB6C1", "#ADD8E6", "#90EE90", "#FFD700", "#FFA07A","#282c34"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <h2>🎨 Background Color Changes on Page Load!</h2>
      <p>Refresh the page to see a new color. 😃</p>
      <Link to="/" className="back-button">Go Back</Link>
    </div>
  );
};

export default RandomBgColor;
