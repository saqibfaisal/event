import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WellectConnect from "../component/welletConnect";
import Home from "../screen/home";
// import Login from "../login";
// import Signup from "../signup";

function AppNavigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Wellet" element={<WellectConnect />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </Router>
  );
}
export default AppNavigation;
