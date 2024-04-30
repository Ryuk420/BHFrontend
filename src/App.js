/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import SellPage from './components/SellPage';
import ListHome from './components/ListHome';
import ProductList from './components/ProductList';
import RegistrationForm from './components/RegistrationForm'; // Import RegistrationForm component
import Dashboard from './components/Dashboard';
import BackendCheck from './components/BackendCheck';
import './styles.css';
import Login from './components/LoginForm';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/sell" element={<SellPage />} />
                    <Route path="/list-home" element={<ListHome />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/register" element={<RegistrationForm />} /> 
                    <Route path="/dashboard" element={<Dashboard />} /> 
                    <Route path="/login" element={<Login />} />
                    <Route path="/backend-check" element={<BackendCheck />} />
                    <Route path="/" element={<MainContent />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;*/


import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Header from './components/Header';
import Header1 from './components/Header1';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import SellPage from './components/SellPage';
import ListHome from './components/ListHome';
import ProductList from './components/ProductList';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';
import BackendCheck from './components/BackendCheck';
import Apartments from './components/apartments';
import Townhomes from './components/townhomes';
import Books from './components/books';
import Furniture from './components/furniture';
import Vehicles from './components/vehicles';
import Stationery from './components/stationery';
import Electronics from './components/electronics';
import Subscription from './components/subscription';
import Payment from './components/payment';
import Features from './components/Features';
import AboutUsPage from './components/aboutus';
import HelpCenter from './components/help-center';
import Accessibility from './components/Accessibility';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Posting from './components/posting';
import JoinUsPage from './components/join';
import Members from './components/Members';
import GymEquipments from './components/gymequipments';
import FreeGoods from './components/freegoods';
import ViewHouse from './components/ViewHouse';


import ChatBot from 'react-simple-chatbot';



import './styles.css';
import PostAd from './components/PostAd';
import UserContext from './components/userContext';


const steps = [
    {
        id: '0',
        message: 'Hey Hunter! Please write your username',
        trigger: '1',
    }, {
        id: '1',
        user: true,
        trigger: '2'
    },
    {
        id: '2',
        message: "hi,{previousValue}, how can I help you?",
        trigger: '3'
    },
    {
        id: '3',
        user: true,
        trigger: '4',
    },
    {
        id: '4',
        message: "Sure, Let me connect you with our agent",

    }

];

const theme = {
    background: '#ced3d9',
    headerBgColor: '#2f84fa',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#4990e1',
    userFontColor: 'white',
};
const config = {
    botAvatar: "https://media.wired.com/photos/5938accefbdfa3763bab97f9/master/w_2240,c_limit/Woebot_relax_01-4x3.gif",
    floating: true,
};


const App = () => {

    const [user , setUser] = useState(null);
    return (
        <UserContext.Provider value={[user , setUser]}>
        <Router>
            <div className="app">
                <Routes>


                    <Route path="/products" element={<ProductList />} />
                    <Route path="/register" element={<RegistrationForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/backend-check" element={<BackendCheck />} />

                    <Route path="/" element={
                        <>
                            <Header />

                            <MainContent />
                            <Footer />
                        </>
                    } />


                    <Route path="/apartments">
                        <Route index element={<>
                            <Header />

                            <Apartments />
                            <Footer />
                        </>} />
                        <Route path=":houseId" element={<ViewHouse />} />
                    </Route>

                    {/* <Route path="/apartments" element={
                        <>
                            <Header />

                            <Apartments />
                            <Footer />
                        </>
                    } /> */}
                    <Route path="/books" element={
                        <>
                            <Header />

                            <Books />
                            <Footer />
                        </>
                    } />
                    <Route path="/furniture" element={
                        <>
                            <Header />

                            <Furniture />
                            <Footer />
                        </>
                    } />
                    <Route path="/vehicles" element={
                        <>
                            <Header />

                            <Vehicles />
                            <Footer />
                        </>
                    } />
                    <Route path="/stationery" element={
                        <>
                            <Header />

                            <Stationery />
                            <Footer />
                        </>
                    } />
                    <Route path="/freegoods" element={
                        <>
                            <Header />

                            <FreeGoods />
                            <Footer />
                        </>
                    } />
                    <Route path="/electronics" element={
                        <>
                            <Header />

                            <Electronics />
                            <Footer />
                        </>
                    } />
                    <Route path="/Sell" element={
                        <>
                            <Header />

                            <SellPage />
                            <Footer />
                        </>
                    } />
                    <Route path="/list-home" element={
                        <>
                            <Header />

                            <ListHome />
                            <Footer />
                        </>
                    } />

                    <Route path="/subscription" element={
                        <>
                            <Header />

                            <Subscription />
                            <Footer />
                        </>
                    } />
                    <Route path="/gymequipments" element={
                        <>
                            <Header />

                            <GymEquipments />
                            <Footer />
                        </>
                    } />
                    <Route path="/posting" element={
                        <>
                            <Header />

                            <Posting />
                            <Footer />
                        </>
                    } />
                    <Route path="/join" element={
                        <>
                            <Header />

                            <JoinUsPage />
                            <Footer />
                        </>
                    } />
                    <Route path="/Members" element={
                        <>
                            <Header />

                            <Members />
                            <Footer />
                        </>
                    } />

                    <Route path="/features" element={
                        <>
                            <Header />

                            <Features />
                            <Footer />
                        </>
                    } />

                    <Route path="/payment" element={
                        <>
                            <Header />

                            <Payment />
                            <Footer />
                        </>
                    } />

                    <Route path="/postad" element={
                        <>
                            <Header />

                            <PostAd />
                            <Footer />
                        </>
                    } />
                    <Route path="/aboutus" element={
                        <>
                            <Header />

                            <AboutUsPage />
                            <Footer />
                        </>
                    } />
                    <Route path="/help-center" element={
                        <>
                            <Header />

                            <HelpCenter />
                            <Footer />
                        </>
                    } />

                    <Route path="/accessibility" element={
                        <>
                            <Header />

                            <Accessibility />
                            <Footer />
                        </>
                    } />

                    <Route path="/terms" element={
                        <>
                            <Header />

                            <Terms />
                            <Footer />
                        </>
                    } />

                    <Route path="/Privacy" element={
                        <>
                            <Header />

                            <Privacy />
                            <Footer />
                        </>
                    } />

                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            </div>




            <div className="App">
                <ThemeProvider theme={theme}>
                    <ChatBot


                        headerTitle="Hunter-Bot"
                        steps={steps}
                        {...config}

                    />
                </ThemeProvider>
            </div>

        </Router>
        </UserContext.Provider>

    );
};

export default App;