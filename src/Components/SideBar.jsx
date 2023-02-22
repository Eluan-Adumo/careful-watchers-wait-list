import React from 'react';
import team1 from "../resources/PHOTO-2023-02-20-13-52-14_1.jpg";
import team2 from "../resources/pastor.jpg";
import team3 from "../resources/PHOTO-2023-02-20-13-52-14.jpg";
import team4 from "../resources/PHOTO-2023-02-20-13-52-15.jpg";
import team5 from "../resources/PHOTO-2023-02-21-13-44-02.jpg";
import ic1 from "../resources/icon-wallet.png";
import ic2 from "../resources/icon-cloud.png";
import ic3 from "../resources/icon-laptop.png";
import tImage from "../resources/person-04-hacker.jpg";
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
                            <span className= 'team-title'>Dr. Francis Nwebonyi</span>
                            <span className = 'team-off'>Cyber security consultant</span><br />
                            <span className = 'team-off'>Co-visionary</span>
                            </p>
                        </div>
                    </div>

                    <div className = 'each-team'>
                        
                            <img src = {team1} />
                        <div className = 'each-team-name'>
                            
                            <p>
                            <span className= 'team-title'>Tope Daisi</span>
                            <span className = 'team-off'>Penetration Tester</span><br />
                                <span className = 'team-off'>C.E.O</span>
                            </p>
                        </div>
                    </div>


                    <div className = 'each-team'>
                        
                            <img src = {team2} />
                        <div className = 'each-team-name'>
                            
                            <p>
                            <span className= 'team-title'>Segun Ebenezer Olaniyan</span>
                                <span className = 'team-off'>Cyber security analyst</span><br />
                                <span className = 'team-off'>Security Researcher</span>
                            </p>
                        </div>
                    </div>


                <div className = 'each-team'>
                        
                        <img src = {team4} />
                    <div className = 'each-team-name'>
                        
                        <p>
                        <span className= 'team-title'>Chinedu Junior Ihekwoaba</span>
                            <span className = 'team-off'>Social media manager</span>
                        </p>
                    </div>
                </div>


                <div className = 'each-team'>
                        
                        <img src = {team5} />
                    <div className = 'each-team-name'>
                        
                        <p>
                        <span className= 'team-title'>Tony Obisesan</span>
                            <span className = 'team-off'>Cyber security analiyst</span><br />
                            <span className = 'team-off'>Co-founder</span>

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
                        The Problem
                    </div>
                    <div className = 'sbm-intro'>
                    Web app monitoring and audit services are highly 
                    required due to security concerns raised by the 
                    rising popularity of websites with web applications. 
                    The likelihood of having harmful information increases 
                    as web applications are more easily created and shared, 
                    Careful 
                    Watchers offers a realtime web security solutions 
                    as listed:
                    </div>
<br />


<div className = 'sbm-header'>
                        Our Solution
                    </div>
                    <div className = 'sbm-intro'>
                    Vulnerability scanning and Assessment, 
                    Hot Based Scanning, Database Scanning, 
                    Full Domain Directory Enumeration.,Cloud 
                    Hosting Vulnerability Enumeration., Remediation, 
                    Mitigation Of Threats,and Removal 
                    Of Virus/Malware and more.                    
                    </div>

                    <img src = {tImage} />
                </div>



                {/* CONTACT */}
                <div className = 'side-bar-faq'>
                <br />
                <div className = 'sbc-header'>
                        FAQ
                </div>

                <ul>
                    <li>
                        <div className = 'faq-title'>
                            <span className = 'faq-title-title'>Who are we? (Careful Watchers)</span>
                            <span className = 'faq-title-icon' onClick = {()=>{
                                if(document.querySelector("#faq-body-1").style.display == "none"){
                                    document.querySelector("#faq-body-1").style.display = "block";
                                }else{
                                    document.querySelector("#faq-body-1").style.display = "none";
                                }
                                
                            }}>
                                +
                            </span>
                        </div>
                        <div className = 'faq-body' id = 'faq-body-1'>
                        Careful Watchers is a Web Penetration Testing Company 
                        that helps you identify and fix the latest security issues, 
                        keeping your web application safe using a 
                        combination of manual and automated penetration Testing.
                        </div>
                    </li>

                    <li>
                        <div className = 'faq-title'>
                        
                        


                        <span className = 'faq-title-title'>
                        Why is there a Careful Watchers Wait-list?
                            </span>
                            <span className = 'faq-title-icon' onClick = {()=>{
                                if(document.querySelector("#faq-body-2").style.display == "none"){
                                    document.querySelector("#faq-body-2").style.display = "block";
                                }else{
                                    document.querySelector("#faq-body-2").style.display = "none";
                                }
                                
                            }}>
                                +
                            </span>  
                            </div>                      
                        <div className = 'faq-body' id = 'faq-body-2'>
                        A website waitlist can be important for several reasons. 
                        First, it allows businesses or organizations to gauge interest 
                        in a product or service before it is officially released. 
                        This can help them plan for inventory and resources needed. 
                        Additionally, a waitlist can create a sense of exclusivity and 
                        anticipation, which can drive demand.
                        </div>
                    </li>


                    <li>
                        <div className = 'faq-title'>
                            <span className = 'faq-title-title'>
                                What is a penetration testing?
                            </span>
                            <span className = 'faq-title-icon' onClick = {()=>{
                                document.querySelector("#faq-body-3").style.transition = "all 0.4s ease";
                                                                if(document.querySelector("#faq-body-3").style.display == "none"){
                                                                    document.querySelector("#faq-body-3").style.display = "block";
                                                                }else{
                                                                    document.querySelector("#faq-body-3").style.display = "none";
                                                                }
                                                                
                            }}>
                                    +
                            </span>  
                        </div>
                        <div className = 'faq-body' id = 'faq-body-3'>
                        A question not enough people ask is this; Carefulwatchers assume that, 
                        many people often neglect this due to the lack of awareness.<br />

                        A penetration test is a security assessment that simulates an 
                        attack by a malicious party on a network or application in order to 
                        identify security flaws. This test is coordinated ahead of time and 
                        executed with an attempt to avoid damaging any system. At the end of the test, 
                        your pen testing firm like Carefulwatchers will provide you with a report that 
                        includes found issues and 
                        weaknesses along with suggestions for how to remediate them
                        </div>
                    </li>

                </ul>
                </div>
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