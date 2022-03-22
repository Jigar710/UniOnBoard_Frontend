import React from 'react';
import {useState} from 'react';

import './Blog.css'
const BlogModal = ({id}) => {
  console.log("answer",id);
  const [data,setData] = useState({});
  const allBlogsApiCall = React.useCallback( async () => {
    const res = await fetch(`http://localhost:4000/getOneBlog/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": 'application/json',
      },
      credentials: "include"
    })

    let data2 = await res.json();
    setData(data2.blog);
    console.log("data",data)

},[])

React.useEffect(() => {
  allBlogsApiCall()
},[allBlogsApiCall])
  return (
    // <div>blogTitle, rating, author,
    // <div classNameName="mb-2 card my-auto" style={{height:"auto",width:"380px" }}>
    //     <div classNameName="card-image" >
    //       <img src={image} style={{width:"380px", height:"200px"}} alt='li'/>
    //       <span classNameName="card-title">{blogTitle}</span>
    //     </div>
    //     <div classNameName="card-content">
    //     <small className="text-muted">Ratings : {rating.toFixed(2)}</small>
    //       <p>{content.slice(0,200)}...Read More</p>
    //     </div>
    //     <div classNameName="card-action">
    //       <a href="/" style={{color:"Teal"}}>Published By {author}</a>
    //     </div>
        <div className="section">
      	<input className="modal-btn" type="checkbox" id="modal-btn" name="modal-btn"/>
      	<label for="modal-btn">Read More <i className="uil uil-expand-arrows"></i></label> 		
      	<div className="modal">		
	      	<div className="modal-wrap">	
				<img src={data.photo.secure_url} alt=""/>	
	      		<p>{data.content}</p>	          		
	      	</div>			          		
      	</div>	
	</div>
  );
}

export default BlogModal;
