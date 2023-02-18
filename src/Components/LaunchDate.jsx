import React, {useState, useEffect} from "react";
import {FaPlay} from 'react-icons/fa';
import autoVideo from "../resources/Smoke Loop.mp4";
const LaunchDate = () =>{
    const date = new Date();
    const [thisHr, setThisHr] = useState(null);
    const [today, setToday] = useState(null);
    const [min, setMin] = useState(null);
    const [sec, setSec] = useState(null);

    useEffect(()=>{
        setThisHr(date.getHours());
        setToday(date.getDay());
        setMin(date.getMinutes());
        setSec(date.getSeconds());

    });

    return(
        <>
        {/* <video autoPlay className = 'smoke' src = {autoVideo} type = "video/mp4"></video> */}
            <section className = 'l-date'>

                <div className="left-l-date">
                    <h1>Get Ready For Our ICO Launch</h1>
                    <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Suspendisse viverra lectus neque.
                    </p>
                    <br />
                    <p className = 'bottonx-area'>
                        <button>Learn More</button>
                        <button>
                            <FaPlay />
                            &nbsp;&nbsp;Video
                        </button>
                    </p>
                </div>
                <div className = 'right-l-date'>
                    <h1>{today} .{thisHr} . {min}. {sec}</h1>
                </div>
            </section>
        </>
    )
}


export default LaunchDate;