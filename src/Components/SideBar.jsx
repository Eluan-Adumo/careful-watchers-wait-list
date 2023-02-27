import React, {useEffect} from 'react';
import team1 from "../resources/PHOTO-2023-02-20-13-52-14_1.jpg";
import team2 from "../resources/pastor.jpg";
import team3 from "../resources/PHOTO-2023-02-20-13-52-14.jpg";
import team4 from "../resources/PHOTO-2023-02-20-13-52-15.jpg";
import team5 from "../resources/PHOTO-2023-02-21-13-44-02.jpg";
import team6  from "../resources/datubo.png";
import team7 from "../resources/ifeolowa.png";

import ic1 from "../resources/icon-wallet.png";
import ic2 from "../resources/icon-cloud.png";
import ic3 from "../resources/icon-laptop.png";
import tImage from "../resources/person-04-hacker.jpg";
import {FaBrain, FaSun} from "react-icons/fa";
import {BsFillQuestionCircleFill} from "react-icons/bs";
import {Link} from "react-router-dom";


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

    useEffect(()=>{
        // Create the script tag, set the appropriate attributes

    });

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
                {/* <div className = 'side-bar-team'>

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
                        
                        <img src = {team5} />
                    <div className = 'each-team-name'>
                        
                        <p>
                        <span className= 'team-title'>Tony Obisesan</span>
                            <span className = 'team-off'>Cyber security analiyst</span><br />
                            <span className = 'team-off'>Co-founder</span>

                        </p>
                    </div>
                </div> 

                <div className = 'each-team'>
                        
                        <img src = {team6} />
                    <div className = 'each-team-name'>
                        
                        <p>
                        <span className= 'team-title'>Dabotubo Abiye Briggs</span>
                            <span className = 'team-off'>Cyber Security Specialist</span><br />
                            <span className = 'team-off'>COO Co-founder</span>

                        </p>
                    </div>
                </div>  

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
                        
                            <img src = {team7} />
                        <div className = 'each-team-name'>
                            
                            <p>
                            <span className= 'team-title'>Ifeoluway Oloyede</span>
                                <span className = 'team-off'>Cyber Security Analyst</span><br />
                                <span className = 'team-off'>Non-Executive Director</span>
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




                              
                </div> */}

                {/* <div className = 'side-bar-feats'>
                <div className = 'side-bar-feat-title'>Features</div>


                </div> */}

                <div className = 'side-bar-mission'>
                    <div className = 'side-bar-feat-title'>
                    <span className = 'icons-side'><FaBrain /></span><br />
                        <span className = 'text-side'>The Problem</span>  
                    </div>
                    <div className = 'sbm-intro'>
                    Cyber attacks are becoming more prevalent, which 
                    might have far-reaching effects on individuals, 
                    companies, and society at large. It is crucial to 
                    take preventative measures to safeguard against cyber 
                    threats, such as investing in cybersecurity, raising public 
                    awareness and educating people about cyber threats, and 
                    creating plans for defending against cyberattacks.
                    </div>
