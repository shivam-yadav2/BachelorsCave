import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Testing from "./Pages/Testing";
import Signup from "./Pages/Signup";
import LoginPage from "./Pages/Login/LoginPage";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Listing from "./Pages/ListPropertys/Listing";
import Profile from "./Pages/Profile/Profile";
import Filter from "./Pages/Filter/Filter";
import Admin from "./Pages/Admin/Admin";
import Owner from "./Pages/Owner/Owner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/product-details' element={<ProductDetails />} />
        <Route path='/listing' element={<Listing />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/filter' element={<Filter />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/owner' element={<Owner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  