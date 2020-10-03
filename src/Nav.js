import React, {useState,useEffect} from 'react';
import "./Nav.css"

function Nav (){
    const [show,handleShow]= useState(false)
    useEffect(()=> {
        window.addEventListener("scroll",()=> {
            if (window.scrolly > 100) {
                handleShow(true);
            } else
                handleShow(false);

        });
        return ()=> {
            window.removeEventListener("scroll")
        };

    },[]);
    return (
        <div>
            <div className={`nav ${show && "nav__black"}`}>
                <img
                    className="nav__logo"
                    src="https://i.pinimg.com/originals/ae/a6/f5/aea6f543a891c8bb4708ed55bdb4cef0.png"
                    alt="Netflix Logo"
                />
                <img
                className="nav__avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="img_avatar"
                />
            </div>
        </div>
    );

}
export default Nav;