<br />


                    <div className = 'sbm-header'>
                        <span className = 'icons-side'><FaSun /></span><br />
                        <span className = 'text-side'>Our solution</span>  
                    </div>
                    <div className = 'sbm-intro'>
                    Careful Watchers solve a range of problems related to 
                    protecting digital systems and data from unauthorized access, 
                    theft, damage, and other forms of cyber threats. 
                    These threats can come in various forms, such as hacking, malware, phishing, 
                    ransomware, and social engineering attacks.                   
                    </div>

                <br />
                    <div className = 'sbm-header'>
                        <span className = 'icons-side'><BsFillQuestionCircleFill /></span><br />
                        <span className = 'text-side'>Why choose us?</span>  
                    </div>
                    <div className = 'sbm-intro'>
                    Careful Watchers is an esteemed cyber security company that offers a 
                    range of services to help businesses protect their digital assets from cyber attacks. 
                    Some reasons why 
                    someone might choose Careful Watchers as their cyber security provider includ.                   
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
                            <span className = 'faq-title-title'>Who are we and where are we located</span>
                            <span className = 'faq-title-icon' onClick = {()=>{
                                if(document.querySelector("#faq-body-1").style.display === "none"){
                                    document.querySelector("#faq-body-1").style.display = "block";
                                }else{
                                    document.querySelector("#faq-body-1").style.display = "none";
                                }
                                
                            }}>
                                +
                            </span>
                        </div>
                        <div className = 'faq-body' id = 'faq-body-1'>
                        Careful Watcher's is a cyber security company 
                        located in Ireland. We are excited to be 
                        headquartered in one of the most vibrant and 
                        innovative environments in Europe.<br />


                        Our team of experts has years of experience in the 
                        field of cyber security, and we offer a wide range of 
                        services to help protect your organization from cyber threats. 
                        From risk assessments and vulnerability testing to incident 
                        response and managed security services, 
                        we are here to help you stay safe and secure online.
                        </div>
                    </li>

                    <li>
                        <div className = 'faq-title'>
                        
                        


                        <span className = 'faq-title-title'>
                        What types of cyber security services do Careful Watchers offer?
                            </span>
                            <span className = 'faq-title-icon' onClick = {()=>{
                                if(document.querySelector("#faq-body-2").style.display === "none"){
                                    document.querySelector("#faq-body-2").style.display = "block";
                                }else{
                                    document.querySelector("#faq-body-2").style.display = "none";
                                }
                                
                            }}>
                                +
                            </span>  
                            </div>                      
                        <div className = 'faq-body' id = 'faq-body-2'>
                        Careful Watchers offers a range of services to protect individuals and 
                        organizations 
                        from cyber threats which include:<br />
                        <ul>

                            <li>
                            Vulnerability assessment: Identifying potential 
                            vulnerabilities in an organization's IT infrastructure 
                            and providing recommendations to mitigate the risks.
                            </li>


                            <li>
                            Penetration testing: Simulating a cyber attack to test an 
                            organization's security 
                            controls and identify areas for improvement.
                            </li>

                            <li>

                            Security architecture design and review: 
                            Designing, reviewing and implementing security 
                            architecture to protect against cyber threats and ensure 
                            compliance with regulations and industry standards.
                            </li>
                            <li>
                            Security training and awareness: Providing 
                            education and training programs for employees to raise 
                            awareness of cyber threats and best practices to prevent them
                            </li>
                            <li>
                            Incident response and management: 
                            Providing 24/7 incident response services 
                            to help organizations 
                            quickly identify, contain, and recover from cyber-attacks.
                            </li>
                            <li>
                            Incident response and management: Providing 24/7 
                            incident response services to help organizations quickly 
                            identify, contain, and recover from cyber-attacks. 
                            </li>
                            <li>
                            Cloud security: Ensuring that cloud-based services and 
                            applications are secure and that sensitive data is protected.

                            </li>
                            <li>
                            Compliance and regulatory services: Assisting 
                            organizations in meeting compliance requirements such as HIPAA, GDPR, 
                            PCI-DSS, and other industry-specific regulations.
                            </li>
                            <li>
                            Managed security services: Providing ongoing security monitoring, 
                            management, and support services to 
                            ensure that an organization's security posture is maintained and up-to-date.
                            </li>
                        </ul>
                        </div>
                    </li>


                    <li>
                        <div className = 'faq-title'>
                            <span className = 'faq-title-title'>
                            How can Careful Watchers help protect my personal or business data from cyber-attacks?
                            </span>
                            <span className = 'faq-title-icon' onClick = {()=>{
                                document.querySelector("#faq-body-3").style.transition = "all 0.4s ease";
                                                                if(document.querySelector("#faq-body-3").style.display === "none"){
                                                                    document.querySelector("#faq-body-3").style.display = "block";
                                                                }else{
                                                                    document.querySelector("#faq-body-3").style.display = "none";
                                                                }
                                                                
                            }}>
                                    +
                            </span>  
                        </div>
                        <div className = 'faq-body' id = 'faq-body-3'>
                        A queCareful watchers can help protect your personal or 
                        business data from cyber-attacks by keeping a vigilant eye on 
                        your digital systems and infrastructure, and by taking proactive 
                        measures to prevent and 
                        mitigate potential threats.<br />

                        Here are some ways in which careful watchers can help protect your data 
                        from cyber attacks:

                        <ul>

                            <li>
                            Monitoring for suspicious activity: Careful watchers can 
                            monitor your digital systems for any suspicious activity or 
                            anomalies that may indicate a cyber attack is underway. 
                            By doing so, they can catch potential 
                            threats before they cause any damage.
                            </li>

                            <li>
                            Conducting regular vulnerability assessments: 
                            Careful watchers can conduct regular vulnerability 
                            assessments to identify any weaknesses or vulnerabilities in your digital 
                            systems that could be exploited by cyber attackers.
                            </li>

                            <li>
                            Implementing strong security measures: 
                            Careful watchers can help implement strong security 
                            measures such as firewalls, anti-virus software, 
                            intrusion detection systems, and access 
                            controls to help prevent cyber attacks from occurring
                            </li>
                            <li>
                            Providing training and education: Careful watchers provide 
                            training and education to your employees on how to identify 
                            and respond to potential cyber threats, such as phishing emails, 
                            suspicious links, or other malicious activity.
                            </li>

                            <li>
                            Responding to security incidents: In the event of a 
                            security incident or cyber attack, careful watchers can provide a 
                            rapid response to help mitigate the damage and 
                            prevent further breaches from occurring.

                            </li>
                        </ul>
                        </div>
                    </li>




                    <li>
                        <div className = 'faq-title'>
                            <span className = 'faq-title-title'>
                            Does Careful Watchers offer 24/7 monitoring and response                             </span>
                            <span className = 'faq-title-icon' onClick = {()=>{
                                document.querySelector("#faq-body-4").style.transition = "all 0.4s ease";
                                                                if(document.querySelector("#faq-body-4").style.display === "none"){
                                                                    document.querySelector("#faq-body-4").style.display = "block";
                                                                }else{
                                                                    document.querySelector("#faq-body-4").style.display = "none";
                                                                }
                                                                
                            }}>
                                    +
                            </span>  
                        </div>
                        <div className = 'faq-body' id = 'faq-body-4'>
                            <b>
                            Does Careful Watchers offer 24/7 monitoring and response 
                            </b>
                            <p>
                            Careful Watchers offers 24/7 monitoring and response 
                            services in the event of a security breach. These services 
                            would be provided remotely, with the Careful Watchers monitoring 
                            your network and systems for any signs of suspicious activity or attacks. 
                            If a security breach is detected, Careful Watcher's security analysts can take action to contain the breach 
                            and minimize the impact of the attack.
                            </p>


                        </div>




                    </li>




                </ul>
                </div>
                <Link to = '/subscribe'><input type = 'button' value = 'Join the Waitlist' className = 'jtw'/></Link>
                <div className = 'side-bar-contact'>
                    <div className = 'sbc-header'>
                        Contact
                    </div>
                    <div className = 'sbc-map'>
                        <h2>Map</h2>
                        <br />
                        <div className = 'sbc-map-main'>
                            <MapView />
                        </div>

                    </div>




                    <div className = 'address-div'>
                        <h2>Address</h2><br />
                        <p>

                            +353-87-395-5505<br />
                            https://carefulwatchers.co.uk
                            <br />
                            <span className = 'email-add'>carefulwatcherz@gmail.com</span>
                        </p>
                    </div>

                    <form action = 'https://formsubmit.co/support@carefulwatchers.co.uk' method = "post" className = 'send-msg'>
                        <h2>Contact Form</h2>
                        <div className = 'cf-names'>
                            <input type = 'text' placeholder='Your Name' />
                            <input type = 'email' placeholder = 'Your Email' />
                        </div>
                        <div className = 'cf-message'>
                            <textarea className = 'tr' placeholder='Your Message'></textarea>
                        </div>
                        <button>Send Message</button>
                    </form>
                </div>



            </div>
        </section>
        </>
    )
}

const MapView = ()=>{

    return(

        <>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="100%" height="100%" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=Dublin Tyrells town&t=&z=9&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    <Link to="https://2yu.co">2yu</Link><br />
                    {/*<style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}</style>*/}
                    <Link to="https://embedgooglemap.2yu.co/">html embed google map</Link>
                    {/*<style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style>*/}
                </div>
            </div>
        </>
    )
}
export default SideBar