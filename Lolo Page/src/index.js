import React from 'react';
import  ReactDOM  from 'react-dom';
import  Background from './components/background/background';
import Navbar from './components/navbar/navbar';
import Title from './components/title/title';
import AboutMe from './components/aboutMe/aboutMe';
import ContactForm from './components/contactForm/contactForm';

ReactDOM.render(
<div>
    <Background />  
    <Navbar />
    <Title />
    <AboutMe />
    <ContactForm />
</div>
, document.getElementById('root'));