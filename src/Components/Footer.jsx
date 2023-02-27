import React from "react";
import {FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram} from 'react-icons/fa';
import {TfiLinkedin} from "react-icons/tfi";
import {Link} from "react-router-dom"

const Footer = () =>{
    
    return(
        <>
            <footer className = 'footer'>
                <div className = 'footer-content'>
                    <div className = 'footer-left'>

                        <Link to ='/https://www.facebook.com/carefulwatchers
'><FaFacebookSquare /></Link> <Link to = '/https://twitter.com/carefulwatchers
'><FaTwitter /></Link> <Link><TfiLinkedin to = '/https://www.linkedin.com/company/92740567/admin/'/></Link>
                        <Link to = '/https://www.instagram.com/carefulwatcher/'><FaInstagram /></Link>
                    </div>
                    <div className = 'footer-right'>&copy; careful Watchers 2023</div>
                </div>
            </footer>
        </>
    )
}


export default Footer;