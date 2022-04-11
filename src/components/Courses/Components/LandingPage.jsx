import React from 'react';
import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LandingPage.css';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    const {id} = useParams();
    const [err, setErr] = useState('')
    const [courseImgURL, setCourseImgURL] = useState({})
    const [imgURL, setImgURL] = useState("");
    const [promoURL, setPromoURL] = useState("");
    const [landingPageData, setLandingPageData] = useState({})
    const [authorData, setAuthorData] = useState({})
    const [courseData, setCourseData] = useState({})
    const [sessionCount, setSessionCount] = useState(0)


  useEffect(() =>{
      axios.get(`http://localhost:4000/getLandingPageData/${id}`,{
        headers: {
                   Accept: "application/json",
                   "Content-Type": 'application/json',
                 },
                 withCredentials: true
      }).then((response)=>{
        setLandingPageData(response.data.data.landingPageData);
        setAuthorData(response.data.data.author);
        setCourseData(response.data.data.courseData);
        setSessionCount(response.data.data.sessionCount);
        setImgURL(response.data.data.author.photo.secure_url)
        setCourseImgURL(response.data.data.landingPageData.CourseImg.secure_url)
        setPromoURL(response.data.data.landingPageData.CoursePromo.secure_url)
  
      }).catch((error)=>{
          console.log(error);
      })
    },[]
  )

  return (
    <div className="landingPage">
      <img src={courseImgURL} className="mainBackGroundImg" alt="" />
      <div className='mainPanel'>
      <div className='subMainPanel'>
        <div className='courseTitleLandingPage'>
          {
            landingPageData.CourseTitle
          }
        </div>
        <div className='authorImg'>
          <img src={imgURL} alt="" className="authorImgIcon" />
          <label className='authorName'>
            {
              authorData.name
            }
          </label>
          <div className="lecturesCount">
          <i className="iconLecture fa-solid fa-video"></i>
            Lectures&nbsp;&nbsp;
            {
              sessionCount
            }
          </div>
        </div>
        <div>
          <video className="coursePromoLandingPage" src={promoURL} controls muted autoPlay/>
        </div>
        <div className='courseDescLandingPage'>
          <div className='staticTitle'>About This Course</div>
          <div className='courseDescContentLandingPage'>
            {
              landingPageData.CourseDesc
            }
          </div>
        </div>
        <div className='courseLearingLandingPage'>
          <div className='staticTitle'>After Completing This Course You Will Be Able To</div>
          <div className='courseLearingContentLandingPage'>
            {
              landingPageData.CourseLearing
            }
          </div>
        </div>
        <div className='courseRequirementLandingPage'>
          <div className='staticTitle'>Requirements</div>
          <div className='courseRequirementContentLandingPage' >
          {
            courseData.CoursePrerequisite
          }
          </div>
        </div>
        </div>
      <div className='sidePanel'>
        <div className="courseLanguageLandingPage">
        <i className="sidePanelIcon fa-solid fa-microphone-lines"></i>
          {
            landingPageData.CourseLanguage
          }
        </div>
        <div className="courseLearningLandingPage">
        <i className="sidePanelIcon fa-solid fa-tags"></i>
          {
            courseData.CourseLearning
          }
        </div>
        <div className="courseDifficultyLandingPage">
        <i className="sidePanelIcon fa-solid fa-layer-group"></i>
          {
            landingPageData.DifficultyLevel
          }
        </div>
        <div className="courseCategoryLandingPage">
        <i className="sidePanelIcon fa-solid fa-ranking-star"></i>
          {
            landingPageData.CourseCategory
          }
        </div>
        <hr />
        <div className="coursePriceLandingPage">
        <i className="sidePanelRupeeIcon fa-solid fa-indian-rupee-sign"></i>
          {
            landingPageData.Pricing
          }
        </div>
        <div className='enrollButton'>
          <Link to={`/courses/watchCourse/${id}/`}><button className='button'>Enroll Today</button></Link>
          
        </div>
      </div>
      </div>
    </div>
    
  )
}
