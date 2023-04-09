import VerifyOtp from "./pages/VerifyOtp/VerifyOtp";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
      </Routes>
    </Router>
  );
};
export default MyRouter;
