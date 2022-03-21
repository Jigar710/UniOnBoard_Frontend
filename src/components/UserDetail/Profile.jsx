import React from "react";
import {useState,useEffect} from "react";
import { Card, Container,Grid,Button } from "@mui/material";
import axios from "axios";
import "../Choaching/review.css";
import BlogListingCard from '../Blogs/BlogListingCard';
import { Row, Col} from 'react-bootstrap';



function Profile(){

    const dashboardURL = "http://localhost:4000/userdashboard";
    const facultyPersonalBlogs = "http://localhost:4000/faculty/getFacultyPersonalBlogs";
    const changePassword = "http://localhost:4000/password/update";

    const[userData, setUserData] = React.useState('');
    const [blogBtn, setBlogBtn] = useState("none");
    const [viewBlog, setViewBlog] = useState(false);
    const [blogsArray,setBlogsArray] = useState([]);
    const [BbtnText,setBbtnText] = useState("My Blogs");
    const [CPbtnText,setCPbtnText] = useState("Change Password");
    const [changePswd,setChangePswd] = useState(false);
    const [displayCpswd,setDisplayCpswd] = useState("none");
    const initialValues = {opswd: "", npswd: ""};
    const [formValues, setFormValues] = useState(initialValues);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
          setFormValues({ ...formValues, [name]: value });
      };
    //   function LFormSubmit (suc){
    //     if(suc === "Successfull"){
    //       setHeading("Successfull");
    //     }
    //     else if(suc === "Fialed"){
    //       setHeading("Failed");
    //     }
    //   }

     

    // Faculty 1 password:- 123456 => abc123
    // const dashboardApiCall = React.useCallback( async () => {
    //     const res = await fetch("http://localhost:4000/userdashboard", {
    //       method: "GET",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": 'application/json',
    //       },
    //       credentials: "include"
    //     })
    
    //     let data = await res.json();
    //     setUserData(data.user)
    //     console.log(userData)
    
    // },[])

    // React.useEffect(() => {
    //     dashboardApiCall()
    // },[dashboardApiCall])

    useEffect(() => {
        axios.get(dashboardURL,{
          headers: {
                     Accept: "application/json",
                     "Content-Type": 'application/json',
                   },
                   withCredentials: true
        }).then((response => {
        //    console.log(response.data.user);
        setUserData(response.data.user)
        if(response.data.user.role === "faculty"){
            setBlogBtn("");
        }
         }))
         if(viewBlog){
            axios.get(facultyPersonalBlogs,{
                headers: {
                           Accept: "application/json",
                           "Content-Type": 'application/json',
                         },
                         withCredentials: true
              }).then((response => {
                 console.log(response.data.blogs);
                 setBlogsArray(response.data.blogs);
                 setBbtnText("Close");
               }))
        } else if(!viewBlog){ setBlogsArray([]); setBbtnText("My Blogs")}
        if(changePswd){
            axios.post(changePassword,{
                "oldPassword": formValues.opswd,
                "newPassword": formValues.npswd,
               
              },{
                headers: {
                    Accept: "application/json",
                    "Content-Type": 'application/json',
                  },
                  withCredentials: true
              }).then((response => {
                 console.log(response.data);
               }))
        }
      },[dashboardURL,viewBlog,changePswd])

    //  console.log(formValues.opswd);
    

    return(
        <>
            <Container maxWidth="md" style={{display:'flex',justifyContent:'center',alignItem:'center'}}>
                <Card elevation={4} style={{marginTop:'20px',marginBottom:'20px',padding:'20px'}}>
                    <Grid item container xs={12}>
                        <Grid item xs={12}>
                            <div style={{ textAlign:'center',fontSize: '30px',color:'grey' }}> Profile Details</div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="d-flex" style={{margin : "10px"}}>
                                <div>Name:</div>
                                <div style={{marginLeft: '5px',color: 'grey'}}>{userData.name}</div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="d-flex" style={{margin : "10px"}}>
                                <div>Email:</div>
                                <div style={{marginLeft: '5px',color: 'grey'}}>{userData.email}</div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="d-flex" style={{margin : "10px"}}> 
                                <div>Role:</div>
                                <div style={{marginLeft: '5px',color: 'grey'}}>{userData.role}</div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="d-flex">
                            <Button variant="contained"
                            onClick={() => {
                                if(displayCpswd === "none"){
                                    setDisplayCpswd("");
                                    setCPbtnText("close");
                                    
                                }else if(displayCpswd === ""){
                                    setDisplayCpswd("none");
                                    setCPbtnText("Change Password");
                                }
                                
                            }}>{CPbtnText}</Button>
                            {/* <div style={{marginLeft: '5px',color: 'grey'}}>{userData.role}</div> */}
                            <Button style={{marginLeft: '5px', display:blogBtn}} variant="contained" color="success"
                            onClick={() => {
                                // setViewBlog(true);
                                viewBlog ? setViewBlog(false) : setViewBlog(true)
                            }}>{BbtnText}</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Card>
            </Container>


            <Container style={{width : "880px" , display:displayCpswd}}>
                <Row>
                    <div style={{border : "2px solid black"}}>
                       <form>
                       <label>Existing Password</label>
                        <p>
                            <input
                                type="text"
                                name="opswd"
                                placeholder="Enter Your existing Password"
                                value={formValues.opswd}
                                onChange={handleChange}
                            />
                        </p>
                        <label>New Password</label>
                        <p>
                            <input
                                type="text"
                                name="npswd"
                                placeholder="Enter new Password"
                                value={formValues.npswd}
                                onChange={handleChange}
                            />
                        </p>
                        <Button variant="contained" color="success" onClick={() => {
                            setChangePswd(true);
                            
                        }}>
                            Change Password
                        </Button>
                       </form>
                    </div>
                </Row>
            </Container>


            <Container>
                <Row sm={12} md={3}>
                {
                    blogsArray.map(
                    blogObj => (
                    <Col sm={12} md={6} key={blogObj._id}>
                        <BlogListingCard 
                            key={blogObj._id}
                            id={blogObj._id}
                            // setToggle={setToggle}
                            blogAuthor={blogObj.author}
                            // setbAuthor={setbAuthor}
                            blogImgURL={blogObj.photo.secure_url}
                            blogTitle={blogObj.title}
                            blogRating={blogObj.ratings}
                            blogReviews={blogObj.numberOfReviews}
                            blogContent={blogObj.content}
                        />
                    </Col>
                ))}
                    </Row>
                </Container>
        </>
    )
}

export default Profile;