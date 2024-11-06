import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [location, setLocation] = useState('');
  const [search, setSearch] = useState('');
  const [profile, setProfile] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleProfileChange = (e) => {
    const selectedProfile = e.target.value;
    setProfile(selectedProfile);
    
    // Navigate based on the selected profile
    if (selectedProfile) {
      window.location.href = selectedProfile; // This can also be replaced with a routing function
    }
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
      {/* Title */}
      <div className="text-2xl font-bold">Diner</div>

      {/* Location Dropdown */}
      <div className="relative">
        <select
          value={location}
          onChange={handleLocationChange}
          className="bg-gray-700 border-none rounded-md text-white px-4 py-2 outline-none"
        >
          <option value="">Select Location</option>
          <option value="new-york">New York</option>
          <option value="los-angeles">Los Angeles</option>
          <option value="chicago">Chicago</option>
        </select>
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-4">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-md text-gray-800 outline-none"
        />
      </div>

      {/* Profile Dropdown as Select */}
      <div className="relative">
        <select
          value={profile}
          onChange={handleProfileChange}
          className="bg-gray-700 border-none rounded-md text-white px-4 py-2 outline-none"
        >
          <option value=""></option>
          <option value="/profile">Profile</option>
          <option value="/settings">Settings</option>
          <option value="/logout">Logout</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
