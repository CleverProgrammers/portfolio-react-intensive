import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import Layout from "../Layout";
import PostContent from "../Components/PostContent";
import PageHeader from "../Components/PageHeader";
import blogPosts from "../data/blog_posts";
import Newsletter from "../Components/newsletter";
export default function BlogDetails() {

   const { Id } = useParams();
   const [ post, setPost ] = useState({});
   const { pathname } = useLocation();
   
   useEffect(()=>{
      const postData = blogPosts.posts.find(post=>post.id == Id);
      setPost(postData);
      window.scrollTo(0, 0);
   }, [pathname]);

    return (
       
       <Layout>
         <PageHeader post={post}/>
         <PostContent post={post}/>
          <Newsletter/>
       </Layout>
    )
}
