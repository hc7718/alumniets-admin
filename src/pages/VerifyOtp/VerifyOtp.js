import "./VerifyOtp.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

function VerifyOtp() {
  return (
    <div id="card">
      <div id="card-content">
        <div id="card-title">
          <h2>ADMIN LOGIN</h2>
        </div>
        <div id="email-input-div">
          <TextField
            id="email-input"
            label="OTP"
            type="number"
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
export default VerifyOtp;
