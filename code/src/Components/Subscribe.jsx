import React from "react";
import Header from "./Headers";
import Footer from "./Footer";
import SideBar from "./SideBar";
const Subscribe = ()=>{
    const message = `Thank you for your interest in our service and for signing up for our waitlist! We are thrilled to have you on board and look forward to offering you our best services.
                As you know, we have limited availability and high demand for our offerings, and we appreciate your patience and understanding as we work to accommodate everyone on our waitlist.
                Rest assured that we will keep you updated on your status and notify you as soon as a spot becomes available.
                In the meantime, please feel free to reach out to us if you have any questions or concerns. We appreciate your trust in us and are confident that you will find our service worth the wait.
                Thank you again for your interest in our cyber security service!
                Best regards,
                Careful Watchers`;
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

               <input type="hidden" name="_autoresponse" value={message} />
            <div>
                <input type = 'Submit' value ='Join The Waitlist' id = 'join-btn' />
            </div>
           </form>
        </section>
        <Footer />
        </section>
c
        </>
    )
}


export default Subscribe;