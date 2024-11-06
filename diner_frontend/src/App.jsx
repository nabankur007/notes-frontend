import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./features/authentication/Login";
import Signup from "./features/authentication/Signup"; 
import Navbar from "./component/Navbar";
import Profile from "./pages/Profile";

function App() {
    return (
        <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
