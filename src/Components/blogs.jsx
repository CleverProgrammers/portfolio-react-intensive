import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import blogPosts from "../data/blog_posts";
import SectionTitle from "./section_title";
export default function Blogs() {
    const [posts,setPosts] = useState([]);
    const [featurePosts,setFeaturePosts] = useState([]);
    const [withoutFeaturePosts, setWithoutFeaturePosts] = useState([]);
    const smBlogPostNumbers = 3;
    const featurePostsNumber = 2;
    useEffect(()=>{
        const postsData = blogPosts.posts;
        setPosts(postsData);
        setFeaturePosts(blogPosts.posts.filter(posts => posts.featured == true));
        setWithoutFeaturePosts(blogPosts.posts.filter(posts => posts.featured !== true));
    }, [posts]);

    return (
        <div className="news-area pt-110 bgs" id="blog">
            <div className="container">
                <SectionTitle
                    title="LATEST NEWS"
                    subTitle="My Latest Articles"
                    desc="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida non proident, sunt in culpa qui officia"
                />
                <div className="row mt-45 pb-90">
                    <div className="col-xl-8">
                        <div className="row">
                            {featurePosts.slice(0, featurePostsNumber).map((posts,i)=>(
                                    <div className="col-lg-6" key={i}>
                                        <div className="single-blog mb-30 pb-40">
                                            {posts.blogImage ?
                                                <div className="blog-img">
                                                    <Link to={`/blog_details/${posts.id}`}>
                                                        <img className="img-fluid" src={posts.blogImage} alt={posts.title} />
                                                    </Link>
                                                </div>
                                                : null}
                                            <div className="blog-meta">
                                                <div className="date">{posts.postedOn}</div>
                                            </div>
                                            <div className="blog-details pl-30 mt-35 pr-30">
                                                <div className="blog-title mb-10">
                                                    <Link to={`/blog_details/${posts.id}`}>
                                                        <h2>{posts.title}</h2>
                                                    </Link>
                                                </div>
                                                <p className="mb-10">{posts.smallDesc}</p>
                                                <div className="blog-button">
                                                    <Link to={`/blog_details/${posts.id}`}>
                                                        Read More &nbsp; <i><FaAngleRight /></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 ))
                              }
                        </div>
                    </div>
                    <div className="col-lg-4 blog-lists-wrapper">
                        {withoutFeaturePosts.slice(0, smBlogPostNumbers).map((posts,i)=>(
                            <div className="blog-item-small-wrapper" key={i}>
                                <div className="blog-item-small pr-20">
                                    <div className="blog-meta">
                                        <div className="date">{posts.postedOn}</div>
                                    </div>
                                    {posts.blogImage ?
                                    <div className="blog-small-img mr-20 float-left">
                                        <Link to={`/blog_details/${posts.id}`}>
                                            <img className="img-fluid" src={posts.blogImage} alt={posts.title} />
                                        </Link>
                                    </div>
                                        : null}
                                    <div className="blog-small-description pt-20 pb-20">
                                        <Link to={`/blog_details/${posts.id}`}>
                                            <h2>{posts.title}</h2>
                                        </Link>
                                        <p>{posts.smallDesc}</p>
                                    </div>
                                </div>
                              <span className="horizontal-border"><hr /></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
