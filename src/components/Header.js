/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import logo from './logo.jpeg'; // Import the logo image

import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import PostAd from './PostAd'; // Import the PostAd component
import '../styles.css'; // Import the CSS for styling
import { FaHome, FaCar, FaBook, FaShoppingCart, FaDesktop, FaFootballBall, FaMusic, FaGamepad, FaBicycle, FaUtensils, FaBed, FaBookmark } from 'react-icons/fa';

const Header = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
    const [isPostAdModalOpen, setIsPostAdModalOpen] = useState(false); // State for PostAd modal

    const openLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const openRegistrationModal = () => {
        setIsRegistrationModalOpen(true);
    };

    const closeRegistrationModal = () => {
        setIsRegistrationModalOpen(false);
    };

    const openPostAdModal = () => {
        setIsPostAdModalOpen(true);
    };

    const closePostAdModal = () => {
        setIsPostAdModalOpen(false);
    };

    return (
        <header className="header">
            <div className="centered-content">
                <div className="left-section">
                    <div className="category-dropdown">
                        <button className="category-dropdown-button">Categories ▼</button>
                        <div className="dropdown-content">
                            <Link to="/apartments"><FaHome /> Apartment for Rent</Link>
                            <Link to="/townhomes"><FaHome /> Townhome for Rent</Link>
                            <Link to="/books"><FaBook /> Books</Link>
                            <Link to="/free-stuff"><FaShoppingCart /> Free Stuff</Link>
                            <Link to="/electronics"><FaDesktop /> Electronics</Link>
                            <Link to="/vehicles"><FaCar /> Vehicles</Link>
                            <Link to="/gym-equipment"><FaFootballBall /> Gym Equipment</Link>
                            <Link to="/sports-items"><FaBicycle /> Sports Items</Link>
                            <Link to="/musical-instruments"><FaMusic /> Musical Instruments</Link>
                            <Link to="/toys-and-games"><FaGamepad /> Toys and Games</Link>
                            <Link to="/stationery"><FaUtensils /> Stationery</Link>
                            <Link to="/furniture"><FaBed /> Furniture</Link>
                        </div>
                    </div>

                    <div className="application-dropdown">
                        <button className="application-dropdown-button">Application ▼</button>
                        <div className="dropdown-content">
                            <Link to="/sell"><FaShoppingCart /> Sell</Link>
                            <Link to="/buy"><FaShoppingCart /> Buy</Link>
                            <Link to="/list-home"><FaHome /> List Home</Link>
                        </div>
                    </div>

                    <div className="saved-button">
                    
                        <button className="post-ad-button"onClick={openPostAdModal}>Post Ad</button> 
                    </div>
                </div>
                <div className="center-section">
                    <Link to="/"> 
                        //<img src={logo} alt="Logo" className="logo" /> 
                   </Link>
                </div>
                <div className="right-section">
                    <nav className="nav">
                        <ul>
                            <li><button className="saved-button-icon"><FaBookmark className="icon" size={10} />Saved</button></li>
                            <li><button onClick={openRegistrationModal}>Register</button></li>or
                            <li><button onClick={openLoginModal}>Login</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Modal isOpen={isRegistrationModalOpen} onRequestClose={closeRegistrationModal}>
                <RegistrationForm onClose={closeRegistrationModal} />
            </Modal>
            <Modal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal}>
            <LoginForm onClose={closeLoginModal} />
            </Modal>
           
            <Modal isOpen={isPostAdModalOpen} onRequestClose={closePostAdModal}>
                <PostAd onClose={closePostAdModal} />
            </Modal>
        </header>
    );
};

export default Header;*/

import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import logo from './logo.png'; // Import the logo image
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import PostAd from './PostAd'; // Import the PostAd component
import { FaSearch } from 'react-icons/fa';
import '../components/Header.css'; // Import the CSS for styling
import { FaHome, FaCar, FaBook, FaShoppingCart, FaDesktop, FaFootballBall, FaMusic, FaGamepad, FaBicycle, FaUtensils, FaBed, FaBookmark } from 'react-icons/fa';
import UserContext from './userContext';

const Header = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
    const [isPostAdModalOpen, setIsPostAdModalOpen] = useState(false); // State for PostAd modal

    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    console.log(user);
    const openLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const openRegistrationModal = () => {
        setIsRegistrationModalOpen(true);
    };

    const closeRegistrationModal = () => {
        setIsRegistrationModalOpen(false);
    };

    const openPostAdModal = () => {
        setIsPostAdModalOpen(true);
    };

    const closePostAdModal = () => {
        setIsPostAdModalOpen(false);
    };

    const SearchBar = () => { }
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('all');

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleLogout = () => {
        setUser(null);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(`Searching for '${searchTerm}' in category '${category}'...`);
        // Implement your search logic here
    };



    return (
        <header className="header" style={{ backgroundColor: '#97adc6' }}>
            <div className="centered-content">
                <div className="left-section" >


                    <input
                        type="text1"
                        placeholder="What are you looking for?"
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                        className="search-input"
                    />


                    <button type="submit1" className="search-button">
                        Search
                    </button>


                    <div className="application-dropdown">
                        <button className="application-dropdown-button">Application </button>
                        <div className="dropdown-content">
                            <Link to="/sell"><FaShoppingCart /> Sell</Link>

                            <Link to="/subscription"><FaHome /> List Home</Link>

                        </div>
                    </div>


                </div>
                <div className="center-section">
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo" />
                        {/* Add your logo component here */}
                    </Link>
                </div>
                {user ? (
                    <div className='right-section'>
                        <nav className='nav'>
                            <ul>
                                <li><h2>Welcome {user.name}</h2></li>
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </nav>
                    </div>) : (
                    <>
                        <div className="right-section">
                            <nav className="nav">
                                <ul>

                                    <li><button onClick={openRegistrationModal}>Register</button></li>

                                    <li><button onClick={()=>{navigate("/login")}}>Login</button></li>
                                </ul>
                            </nav>
                        </div></>)}
                <div className="promote-ads">
                    <Link to="/postad">
                        <button className="post-ad-button" >Promote Ads</button>
                    </Link>
                </div>
            </div>
            <Modal isOpen={isRegistrationModalOpen} onRequestClose={closeRegistrationModal}>
                <RegistrationForm onClose={closeRegistrationModal} />
            </Modal>
            <Modal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal}>
                <LoginForm onClose={closeLoginModal} />
            </Modal>
            <Modal isOpen={isPostAdModalOpen} onRequestClose={closePostAdModal}>
                <PostAd onClose={closePostAdModal} />
            </Modal>

        </header>
    );
};

export default Header;
