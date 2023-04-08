import "./Login.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

function Login() {
  return (
    <div id="card">
      <div id="card-content">
        <div id="card-title">
          <h2>ADMIN LOGIN</h2>
        </div>
        <div id="email-input-div">
          <TextField
            id="email-input"
            label="Email"
            type="email"
            variant="standard"
            required
            // error
          />
        </div>
        <div className="form-border"></div>
        <Button id="submit-btn" variant="contained">
          Send OTP
        </Button>
      </div>
    </div>
  );
}
export default Login;
