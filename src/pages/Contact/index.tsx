import React from "react";
import "./style.scss";
import Navbar from "../../components/Navbar";
import { Button, FormLabel, TextField } from "@mui/material";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName :"",
        lastName :"",
        mobile :"",
        email :"",
    })

    const handleChange =(e :any)=>{
        const value = e.target.value;
        const name = e.target.name;
        // console.log(name, value)
        setFormData({...formData, [name]: value})

    }
   

    const handleSubmit=(e:any)=>{
        e.preventDefault()
        console.log('working')
    }

  return <div id="contact">
    <div className="contact">
        <Navbar />
        <div className="row">
            <div className="col-6">
               <div className="form">
                <form className="form-container" action="" onSubmit={handleSubmit}>
                <p>First Name</p>
                <TextField onChange={handleChange} name="firstName" className="text-field"  placeholder="Enter your Name"/>
                <p>Last Name</p>
                <TextField onChange={handleChange} name="lastName" className="text-field"  placeholder="Enter Last Name" />
                <p>Mobile Number</p>
                <TextField onChange={handleChange} name="mobile" className="text-field"  placeholder="Enter your Mobile Number" />
                <p>Email </p>
                <TextField type="email" onChange={handleChange} name="email" className="text-field"  placeholder="Enter email" />
                <br />
                <Button type='submit' className="btn" variant="contained">Submit</Button>
               </form>

               </div>
            </div>
            <div className="col-6">
               <div className="contact-details">
               <div className="info">
            {/* <img src={avatarImage} alt="" /> */}
            <div className="details">
              <h4>Ikram</h4>
              <span>CEO - Tour-crown</span>
              <p>ikram@email.com</p>
            </div>
          </div>

          <div className="info">
            {/* <img src={avatarImage} alt="" /> */}
            <div className="details">
              <h4>Ikram</h4>
              <span>CEO - Tour-crown</span>
              <p>ikram@email.com</p>
            </div>
          </div>
          <div className="info">
            {/* <img src={avatarImage} alt="" /> */}
            <div className="details">
              <h4>Ikram</h4>
              <span>CEO - Tour-crown</span>
              <p>ikram@email.com</p>
            </div>
          </div>
          <div className="info">
            {/* <img src={avatarImage} alt="" /> */}
            <div className="details">
              <h4>Ikram</h4>
              <span>CEO - Tour-crown</span>
              <p>ikram@email.com</p>
            </div>
          </div>
               </div>
            </div>

        </div>
    </div>
  </div>;
};
export default Contact;
