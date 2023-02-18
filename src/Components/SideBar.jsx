import React from 'react';
import team1 from "../resources/person-02.jpg";
import team2 from "../resources/person-04.jpg";
import ic1 from "../resources/icon-wallet.png";
import ic2 from "../resources/icon-cloud.png";
import ic3 from "../resources/icon-laptop.png";
import tImage from "../resources/image-01.jpg";
import map from "../resources/map.png";

const SideBar = ()=>{
    const hideMenu = ()=>{
        let wrapper = document.querySelector(".wrapper");
        let sideBar = document.querySelector(".side-bar");
        if(window.innerWidth >=600){
            wrapper.style.marginLeft = "0vw";
            wrapper.style.transition = "0.3s ease-in-out";
            sideBar.style.marginRight = "-50vw";
            sideBar.style.transition = "0.3s ease-in-out";
        }else{
            wrapper.style.marginLeft = "0vw";
        wrapper.style.transition = "0.3s ease-in-out";
        sideBar.style.marginRight = "-100vw";
        sideBar.style.transition = "0.3s ease-in-out";
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
                Uis commodo arcu at egestas vehicula. Maecenas auctor sagittis nulla 
                laoreet vestibulum.
                 Vivamus congue diam blandit quam efficitur, vel mattis lacus feugiat. 
                 Integer tempus interdum felis, ut luctus nunc.
                </div>
                <div className = 'side-bar-team'>
                    <div className = 'each-team'>
                        
                            <img src = {team1} />
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
                            <span className= 'team-title'>Jane Doe</span>
                                <span className = 'team-off'>Company CEO</span>
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
                    Nam rhoncus elit ut nibh sagittis varius. Maecenas aliquam ex ut magna cursus pulvinar
                    </div>
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
                        <div className = 'sbc-map-main'>
                            <img src = {map} className = 'map-image' />
                        </div>
                    </div>


                    <div className = 'address-div'>
                        <h2>Address</h2>
                        <p>
                            478 Nancy Street<br />
                            +1 919-571-2528<br />
                            hello@example.com
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