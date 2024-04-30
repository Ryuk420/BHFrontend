/*import React, { useState } from 'react';
import '../loginForm.css';

const LoginForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // For testing, log form data to console
        onClose();
    };

    return (
        <div className="login-form">
            <div className="form-content">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;*/


import React, { useContext, useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "../components/Login.scss";
import userService from '../services/userService';
import UserContext from './userContext';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail, onSelect, selected] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reqBody = {
        "email": email,
        "password": password
      }

      const res = await userService.loginUser(reqBody);
      setIsLoggedIn(true);
      setUser(res);
      toast.success("Login Successfull", { position: "bottom-right" });
      setTimeout(() => { navigate("/"); }, 1000);

      //console.log(user);
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  return (
    <section className="login">
      <div className="form--container">
        <h3 className="text">Welcome to Bargain Hunter</h3>
        <form onSubmit={handleSubmit} className="form">
          <div className="form1--">
            <label htmlFor="useremail">Email:</label>
            <input
              type="email"
              name="useremail"
              id="Email"
              placeholder='Enter your email'
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div><br></br>

          <div className="form--">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder='Enter your password...'
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <br></br>
          <button type="submit">Login</button>

        </form>

        <div className="social-login-container">
          <div className="social-login-box">
            <FaFacebook />
            <p className="text">Signin with Facebook</p>
          </div>
          <div className="social-login-box">
            <FaGoogle />
            <p className="text">Signin with Google</p>
          </div>
        </div>
        <div className="account">
          <p>Don't have an account? <Link to={"/register"}>Sign Up</Link></p>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}

export default Login;
