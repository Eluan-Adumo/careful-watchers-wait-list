import React from "react";
import {FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram} from 'react-icons/fa';
import {TfiLinkedin} from "react-icons/tfi";

const Footer = () =>{
    
    return(
        <>
            <footer className = 'footer'>
                <div className = 'footer-content'>
                    <div className = 'footer-left'>
                        <FaFacebookSquare /> <FaTwitter /> <TfiLinkedin /> <FaInstagram />
                    </div>
                    <div className = 'footer-right'>&copy; careful Watchers 2023</div>
                </div>
            </footer>
        </>
    )
}


export default Footer;