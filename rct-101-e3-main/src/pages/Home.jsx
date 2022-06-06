import React from "react";
import { Route, Routes } from 'react-router-dom'
import Navbar from "../components/Navbar/Navbar";
// import Product from "../components/Products/Product/Product";
import Products from "../components/Products/Products";
import Login from "./Login"

const Home = () => {
  return <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/products" element={<Products/>}/>
    </Routes>
    </div>;
};

export default Home;
