import React from 'react';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
        <>
            <div className='bg-c-alabaster'>
                <Header />
                <Contact />
                <Footer />
                <div className='flex justify-center'>&copy; {new Date().getFullYear()} All rights reserved.</div>
            </div>
        </>
    );
};

export default ContactPage;