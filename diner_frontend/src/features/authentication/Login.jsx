import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../../services/API";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState({
        user: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Add your API call here
    
            toast.success("Logged in successfully!");
           
            navigate("/");
        } catch (error) {
            toast.error("Login failed. Please try again.");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/");
        }
    }, [navigate]);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <h1 className="font-bold text-center text-2xl mb-5">Login</h1>
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <form onSubmit={handleSubmit} className="px-5 py-7">
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">
                            Email
                        </label>
                        <input
                            type="email"
                            name="user"
                            value={credentials.user}
                            onChange={handleInputChange}
                            className={`border rounded-lg px-3 py-2 mt-1 mb-1 text-sm w-full ${
                                errors.user
                                    ? "border-red-500"
                                    : "border-gray-300"
                            }`}
                            placeholder="Enter your email or username"
                        />
                    
                        <div className="relative">
                            <label className="font-semibold text-sm text-gray-600 pb-1 block">
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={credentials.password}
                                onChange={handleInputChange}
                                className={`border rounded-lg px-3 py-2 mt-1 mb-1 text-sm w-full ${
                                    errors.password
                                        ? "border-red-500"
                                        : "border-gray-300"
                                }`}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-8 text-gray-600 hover:text-gray-800 focus:outline-none"
                            >
                                {showPassword ? (
                                    <span>hide</span>
                                ) : (
                                    <span>show</span>
                                )}
                            </button>
                        </div>
                        
                        <button
                            type="submit"
                            className="transition duration-200 bg-blue-500 hover:bg-blue-600 text-white w-full py-2.5 rounded-lg text-sm font-semibold text-center inline-block mt-4"
                        >
                            Login
                        </button>
                    </form>

                    <div className="py-5">
                        <div className="grid grid-cols-2 gap-1">
                            <button
                                className="transition duration-200 bg-gray-100 hover:bg-gray-200 text-gray-600 w-full py-2.5 rounded-lg text-sm font-normal text-center inline-block"
                                // onClick={() => navigate("/forgot-password")}
                            >
                                Forgot Password
                            </button>
                            <button
                                className="transition duration-200 bg-gray-100 hover:bg-gray-200 text-gray-600 w-full py-2.5 rounded-lg text-sm font-normal text-center inline-block"
                                onClick={() => navigate("/signup")}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
