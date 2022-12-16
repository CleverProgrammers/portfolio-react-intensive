import React from 'react';
import { FaExclamationTriangle } from "react-icons/fa";

export default function FourZeroContent() {
    return (
        <div className="error-section pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto text-center">
                        <div className="error-msg-wrapper">
                            <div className="error-msg">
                                <h1>4 <span className="exc-icon">
                                    <i><FaExclamationTriangle/></i>
                                    </span> 0
                                </h1>
                                <h5>Opps! Page is not found</h5>
                                <div className="back-button mt-4">
                                    <a href="/" className="ct-btn">Go to Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
