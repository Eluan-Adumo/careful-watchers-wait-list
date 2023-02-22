import React, {useState, useEffect} from "react";
import {FaPlay} from 'react-icons/fa';
import autoVideo from "../resources/Smoke Loop.mp4";
const LaunchDate = () =>{



    const date = new Date();
    const [thisHr, setThisHr] = useState(null);
    const [today, setToday] = useState(null);
    const [min, setMin] = useState(null);
    const [sec, setSec] = useState(null);



    function getTimeRemaining(endtime){
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor( (total/1000) % 60 );
        const minutes = Math.floor( (total/1000/60) % 60 );
        const hours = Math.floor( (total/(1000*60*60)) % 24 );
        const days = Math.floor( total/(1000*60*60*24) );
      
        return {
          total,
          days,
          hours,
          minutes,
          seconds
        };
      }


      const deadline = 'February 27 2023';
      function initializeClock(id, endtime) {
        const clock = document.getElementById(id);
        function updateClock(){
            const t = getTimeRemaining(endtime);
            // clock.innerHTML = 'days: ' + t.days + '<br>' +
            //                   'hours: '+ t.hours + '<br>' +
            //                   'minutes: ' + t.minutes + '<br>' +
            //                   'seconds: ' + t.seconds;
            clock.innerHTML = `
            <ul class = 'time-ul'>
            <li>
            <h1 class = 'value'>${t.days}</h1> 
            <span class = 'key'>Days</span>
            
            </li> 
            <li>
            <h1 class = 'value'>
            ${t.hours} 
            </h1> 
            <span class = 'key'>Hours</span>
            
            </li> 
            <li>
            <h1 class = 'value'>
            ${t.minutes} 
            </h1> 
            <span class = 'key'>Minutes</span>
            
            </li> 
            <li>
            <h1 class = 'value'>
            ${t.seconds}
            </h1> 
            <span class = 'key'>Seconds</span>
            </li>
            
            </ul>`;
            if (t.total <= 0) {
              clearInterval(timeinterval);
            }
          }
          
          updateClock(); // run function once at first to avoid delay
          var timeinterval = setInterval(updateClock,1000);
      }

    useEffect(()=>{
        initializeClock("clock-display", deadline);

    });

    return(
        <>
        {/* <video autoPlay className = 'smoke' src = {autoVideo} type = "video/mp4"></video> */}
            <section className = 'l-date'>

                <div className="left-l-date">
                    <h1>Get Ready For Our Launch</h1>
                    <p>
                    Careful Watchers offers comprehensive cyber 
                    security solutions to help Businesses, 
                    Organizations and Individuals protect 
                    themselves from digital threats.
                    </p>
                    <br />
                    <p className = 'bottonx-area'>
                        <input type = 'text' placeholder = 'Enter email address' className = 'email-sub-field' />
                        <button className = 'reg-sub-btn'>Subscribe</button>
                    </p>
                </div>
                <div className = 'right-l-date'>
                    <h1 id = 'clock-display'>{today} .{thisHr} . {min}. {sec}</h1>
                </div>
            </section>
        </>
    )
}


export default LaunchDate;