import React from 'react';
import team1 from "../resources/PHOTO-2023-02-20-13-52-14_1.jpg";
import team2 from "../resources/PHOTO-2023-02-20-13-52-14_2.jpg";
import team3 from "../resources/PHOTO-2023-02-20-13-52-14.jpg";
import team4 from "../resources/PHOTO-2023-02-20-13-52-15.jpg";
import team5 from "../resources/PHOTO-2023-02-21-13-44-02.jpg";
import ic1 from "../resources/icon-wallet.png";
import ic2 from "../resources/icon-cloud.png";
import ic3 from "../resources/icon-laptop.png";
import tImage from "../resources/image-01.jpg";
import map from "../resources/map.png";

const SideBar = ()=>{
    // HIDE SIDE BAR
    const hideMenu = ()=>{
        let wrapper = document.querySelector(".wrapper");
        let sideBar = document.querySelector(".side-bar");
        if(window.innerWidth >=600){
            wrapper.style.marginLeft = "0vw";
            wrapper.style.transition = "0.3s ease-in-out";
            
            sideBar.style.transition = "0.3s ease-in-out";
            sideBar.style.marginRight = "-50vw";
            sideBar.style.width = "0vw";
            
        }else{
            
        wrapper.style.marginLeft = "0vw";
        wrapper.style.transition = "0.3s ease-in-out";
        sideBar.style.transition = "0.3s ease-in-out";
        sideBar.style.marginRight = "-100vw";
        sideBar.style.width = "0vw";
       
        }
        
    }
    return(
        <>
        <section className = 'side-bar'>
            <div className = 'side-bar-content'>
                <div className = 'side-bar-header'>
                    <div className = 'side-bar-header-left'>
                        About Us
                    </div>
                    <div className = 'side-bar-header-right'>
                        <input type = 'button' value = 'X' onClick={hideMenu} />
                    </div>
                </div>
                <div className='side-bar-intro'>
                Careful Watchers offers comprehensive cyber 
                    security solutions to help Businesses, 
                    Organizations and Individuals protect 
                    themselves from digital threats.
                </div>
                <div className = 'side-bar-team'>
                    <div className = 'each-team'>
                        
                            <img src = {team3} />
                        <div className = 'each-team-name'>
                            
                            <p>
                            <span className= 'team-title'>Jane Doe</span>
                            <span className = 'team-off'>Company CEO</span>
                            </p>
                        </div>
                    </div>

                    <div className = 'each-team'>
                        
                            <img src = {team1} />
                        <div className = 'each-team-name'>
                            
                            <p>
                            <span className= 'team-title'>John Doe</span>
                                <span className = 'team-off'>Marketing Guru</span>
                            </p>
                        </div>
                    </div>


                    <div className = 'each-team'>
                        
                            <img src = {team2} />
                        <div className = 'each-team-name'>
                            
                            <p>
                            <span className= 'team-title'>Susan Erwing</span>
                                <span className = 'team-off'>Support</span>
                            </p>
                        </div>
                    </div>


                <div className = 'each-team'>
                        
                        <img src = {team4} />
                    <div className = 'each-team-name'>
                        
                        <p>
                        <span className= 'team-title'>Susan Erwing</span>
                            <span className = 'team-off'>Support</span>
                        </p>
                    </div>
                </div>


                <div className = 'each-team'>
                        
                        <img src = {team5} />
                    <div className = 'each-team-name'>
                        
                        <p>
                        <span className= 'team-title'>Susan Erwing</span>
                            <span className = 'team-off'>Support</span>
                        </p>
                    </div>
                </div>                
                </div>

                <div className = 'side-bar-feats'>
                <div className = 'side-bar-feat-title'>Features</div>
                <div className = 'side-bar-menus'>
                    <div className = 'each-side-bar-menu'>
                        <div className = 'icon-area'>
                        <img src = {ic1} />
                        </div>
                        <p className = 'tit-area'>
                            Easy Payments
                        </p>
                        <p className = 'des-area'>
                        Vivamus congue diam blandit 
                        quam efficitur, 
                        vel mattis lacus feugiat. 
                        
                        </p>
                    </div>


                    <div className = 'each-side-bar-menu'>
                        <div className = 'icon-area'>
                            <img src = {ic2} />
                        </div>
                        <p className = 'tit-area'>
                            Secure Cloud
                        </p>
                        <p className = 'des-area'>
                        Vivamus congue diam blandit 
                        quam efficitur, 
                        vel mattis lacus feugiat. 
                        
                        </p>
                    </div>



                    <div className = 'each-side-bar-menu'>
                        <div className = 'icon-area'>
                        <img src = {ic3} />
                        </div>
                        <p className = 'tit-area'>
                           Responsive
                        </p>
                        <p className = 'des-area'>
                        Vivamus congue diam blandit 
                        quam efficitur, 
                        vel mattis lacus feugiat. 
                        
                        </p>
                    </div>
                </div>

                </div>

                <div className = 'side-bar-mission'>
                    <div className = 'sbm-header'>
                        Our Mission
                    </div>
                    <div className = 'sbm-intro'>
                    At Careful Watchers we are also dedicated to offering the top cyber security services to 
our customers. Our team of professionals has a pack of experience dealing with a variety 
of cyber security risks, and we are constantly available to assist businesses in enhancing 
their security posture and defending themselves against online dangers.                    </div>
                    <ul className = 'sbm-ul'>
                        <li>
                            Nulla Facilisi
                        </li>
                        <li>
                            Donec Fringilla dui
                        </li>
                        <li>
                            Dapibus, ut placerat
                        </li>
                    </ul>
                    <img src = {tImage} />
                </div>



                {/* CONTACT */}
                <div className = 'side-bar-contact'>
                    <div className = 'sbc-header'>
                        Contact
                    </div>
                    <div className = 'sbc-map'>
                        <h2>Map</h2>
                        <br />
                        <div className = 'sbc-map-main'>
                            <img src = {map} className = 'map-image' />
                        </div>
                    </div>


                    <div className = 'address-div'>
                        <h2>Address</h2><br />
                        <p>
                            478 Nancy Street<br />
                            +44-7442-104683<br />
                            +353-87-395-5505<br />
                            https://carefulwatchers.co.uk
                            <br />
                            <span className = 'email-add'>carefulwatcherz@gmail.com</span>
                        </p>
                    </div>

                    <div className = 'send-msg'>
                        <h2>Contact Form</h2>
                        <div className = 'cf-names'>
                            <input type = 'text' placeholder='Your Name' />
                            <input type = 'email' placeholder = 'Your Email' />
                        </div>
                        <div className = 'cf-message'>
                            <textarea className = 'tr' placeholder='Your Message'></textarea>
                        </div>
                        <button>Send Message</button>
                    </div>
                </div>



            </div>
        </section>
        </>
    )
}


export default SideBar