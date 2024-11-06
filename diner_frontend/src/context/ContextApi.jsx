// import React, { createContext, useContext, useState, useEffect } from "react";
// import api from "../services/API";
// import toast from "react-hot-toast";

// const ContextApi = createContext();

// export const ContextProvider = ({ children }) => {
//     // Retrieve token, admin, and restaurant statuses from localStorage, parsing them directly
//     const getToken = localStorage.getItem("JWT_TOKEN");
//     const isAdminStatus = JSON.parse(
//         localStorage.getItem("IS_ADMIN") || "false"
//     );
//     const isRestaurentStatus = JSON.parse(
//         localStorage.getItem("IS_RESTAURENT") || "false"
//     );

//     // State hooks
//     const [token, setToken] = useState(getToken);
//     const [currentUser, setCurrentUser] = useState(null);
//     const [openSidebar, setOpenSidebar] = useState(true);
//     const [isAdmin, setIsAdmin] = useState(isAdminStatus);
//     const [isRestaurent, setIsRestaurent] = useState(isRestaurentStatus);

//     const fetchUser = async () => {
//         const user = JSON.parse(localStorage.getItem("USER"));

//         if (user?.username) {
//             try {
//                 const { data } = await api.get(`/auth/user`);
//                 const roles = data.roles;

//                 // Update admin and restaurant statuses based on roles
//                 if (roles.includes("ROLE_ADMIN")) {
//                     localStorage.setItem("IS_ADMIN", JSON.stringify(true));
//                     setIsAdmin(true);
//                 } else if (roles.includes("ROLE_RESTAURENT")) {
//                     localStorage.setItem("IS_RESTAURENT", JSON.stringify(true));
//                     setIsRestaurent(true);
//                 } else {
//                     localStorage.removeItem("IS_ADMIN");
//                     localStorage.removeItem("IS_RESTAURENT");
//                     setIsAdmin(false);
//                     setIsRestaurent(false);
//                 }
//                 setCurrentUser(data);
//             } catch (error) {
//                 console.error("Error fetching current user", error);
//                 toast.error("Error fetching current user");
//             }
//         }
//     };

//     // Fetch current user data if token exists
//     useEffect(() => {
//         if (token) {
//             fetchUser();
//         }
//     }, [token]);

//     // Context provider to make data accessible across components
//     return (
//         <ContextApi.Provider
//             value={{
//                 token,
//                 setToken,
//                 currentUser,
//                 setCurrentUser,
//                 openSidebar,
//                 setOpenSidebar,
//                 isAdmin,
//                 setIsAdmin,
//                 isRestaurent,
//                 setIsRestaurent,
//             }}
//         >
//             {children}
//         </ContextApi.Provider>
//     );
// };

// // Custom hook for accessing context data easily across components
// export const useMyContext = () => useContext(ContextApi);
