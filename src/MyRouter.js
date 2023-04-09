import VerifyOtp from "./pages/VerifyOtp/VerifyOtp";
import Login from "./pages/Login/Login";
import DashBoard from "./pages/DashBoard/DashBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const MyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
};
export default MyRouter;
