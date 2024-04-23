/*import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './registrationForm.css'; // Import CSS file for styling

function RegistrationForm() {
  const [isSignInMode, setIsSignInMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isProfessional, setIsProfessional] = useState(false);
  const [professionalType, setProfessionalType] = useState('');
  const [university, setUniversity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // State variable for registration success

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[a-zA-Z]).{8,}$/;
    setPasswordMessage(
      regex.test(password)
        ? 'Password is valid'
        : 'Password must be at least 8 characters. ' +
            'It should contain a mix of letters and numbers, ' +
            'at least one special character, ' +
            'and at least one lowercase and one uppercase letter.'
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data object for registration
    const userData = {
      email,
      password,
      firstName,
      lastName,
      isProfessional,
      professionalType,
      university,
      phoneNumber,
      zipCode,
    };

    try {
      // Make a POST request to your Java backend with Axios
      const response = await axios.post('http://localhost:8080/register', userData);

      // Handle success response
      console.log('Registration successful:', response.data);
      setIsSignInMode(true);
      setRegistrationSuccess(true);
    } catch (error) {
      // Handle error
      console.error('Registration failed:', error.response.data);
    }
  };

  const handleSignInClick = () => {
    // Navigate to dashboard or desired route
    window.location.href = '/dashboard';
  };

  return (
    <div className="registration-form">
      <h1>Welcome to Bargain Hunter</h1>
      <div className="mode-toggle">
        <button onClick={() => setIsSignInMode(true)}>Sign In</button>
        <button onClick={() => setIsSignInMode(false)}>Register</button>
      </div>
      <div>
        {isSignInMode ? (
          <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <p style={{ color: 'red', fontSize: '14px' }}>{passwordMessage}</p>
              <button onClick={handleSignInClick}>Sign In</button>
              <a href="/forgot-password">Forgot Password?</a>
            </form>
          </div>
        ) : (
          <div>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <p style={{ color: 'red', fontSize: '14px' }}>{passwordMessage}</p>
              <label>
                <input
                  type="checkbox"
                  checked={isProfessional}
                  onChange={(e) => setIsProfessional(e.target.checked)}
                />
                I am a landlord or industry professional
              </label>
              <input
                type="text"
                placeholder="University (Optional)"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
              {isProfessional && (
                <>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Zip Code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                  <div>
                    <select
                      value={professionalType}
                      onChange={(e) => setProfessionalType(e.target.value)}
                    >
                      <option value="">Select Professional Type</option>
                      <option value="propertyOwner">Property Owner</option>
                      <option value="apartmentOwner">Apartment Owner</option>
                      { Add more options as needed }
                    </select>
                  </div>
                </>
              )}
              <button type="submit">Register</button>
            </form>
          </div>
        )}
      </div>
      <div className="social-login">
        { Add "Continue with Google" button }
        <button>Sign In with Google</button>
      </div>
      { Display success message if registration is successful }
      {registrationSuccess && (
        <p>
          Registration successful! You can now .
        </p>
      )}
    </div>
  );
}

export default RegistrationForm;*/

import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { UserContext } from "../components/userContext";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


import "../components/Register.scss";
import userService from '../services/userService';

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [isRegistered , setIsRegistered] = useState(false);
  const { setUser } = useContext(UserContext)
 
  const navigate = useNavigate();

  
  const registerUser = async (event) => {
    event.preventDefault();
    try {
      // const response = await axios.post("/api/auth/register", {
      //   username,
      //   email,
      //   password
      // });
      // setUser(response.data);
      // if (response.statusText === "OK") {
      //   navigate("/");
      // }
      // console.log(response)
      
      const reqBody = {
        "name": firstname+" "+lastname,
        "email": email,
        "password": password
      }
  
      const res = await userService.createUser(reqBody);
      //console.log(reqBody);
      if(res.status === 200){
        setIsRegistered(true);
      }
      console.log(res.data);

    } catch (error) {
      setErrors(error.response.data.errors)
    } 
  }

  console.log(errors)

  return (
    <section className="register" onSubmit={registerUser}>
      <div className="form--container">
      <h3 className="text">Welcome to Bargain Hunter</h3>
      <form action="" className="form">
      <label htmlFor="username">First Name</label>
        <div className="form--">
          <input 
          type="text" 
          name='username' 
          placeholder='enter your first name...'
          value={firstname}
          onChange={(event) => {
            if (errors.username) {
              errors.username = ""
            }
            setFirstname(event.target.value)
          }}
          />
          </div>
         
      <label htmlFor="username1">Last Name</label>
        <div className="form--">
          <input 
          type="text" 
          name='username1' 
          placeholder='enter your last name...'
          value={lastname}
          onChange={(event) => {
            if (errors.username) {
              errors.username = ""
            }
            setLastname(event.target.value)
          }}
          />
        </div>
          {errors && (<p className="error">{errors.username}</p>)}
        <div className="form1--">
        <label htmlFor="useremail">Email:</label>
            <input
              type="email"
              name="useremail"
              id="useremail"
              placeholder='enter your email...'
              value={email}
              onChange={event => {
                if (errors.email) {
                  errors.email = "";
                }
                setEmail(event.target.value)
              }}
            />
        </div>
        {errors && (<p className="error">{errors.email}</p>)}
        <div className="form--">
        <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder='provide your pasword...'
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
        </div><br></br>
        <button type="submit">sign up</button>
       
     
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
        <p>Already have an account? <Link to={"/login"}>login</Link></p>
      </div>
      {isRegistered ? (
                <p className="text-success">You Are Registered Successfully</p>
            ) :  ( 
                <p className="text-danger">You Are Not Registered Yet</p>
            )}
      </form>
      </div>
    </section>
   
  )
}

export default Register