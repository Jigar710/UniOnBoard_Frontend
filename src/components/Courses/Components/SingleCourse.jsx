import React from 'react';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import './SingleCourse.css';

const changeVid = () => {
    let listVideo = document.querySelectorAll('.courseVideos .videoListPanel .videoListPanelItem')
    let mainVideo = document.querySelector('.courseVideos .videoMainPanel .videoMainPanelItem .video')
    let title = document.querySelectorAll('.courseVideos .videoMainPanel .videoMainPanelItem .videoMainPanelTitle')
    
    return (
        listVideo.forEach(video =>{
        
            video.onclick = () =>{
            listVideo.forEach(vid => vid.classList.remove('active'));
                video.classList.add('active');
                if(video.classList.contains('active')){
                    let src = video.children[0].getAttribute('url');
                    mainVideo.src = src;
                    let text = video.children[1].innerHTML;
                    title.innerHTML = text;
                };
            };
    })
    )
}

export default function SingleCourse() {
    
    const [id,setId] = useState(null); 


    return (
    <div className='videoCourse'>
        {changeVid()}
        <div className="videoCourseHeading">
                Lorem, ipsum dolor sit
        </div>
        <div className="courseVideos">
            <div className="videoMainPanel">
                <div className="videoMainPanelItem">
                <ReactPlayer
						controls={true}
                        className= "video"
						url="https://res.cloudinary.com/dkmj6cid2/video/upload/v1648961543/videos/production_ID_5190550_qhnkiu.mp4" 
						width="100%"
						height="100%"
					/>
                    {/* <video className='video' src="https://youtu.be/xcJtL7QggTI" controls muted autoPlay></video> */}
                    <div className="videoMainPanelTitle">
                        01. video goes title here
                    </div>
                </div>
            </div>
            <div className="videoListPanel">
                <div className="videoListPanelItem active" onClick={()=>{
                    setId("PqToYlWo6p8")
                }} >
                    <ReactPlayer
                        muted
                        className= "vid"
						url="https://res.cloudinary.com/dkmj6cid2/video/upload/v1648961543/videos/production_ID_5190550_qhnkiu.mp4" 
					/>
                    <div className="videoTitle">
                        01. video goes title here
                    </div>
                </div>
                <div className="videoListPanelItem" onClick={()=>{
                    setId("9xwazD5SyVg")
                }} >
                <img src="https://res.cloudinary.com/dkmj6cid2/video/upload/v1648961543/videos/production_ID_5190550_qhnkiu.mp4" alt=""/>
                    <div className="videoTitle">
                        02. video goes title here
                    </div>
                </div>
                <div className="videoListPanelItem" onClick={()=>{
                    setId("9xwazD5SyVg")
                }} >
                    <img src="https://res.cloudinary.com/dkmj6cid2/video/upload/v1648961543/videos/production_ID_5190550_qhnkiu.mp4" alt=""/>
                    <div className="videoTitle">
                        03. video goes title here
                    </div>
                </div>
                <div className="videoListPanelItem" onClick={()=>{
                    setId("PqToYlWo6p8")
                }} >
                    <img src={`https://img.youtube.com/vi/${id}/default.jpg`} alt=""/>
                    <div className="videoTitle">
                        04. video goes title here
                    </div>
                </div>
                <div className="videoListPanelItem" onClick={()=>{
                    setId("PqToYlWo6p8")
                }}>
                    <img src={`https://img.youtube.com/vi/${id}/default.jpg`} alt=""/>
                    <div className="videoTitle">
                        05. video goes title here
                    </div>
                </div>
                <div className="videoListPanelItem" onClick={()=>{
                    setId("PqToYlWo6p8")
                }}>
                    <img src={`https://img.youtube.com/vi/${id}/default.jpg`} alt="" />
                    <div className="videoTitle">
                        06. video goes title here
                    </div>
                </div>
                <div className="videoListPanelItem" onClick={()=>{
                    setId("PqToYlWo6p8")
                }}>
                    <img src={`https://img.youtube.com/vi/${id}/default.jpg`} alt=""/>
                    <div className="videoTitle">
                        07. video goes title here
                    </div>
                </div>
                <div className="videoListPanelItem" onClick={()=>{
                    setId("PqToYlWo6p8")
                }}>
                    <img src={`https://img.youtube.com/vi/${id}/default.jpg`} alt=""/>
                    <div className="videoTitle">
                        08. video goes title here
                    </div>
                </div>
                <div className="videoListPanelItem" onClick={()=>{
                    setId("PqToYlWo6p8")
                }}>
                    <img src={`https://img.youtube.com/vi/${id}/default.jpg`} alt=""/>
                    <div className="videoTitle">
                        09. video goes title here
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}
