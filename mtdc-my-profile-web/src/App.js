import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Profile from "./Modules/Profile";
import FrontendMentor from "./Modules/FrontendMentor";
import proFilePic from "./assets/profile.png";
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="card">
        <img src={proFilePic} alt="Profile" className="profile-img" />
        <h2 className="myName">Maria Teresa Cruz</h2>
        <p className="location">London, United Kingdom</p>
        <p className="bio">"Front-end developer and avid reader"</p>
        <button onClick={() => navigate("/profile")}>Profile</button>
        <button onClick={() => navigate("/frontend-mentor")}>
          Frontend Mentor
        </button>
        <button className="disabled">GitHub</button>
        <button className="disabled">LinkedIn</button>
        <button>Instagram</button>
      </div>
    </div>
  );
};
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/frontend-mentor" element={<FrontendMentor />} />
      </Routes>
    </Router>
  );
}
