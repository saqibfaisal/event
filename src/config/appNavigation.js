import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HelloWorld from "../component/helloworld";
import WellectConnect from "../component/welletConnect";
import Admin from "../screen/adminScreen/admin";
import EventCreate from "../screen/adminScreen/eventCreate";
import Home from "../screen/home";
// import Login from "../login";
// import Signup from "../signup";

function AppNavigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/EventCreate" element={<EventCreate />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/hello" element={<HelloWorld />} /> */}
        {/* <Route path="/Wellet" element={<WellectConnect />} /> */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </Router>
  );
}
export default AppNavigation;
