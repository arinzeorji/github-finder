import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, logo }) => {
    return (
        <nav className="bg-blue dt w-100 border-box pa3 mt3">
            <i className={logo}></i>
            <Link to="/" className="dtc v-mid white m5 f4 link dim w-40">{title}</Link>
            <div className="dtc v-mid w-60 tr">
                <Link to="/" className="link dim white f4 f4-ns dib mr-5 mr5-ns">Home</Link>
                <Link to="/about" className="link dim white f4 f4-ns dib mr-5 mr5-ns">About Us</Link>

            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Contact Finder',
    logo: 'fab fa-github'
}

Navbar.propType = {
    title: PropTypes.array.isRequired,
    logo: PropTypes.string
}

export default Navbar;
