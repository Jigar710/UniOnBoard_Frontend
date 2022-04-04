import React from 'react';
import './Course.css';

const stars = (rating) => {
    const starList = []
    for (let i = 0; i < parseInt(rating); i++) {
        console.log("hello");
        starList.push(<i className="courseFilledStar fa-solid fa-star"></i>)
    }
    if(rating-parseInt(rating)>0){
        starList.push(<i className="courseFilledStar fa-solid fa-star-half"></i>)
    }
    return starList
}

export default function course() {
    const rating = 4.3;
    return (
        <div className='course'>
            <img className="courseImg" src="https://www.tacthub.in/user-panel/img/subject_thumb/data-science-course-840x450.jpg" alt=""/>
            <div className="courseTitle">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur
            </div>
            <div className="courseAuthor">
                Smit Ghelani
            </div>
            <div className="courseReleseTime">
                23 July 2021
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
            &#8377;230
            </div>
        </div>
    )
}
