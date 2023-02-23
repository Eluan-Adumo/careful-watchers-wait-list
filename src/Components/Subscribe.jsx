import React from "react";
import Header from "./Headers";
import Footer from "./Footer";
import SideBar from "./SideBar";
const Subscribe = ()=>{

    return(
        <>
        
        <section className = 'wrapper'>
        <Header /> 
        <section className = 'whole-page'>
           <div className = 'page-left'>
                <h2>
                    Join the waitlist
                </h2>
                <p>
                    See how carefulwatchers can transform your 
                    organization's security-awareness.
                </p>
           </div>
           <form action = 'https://formsubmit.co/support@carefulwatchers.co.uk' method = 'post' className = 'page-right'>
            <div className = 'name-area'>
                <input type = 'text' placeholder = 'First name' id = 'f-name'/>
                <input type = 'text' placeholder = 'Last Name' id = 'l-name'/>
            </div>
            <div className = 'email-area'>
                <input type = 'Email' placeholder = 'email address' id = 'email-main'/>
            </div>
            <div className = 'company-area'>
                <input type = 'text' placeholder="Company" id = 'company-main'/>

            </div>
            <div>
                <input type = 'button' value ='Join The Waitlist' id = 'join-btn' />
            </div>
           </form>
        </section>
        <Footer />
        </section>
        <SideBar />
        
        </>
    )
}


export default Subscribe;