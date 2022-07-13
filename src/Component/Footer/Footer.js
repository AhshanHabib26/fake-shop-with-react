import React from 'react';

const Footer = () => {

    const date = new Date()
    const getYear = date.getFullYear()


    return (
        <div className=' mt-5 bg-success p-3 text-center text-white '>
            <p>Copyright © 2021 - {getYear} | All Right Reserved by <a  rel="noreferrer" target='_blank' className=' text-decoration-none text-info' href="https://habibdev.netlify.app/">Ahshan Habib</a>.</p>
        </div>
    );
};

export default Footer;