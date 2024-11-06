import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  
    return (
        <>
        
            <div>Home</div>
            <Link to="/login">login</Link>
            <Link to="/signup"> signup </Link>
            <p>{import.meta.env.VITE_URL}</p>
            <button onClick={() => localStorage.clear()}>logout</button>
        </>
    );
};

export default Home;
