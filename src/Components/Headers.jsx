import React from 'react';


export default function Header(){

    return (
        <>
    <PcHeader />
  
        </>
    );
}


const PcHeader = function(){
    const toggleMenu = ()=>{
         let wrapper = document.querySelector(".wrapper");
        let sideBar = document.querySelector(".side-bar");
        if(window.innerWidth >=600){
            wrapper.style.marginLeft = "-50vw";
        wrapper.style.transition = "0.3s ease-in-out";
        sideBar.style.marginRight = "0vw";
        sideBar.style.transition = "0.3s ease-in-out";
        }else{
            wrapper.style.marginLeft = "-100vw";
            wrapper.style.transition = "0.3s ease-in-out";
            sideBar.style.marginRight = "0vw";
            sideBar.style.transition = "0.3s ease-in-out";
        }
       

        

    }


    return(
        <>
            <header className = 'pc-header'>
                <nav className = 'pc-nav'>
                        <div className = 'pc-nav-left'>
                            Careful Watchers
                        </div>
                        <div className = 'pc-nav-right'>
                            <button className = 'menu-bar' onClick = {toggleMenu}>
                                <span className = 'bars bar1'>

                                </span>
                                <span className = 'bars bar2'>

                                </span>
                                <span className = 'bars bar3'>

                                </span>
                            </button>
                        </div>
                </nav>
            </header>
        </>
    );
};




const MobileHeader = function(){

    return(
        <>
            <header className = 'pc-header'>
                <nav className = 'pc-nav'>
                        <div className = 'pc-nav-left'>
                            Careful Watchers
                        </div>
                        <div className = 'pc-nav-right'>
                            <button className = 'menu-bar'>
                                <span className = 'bars bar1'>

                                </span>
                                <span className = 'bars bar2'>

                                </span>
                                <span className = 'bars bar3'>

                                </span>
                            </button>
                        </div>
                </nav>
            </header>
        </>
    );
};