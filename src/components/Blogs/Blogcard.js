import React from 'react';
import {useState} from 'react';
import './Blog.css';
import BlogModal from './BlogModal';
const Blogcard = ({data}) => {
  
  return (
    <div className="mb-2 mt-2 card my-auto" style={{height:"518px",width:"380px" }}>
        <div className="card-image" >
          <img src={data.photo.secure_url} style={{width:"380px", height:"200px"}} alt='li'/>
          <span className="card-title">{data.title}</span>
        </div>
        <div className="card-content">
        <small classNameName="text-muted">Ratings : {data.ratings.toFixed(2)}</small>
          <p style={{overflow:"hidden",}}>{data.content.slice(0,200)}...Read More</p>
        </div>
        {/* <div className="card-action">
          <a href="/" style={{color:"Teal"}}>Published By {author}</a>
         </div>*/}
        <div className="card-action">
          <BlogModal id={data._id}/>
        </div>
      </div>
  );
}

export default Blogcard;
