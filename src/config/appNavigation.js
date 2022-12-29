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
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/eventCreate" element={<EventCreate />} />
      </Routes>
    </Router>
  );
}
export default AppNavigation;
