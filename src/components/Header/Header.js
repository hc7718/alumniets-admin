import { Button } from "@mui/material";
import nietLogo from "../../images/nietLogo.png";
import "./Header.css";
const Header = () => {
  return (
    <nav>
      <div className="navbar-image-p">
        <img className="content-items" src={nietLogo} alt="NIET LOGO"></img>
        <p className="logo"> Alumniets</p>

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
  );
};
export default Header;
