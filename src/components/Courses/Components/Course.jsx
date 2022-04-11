import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Course.css';

const stars = (rating) => {
    const starList = []
    for (let i = 0; i < parseInt(rating); i++) {
        starList.push(<i className="courseFilledStar fa-solid fa-star"></i>)
    }
    if(rating-parseInt(rating)>0){
        starList.push(<i className="courseFilledStar fa-solid fa-star-half"></i>)
    }
    return starList
}

export default function Course({courseId,courseTitle, authorName, createdAt, coursePrice, courseImage}) {

    const rating = 4.3;
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    
    const d = new Date(createdAt) 
    
    return (
        
        <div className='course'>
            <Link to={`/courses/${courseId}`} className="link">
            <img className="courseImg" src={courseImage} alt=""/>
            <div className="courseTitle">
                {courseTitle}
            </div>
            <div className="courseAuthor">
                {authorName}
            </div>
            <div className="courseReleseTime">
                {d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear()}
            </div>
            <div className="courseRating">
                <div className="courseRatingPoint">
                    {rating}
                </div>
                <div className="courseRatingStars">
                    {stars(rating)}
                </div>
                <div className="courseReviewCount">
                    (23)
                </div>
            </div>
            <div className="coursePrice">
            &#8377;{coursePrice}
            </div>
            </Link>
        </div>
    )
}
