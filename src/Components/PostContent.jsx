import React from 'react';
import { 
    FaFacebookF, 
    FaTwitter, 
    FaDribbble, 
    FaBehance } from "react-icons/fa";

export default function PostContent(props) {
    const { title, blogImage, blogText } = props.post;
    return (
        <div className="main-area bgs section-ptb">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="news-details">
                            {blogImage ? 
                            <div className="news-details-img mb-4">
                                <img className="img-fluid" src={blogImage} alt={title} />
                            </div>
                            : null }
                           <div className="post-details mb-4">
                                <p>{blogText}</p>
                           </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row news-meta py-2">
                    <div className="col-md-12 text-center">
                        <h4>Social Share</h4>
                        <div className="news-social">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="https://facebook.com/tortoiztheme"><i><FaFacebookF/></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://twitter.com/tortoizthemes"><i><FaTwitter/></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://dribbble.com/TortoizTeam"><i><FaDribbble/></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://behance.net/tortoizthemes"><i><FaBehance/></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
