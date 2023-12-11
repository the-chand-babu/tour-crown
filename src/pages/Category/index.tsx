import React from "react";
import { Cards } from "../../design-system/Cards";
import { BsDisplay } from "react-icons/bs";
import './style.scss';
import Navbar from "../../components/Navbar";
import Card from "../../design-system/Card";
import Footer from "../../components/Footer";

const Category =()=>{


    return(
      <div className="category"> 
      
      <Navbar />
      <div className="trnding-item">
        <p className="trending">TRENDING</p>
        <div className="container_input">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        </div>
      </div>
      <Footer  />
      </div>
     
    )
}
export default Category