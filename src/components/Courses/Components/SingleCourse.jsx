import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import VideoPalyer from 'react-video-js-player';
import axios from 'axios';
import './SingleCourse.css';



export default function SingleCourse() {
    
    const {id} = useParams();
    const apiURL = `http://localhost:4000/getCourseContent/${id}`
    const [sectionData, setSectionData] = useState([])
    const [courseData, setCourseData] = useState({})
    const [mainPanelSrc,setMainPanelSrc] = useState("");
    const [mainPanelTitle, setMainPanelTitle] = useState("");
    const [mainPanelDesc, setMainPanelDesc] = useState("") 
    const [mainPanelVNo, setMainPanelVNo] = useState("") 

    const showDropDown = (e)=>{
        var dropdown = document.getElementsByClassName(`videoSectionTitle ${e}`);
        var i;

        for (i = 0; i < dropdown.length; i++) {
            var dropdownContent = dropdown[i].nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        }
    }
    
    useEffect(()=>{
        axios.get(`http://localhost:4000/getCourseContent/${id}`,{
            headers: {
                       Accept: "application/json",
                       "Content-Type": 'application/json',
                     },
                     withCredentials: true
          }).then((response)=>{
            // console.log(response)
            setSectionData(response.data.dataAll);
            setCourseData(response.data.result);
            setMainPanelSrc(response.data.dataAll[0].LectureVideo.secure_url);
            setMainPanelVNo(response.data.dataAll[0].LectureNo);
            setMainPanelTitle(response.data.dataAll[0].VideoName);
        }).catch((error)=>{
              console.log(error);
        })
    },[])



    const changeUrl = (sec,lec)=>{
        for(let i=0;i<sectionData.length;i++){
            if(sectionData[i].SectionNo === sec){
                if(sectionData[i].LectureNo === lec){
                    setMainPanelSrc(sectionData[i].LectureVideo.secure_url.toString());
                    setMainPanelTitle(sectionData[i].VideoName)
                    setMainPanelVNo(sectionData[i].LectureNo)
                }
            }
        }
    }
    
    var secNo = 1;

    return (
    <div className='videoCourse'>
        <div className="videoCourseHeading">
                {
                    courseData.CourseTitle
                }
        </div>
        <div className="courseVideos">
            <div className="videoMainPanel">
                <div className="videoMainPanelItem">
                <ReactPlayer className="video" url={mainPanelSrc} controls muted autoplay />
                
                    <div className="videoMainPanelTitle">
                        {mainPanelVNo+".  "+mainPanelTitle}
                    </div>
                    <div className="videoMainPanelDesc">
                        <div className="staticTitleSC">Description</div>
                        <div className="descContent">
                            {
                                mainPanelDesc
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="videoListPanel">
                    {
                        
                        sectionData.map((lecture, index) => (
                            <div className='videoListPanelItem'>
                                {
                                    secNo===lecture.SectionNo && <button className={`videoSectionTitle ${index}`} onClick={(e)=>showDropDown(index)} >
                                        {
                                            lecture.SectionNo+".  "+lecture.SectionName
                                        }
                                        <label style={{display:"none"}}>{secNo+=1}</label>
                                        <i className="videoSectionIcon fa-solid fa-sort-down"></i></button>
                                } 
                                    <div className='subVideo' style={{display:"none"}}>
                                        {
                                            sectionData.map((lec,i)=>(
                                                secNo-1 === lec.SectionNo &&
                                                <div className={`videoLectureTitle ${index}`} onClick={()=>changeUrl(lecture.SectionNo,lec.LectureNo)}>
                                                {
                                                    lec.VideoName
                                                }
                                            </div>
                                            ))
                                        } 
                                    </div>  
                            </div>
                        ))
                    }
            </div> 
        </div>
    </div>
  )
}
