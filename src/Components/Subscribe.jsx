import React, {useState} from "react";
import Header from "./Headers";
import Footer from "./Footer";
import SideBar from "./SideBar";
import axios from "axios";
const Subscribe = ()=>{
    const [userEmail, setUEmail]= useState("");
    const [userFName, setUFName] = useState("");
    const [userLName, setULName] = useState("");
    const [userCompany, setUCompany] = useState("");
    const sendSubscriptionMail = async function(){

          if(userEmail.length < 3 || userFName.length < 3 || userEmail.length < 3 || userCompany.length < 3){
              console.log("form invalid");
          }else{
              let url = "http://localhost/cf-waitlist-backend/middle-ware/middle-ware.php";
              const dataToSend = {
                  "user_f_name" : userFName,
                  "user_l_name" : userLName,
                  "user_email" : userEmail,
                  "user_company" : userCompany
              }


              // const req = await axios.post(url,{data});
              const req = await axios.post(url, {
                  "user_f_name" : userFName,
                  "user_l_name" : userLName,
                  "user_email" : userEmail,
                  "user_company" : userCompany
              });
              console.log(req);
          }


    }
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
           <form   method = "post" action =  "https://getform.io/f/915550c3-5723-47ae-9fb2-9d6c5e9f0af3" className = 'page-right'>
            <div className = 'name-area'>
                <input type = 'text' placeholder = 'First name' id = 'f-name' onChange={(e)=>{
                     setUFName(e.target.value);
                }
                }/>
                <input type = 'text' placeholder = 'Last Name' id = 'l-name' onChange = {(e)=>{
                    setULName(e.target.value);
                }
                }/>
            </div>
            <div className = 'email-area'>
                <input type = 'Email' placeholder = 'email address' id = 'email-main' onChange={(e)=>{
                    setUEmail(e.target.value);
                }
                }/>
            </div>
            <div className = 'company-area'>
                <input type = 'text' placeholder="Company" id = 'company-main' onChange={(e)=>{
                setUCompany(e.target.value);
                }
                }/>

            </div>

               <input type="hidden" name="_autoresponse" value={message} />
            <div>
                {/*onClick={sendSubscriptionMail}*/}
                <input type = 'submit'  value ='Join The Waitlist' id = 'join-btn' />
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