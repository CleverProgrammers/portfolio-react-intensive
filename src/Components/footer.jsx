import React from 'react'
import { FaAngleUp } from "react-icons/fa";
import { animateScroll as scroll } from 'react-scroll';
export default function footer() {
    const goHome = (e) => {
        e.preventDefault();
        scroll.scrollToTop();
    }
    return (
        <div className="footer-area">
            <div className="copyright-text text-center">
                <p className="pt-20"><i className="fas fa-copyright mr-10"></i>Copyright - Tortoiz | All Rights Reserved</p>
            </div>
            <div className="back-to-top">
                <a href="#" onClick={goHome}><i><FaAngleUp/></i></a>
            </div>
        </div>
    )
}
