import React from "react";
import "./DashBoard.css";
import { Button } from "@mui/material";
import nietLogo from "../../images/nietLogo.png";
import nietimg from "../../images/Hostel.jpg";
const DashBoard = () => {
  return (
    <div className="dash">
      <nav>
        <div className="navbar-image-p">
          <img className="content-items" src={nietLogo} alt="NIET LOGO"></img>
          <p className="logo">Alumniets</p>

          <ul>
            <li>
              <Button
                style={{
                  color: "bisque",
                }}
                variant="text"
              >
                Text
              </Button>
            </li>
            <li>
              <Button
                style={{
                  color: "bisque",
                }}
                variant="text"
              >
                Text
              </Button>
            </li>
            <li>
              <Button
                style={{
                  color: "bisque",
                }}
                variant="text"
              >
                Text
              </Button>
            </li>
            <li>
              <Button
                style={{
                  color: "bisque",
                }}
                variant="text"
              >
                Text
              </Button>
            </li>
            <li>
              <Button
                style={{
                  color: "bisque",
                }}
                variant="text"
              >
                Text
              </Button>
            </li>
          </ul>
        </div>
      </nav>
      <img className="college-image" src={nietimg} alt="NIET"></img>
    </div>
  );
};
export default DashBoard;
