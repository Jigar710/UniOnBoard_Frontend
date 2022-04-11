
import { useState } from 'react';
import './Upload.css';
import axios from 'axios';


export default function Upload() {
  const [page,setPage] = useState(1);
  const [values, setValues] = useState({})
  const [sectionField, setSectionField] = useState([{SectionName:"",lectureNo:1}]);
  const [courseData,setCourseData] = useState({}) 
  


  const handleSectionAdd = () => {
    setSectionField([...sectionField,{SectionName:"",lectureNo:1}])
  }

  const handleLectureAdd = (e) => {
    var tempData = sectionField;

    tempData[e].lectureNo += 1;
    setSectionField(tempData);
    setSectionField([...sectionField])
  }

  const validate = (page) =>{
    // if(page === 1){
    //   if(!values["courseTitle"]){
    //     alert("Course Title is required please make sure it's not empty")
    //     setError(true);
    //     return
    //   }
    //   else if(!values["courseCategory"]){
    //     alert("Course Learning is required please make sure it's not empty")
    //     setError(true);
    //     return
    //   }
    //   else if(!values["targetAudience"]){
    //     alert("Target audience for the course is required please make sure it's not empty")
    //     setError(true);
    //     return
    //   }
    //   else{
    //     setError(false);
    //     return
    //   }
    // }
    // if(page === 2){
    //   setError(true);
    //   for(let i=0;i<sectionField.length; i++){
    //     if(!values[`sectionName${i}`]){
    //       alert("Please give name to the section")
    //       setError(true);
    //       return
    //     }else{
    //       for(let j=0;j<sectionField[i].lectureNo;j++){
    //         if(!values[`lectureVideo${i}${j}`]){
    //           alert(`Lecture Video is missing in ${i+1}th section and ${j+1}th lecture`)
    //           setError(true);
    //           return
    //         }
    //       }
    //     }
    //   }
    // }
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    
    await axios.post("http://localhost:4000/addCourseOverview",{
        "CourseTitle":values["courseTitle"],
        "CourseLearning":values["courseCategory"],
        "CoursePrerequisite":values["coursePrerequisite"],
        "CourseAudience":values["targetAudience"],
        "LectureCaption":values["courseCaption"],
        "AuthorId":"62375f676b19971065ec5135"
    })
    .then((response)=>{
      console.log(response.data.result)
      setCourseData(response.data.result)
    })
    .catch((error)=>{
        console.log(error)
    })
    

    for(let i=0;i<sectionField.length;i++){
      for(let j=0; j<sectionField[i].lectureNo;j++){
        const fd = new FormData();
        console.log("CourseId",courseData._id,
        "SectionNo",parseInt(i)+1,
        "SectionName",values[`sectionName${i}`],
        "LectureNo",parseInt(j)+1,
        "ContentType","video",
        "VideoName",values[`lectureName${i}${j}`],
        "LectureDesc",values[`lectureDesc${i}${j}`],
        "LectureVideo",values[`lectureVideo${i}${j}`],
        "LectureResourceFile",values[`lectureResource${i}${j}`])
        fd.append("CourseId",courseData._id);
        fd.append("SectionNo",parseInt(i)+1);
        fd.append("SectionName",values[`sectionName${i}`]);
        fd.append("LectureNo",parseInt(j)+1);
        fd.append("ContentType","video");
        fd.append("VideoName",values[`lectureName${i}${j}`]);
        fd.append("LectureDesc",values[`lectureDesc${i}${j}`]);
        fd.append("LectureVideo",values[`lectureVideo${i}${j}`]);
        fd.append("LectureResourceFile",values[`lectureResource${i}${j}`]);

        console.log(fd)
        try {
          const response = await axios({
            url: 'http://localhost:4000/addSectionContent',
            method: 'POST',
            Headers: {
                'content-Type': 'multipart/form-data',
            },
            withCredentials: true,data:fd
          })
          
          console.log(response)
        } catch (err) {
          console.log(err)
        }
      }
    }

    const formdata = new FormData();
    formdata.append("CourseId",courseData._id);
    formdata.append("CourseTitle",values["courseTitle"]);
    formdata.append("CourseSubTitle",values["courseSubTitle"]);
    formdata.append("CourseDesc",values["landingPageDesc"]);
    formdata.append("CourseLanguage",values["courseLanguage"]);
    formdata.append("DifficultyLevel",values["courseDifficulty"]);
    formdata.append("CourseCategory",values["landingPageCategory"]);
    formdata.append("CourseLearing",values["landingPageLearning"]);
    formdata.append("Pricing",values["coursePrice"]);
    formdata.append("CouponCode",values["courseCoupon"]);
    formdata.append("WelcomeMessage",values["welcomeMessage"]);
    formdata.append("CongoMessage",values["congoMessage"]);
    formdata.append("Mode",values["courseMode"]);
    formdata.append("CourseImg",values["courseImage"]);
    formdata.append("CoursePromo",values["coursePromo"]);

        console.log(formdata)
        try {
          const landingPage = await axios({
            url: 'http://localhost:4000/addLandingPage',
            method: 'POST',
            Headers: {
                'content-Type': 'multipart/form-data',
            },
            withCredentials: true,data:formdata
          })
          
          console.log(landingPage)
        } catch (err) {
          console.log(err)
        }
        alert("added successfuly")
  }

  const firstForm = ()=>{
    const category = [
        "None",
        "Development",
        "Bussiness",
        "IT & Software",
        "Personal Development",
        "Design",
        "Marketing",
        "Lifestyle",
        "Photography",
        "Health & Fitness",
        "Music",
        "Teaching & Academics",
        "Other"
      ]
    
    return(
        <div className="courseOverview">
        <label className="panelHeader">Basic Overview</label>
        <div className="courseTitlePanel">
        <label className="questionLabel">What is the title of your course?<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
        <input className="answerField" id="courseTitle" value={values["courseTitle"]} onChange={(e) => {
          fieldChanged("courseTitle", e.target.value);
        }} placeholder="Example: React Tutorial..." />
      </div>
      <div className="courseCategory">
        <label className="questionLabel">What will student learn in your course?<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
        <input className="answerField" id="courseCategory" value={values["courseCategory"]} onChange={(e) => {
          fieldChanged("courseCategory", e.target.value);
        }} placeholder="Example: React basics..." />
      </div>
      <div className="coursePrerequisite">
        <label className="questionLabel">Are there any course requirement or prerequisites?</label>
        <input className="answerField" id="coursePrerequisite" value={values["coursePrerequisite"]} onChange={(e) => {
          fieldChanged("coursePrerequisite", e.target.value);
        }} placeholder="Example: Basic knowledge about JavaScript" />
      </div>
      <div className="targetAudience">
        <label className="questionLabel">What are your target audience?<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
        <input className="answerField" id="targetAudience" value={values["targetAudience"]} onChange={(e) => {
          fieldChanged("targetAudience", e.target.value);
        }} placeholder="Example: Curious about web-development" />
      </div>
      <div className="courseCaption">
        <label className="questionLabel">Captions</label>
        <input className="answerField" id="courseCaption" value={values["courseCaption"]} onChange={(e) => {
          fieldChanged("courseCaption", e.target.value);
        }} placeholder="Example: React.js, Web-Development" />
      </div>
        <div className='formButton'>
          {page > 1 && <button className="formButtonbBack" onClick={prevPage}>Back</button>}&nbsp;
          {page < 5 && <button className='formButtonNext' onClick={nextPage}>Next</button>}
          {page === 2 && <button className='formButtonSubmit' onClick={onSubmit}>Submit</button>}
        </div>
    </div>);
  }

  const secondForm = ()=>{
    
    return(
        <div className='courseSection'>
          <label className='panelHeader'>Course Section</label>
            {
              sectionField.map((singleField,indexPri) => (
                  <div className='Section'>
                    {sectionField.length >1 &&
                      <div className='deleteButtonSection'>
                        <button id='deleteSection' style={{display:"none"}}></button>
                        <label htmlFor='deleteSection' className='deleteSection'><i className="fa-solid fa-trash-can"></i></label>
                      </div>
                    }
                  <div className='courseSectionName'>
                    <label className='courseSectionNameLabel'>Section Name<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
                    <input className='courseSectionNameInput' id={`sectionName${indexPri}`} value={values[`sectionName${indexPri}`]} onChange={(e) => {
                      fieldChanged(`sectionName${indexPri}`, e.target.value);
                    }} />
                  </div>
                  <div className='addLecture'>
                </div>
                {
                Array(parseInt(singleField.lectureNo)).fill(1).map((singleLec, index)=>(
                  <div className='Lecture'>
                  {singleField.lectureNo > 1 &&
                    <div className='deleteButtonLecture'>
                      <button id='deleteLecture' style={{display:"none"}}></button>
                      <label htmlFor='deleteLecture' className='deleteLecture'><i className="fa-solid fa-trash-can"></i></label>
                    </div>
                  }
                  <div className='courseVideoUpload'>
                    <input type="file" id={`lectureVideo${indexPri}${index}`} onChange={(e) => {
                      fieldChanged(`lectureVideo${indexPri}${index}`, e.target.files[0]);
                    }} style={{display:"none"}}/>
                    <label htmlFor={`lectureVideo${indexPri}${index}`}><i className="courseVideoUploadIcon fa-solid fa-upload"></i><label htmlFor={`lectureVideo${indexPri}${index}`} className='resourceLabel'>Upload Videos</label></label>
                    
                  </div>
                  <>
                    
                  </>
                  <div className="courseLectureName">
                    <label className='courseLectureNameLabel'>Lecture Name<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
                    <input className='courseLectureNameInput' id={`lectureName${indexPri}${index}`} value={values[`lectureName${indexPri}${index}`]} onChange={(e) => {
                      fieldChanged(`lectureName${indexPri}${index}`, e.target.value);
                    }} />
                  </div>
                  <div className="courseLectureDesc">
                    <label className="courseLectureDescLabel">Lecture Description<i className="requiredIcon fa-solid fa-circle-question"><span class="tooltiptext">Reuired !!</span></i></label>
                    <textarea className="courseLectureDescInput" id={`lectureDesc${indexPri}${index}`} value={values[`lectureDesc${indexPri}${index}`]} onChange={(e) => {
                      fieldChanged(`lectureDesc${indexPri}${index}`, e.target.value);
                    }} placeholder='Write Something...' />
                  </div>
                  <div className='courseResourceUpload'>
                    <label className='courseResourceLabel'>Course Resources</label>
                    <input type="file" className='courseResourceUploadInput' id={`lectureResource${indexPri}${index}`}  onChange={(e) => {
                      fieldChanged(`lectureResource${indexPri}${index}`, e.target.files[0]);
                    }} style={{display:"none"}} />
                    <label htmlFor={`lectureResource${indexPri}${index}`}><i className="courseResourceUploadIcon fa-solid fa-plus"></i>Add</label>
                  </div>
                </div>
                ))}
                <button className='lectureButton' id="add" onClick={(e)=>{
                  handleLectureAdd(indexPri)
                }}>Add Lecture</button>
              </div>
              ))} 
            <button className='sectionButton' onClick={handleSectionAdd}>Add Section</button>
          <div className='formButton'>
            {page > 1 && <button className="formButtonbBack" onClick={prevPage}>Back</button>}&nbsp;
            {page < 5 && <button className='formButtonNext' onClick={nextPage}>Next</button>}
            {page === 5 && <button className='formButtonSubmit' onClick={onSubmit}>Submit</button>}
          </div>
        </div>
    )
  }

  const thirdForm = ()=>{
    const category = [
        "Development",
        "Bussiness",
        "IT & Software",
        "Personal Development",
        "Design",
        "Marketing",
        "Lifestyle",
        "Photography",
        "Health & Fitness",
        "Music",
        "Teaching & Academics",
        "Other"
      ]
    const language = ["English", "Gujarati", "Hindi"];
    const difficulty = ["Beginner", "Intermediate", "Advanced", "Mixed"]

    return(
        <div className='landingPageForm'>
        <label className='panelHeader'>Course Landing Page</label>
            <div className='landingPageTitle'>
              <label className='landingPageTitleLabel'>Course Title</label>
              <input className='landingPageTitleInput' id="landingPageTitle" value={values["landingPageTitle"]} onChange={(e) => {
                fieldChanged("landingPageTitle", e.target.value);
              }} />
            </div>
            <div className='landingPageSubTitle'>
              <label className='landingPageSubTitleLabel'>Course Sub-Title</label>
              <input className='landingPageSubTitleInput' id="landingPageSubTitle" value={values["landingPageSubTitle"]} onChange={(e) => {
                fieldChanged("landingPageSubTitle", e.target.value);
              }} />
            </div>
            <div className='landingPageDesc'>
              <label className='landingPageDescLabel'>Course Description</label>
              <textarea className='landingPageDescInput' id="landingPageDesc" value={values["landingPageDesc"]} onChange={(e) => {
                fieldChanged("landingPageDesc", e.target.value);
              }} placeholder='Write Something...' />
            </div>
            <div className='courseLanguage'>
              <label className='courseLanguageLabel'>Language</label>
              <select className='courseLanguageInput' label="Language" id="courseLanguage" value={values["courseLanguage"]} onChange={(e) => {
                fieldChanged("courseLanguage", e.target.value);
              }} defaultValue="English" >
                {
                  language.map(
                    (data) => (<option value={data} >{data}</option>)
                  )
                }
              </select>
            </div>
            <div className='courseDifficulty'>
              <label className='courseDifficultyLabel'>Difficulty Level</label>
              <select className='courseDifficultyInput' label="Difficulty" id="courseDifficulty" value={values["courseDifficulty"]} onChange={(e) => {
                fieldChanged("courseDifficulty", e.target.value);
              }} defaultValue="Mixed" >
                {
                  difficulty.map(
                    (data) => (<option value={data} >{data}</option>)
                  )
                }
              </select>
            </div>
            <div className='landingPageCategory'>
              <label className='landingPageCategoryLabel'>What is the category of your course?</label>
              <select className='landingPageCategoryInput' label="Category" id="landingPageCategory" value={values["landingPageCategory"]} onChange={(e) => {
                fieldChanged("landingPageCategory", e.target.value);
              }} defaultValue="None" >
                {
                  category.map(
                    (data) => (<option value={data} >{data}</option>)
                  )
                }
              </select>
            </div>
            <div className='landingPageLearning'>
              <label className='landingPageLearningLabel'>What are the learning for this course?</label>
              <input className='landingPageLearningInput' id="landingPageLearning" value={values["landingPageLearning"]} onChange={(e) => {
                fieldChanged("landingPageLearning", e.target.value);
              }} />
            </div>
            <label className='courseImageLabel'>Course Image</label>
            <div className='courseImageUpload'>
              <input type="file" id="courseImage" onChange={(e) => {
                fieldChanged("courseImage", e.target.files[0]);
              }} style={{display:"none"}}/>
              <label htmlFor='courseImage'><i className="courseImageUploadIcon fa-solid fa-upload"></i><label htmlFor="courseImage" className='resourceLabel'>Upload Image</label></label>
            </div>
            <label className='coursePromoLabel'>Course Promo Video</label>
            <div className='coursePromoUpload'>
              <input type="file" id="coursePromo" onChange={(e) => {
                fieldChanged("coursePromo", e.target.files[0]);
              }} style={{display:"none"}}/>
              <label htmlFor='coursePromo'><i className="coursePromoUploadIcon fa-solid fa-upload"></i><label htmlFor="coursePromo" className='resourceLabel'>Upload Promo Video</label></label>
            </div>
            <div className='coursePrice'>
              <label className='coursePriceLabel'>Pricing</label>
              <input className='coursePriceInput' id="coursePrice" value={values["coursePrice"]} onChange={(e) => {
                fieldChanged("coursePrice", e.target.value);
              }} />
            </div>
            <div className='courseCoupon'>
              <label className='courseCouponLabel'>Coupon Code</label>
              <input className='courseCouponInput' id="courseCoupon" value={values["courseCoupon"]} onChange={(e) => {
                fieldChanged("courseCoupon", e.target.value);
              }} />
            </div>
          <div className='formButton'>
            {page > 1 && <button className="formButtonbBack" onClick={prevPage}>Back</button>}&nbsp;
            {page < 5 && <button className='formButtonNext' onClick={nextPage}>Next</button>}
            {page === 5 && <button className='formButtonSubmit' onClick={onSubmit}>Submit</button>}
          </div>
        </div>
    )
  }

  const forthForm = () =>{
    return(
        <div className='messagePanel'>
          <div className='messagePanelWelcome'>
            <label className='messagePanelWelomeLabel'>Welcome Message</label>
            <textarea className="messagePanelWelcomeText" id="welcomeMessage" value={values["welcomeMessage"]} onChange={(e) => {
                fieldChanged("welcomeMessage", e.target.value);
              }} placeholder="Write something..." />
          </div>
          <div className='messagePanelCongo'>
          <label className='messagePanelCongoLabel'>Congretulations Message</label>
            <textarea className="messagePanelCongoText" id="congoMessage" value={values["congoMessage"]} onChange={(e) => {
                fieldChanged("congoMessage", e.target.value);
              }} placeholder="Write something..." />
          </div>
          <div className='formButton'>
            {page > 1 && <button className="formButtonbBack" onClick={prevPage}>Back</button>}&nbsp;
            {page < 5 && <button className='formButtonNext' onClick={nextPage}>Next</button>}
            {page === 5 && <button className='formButtonSubmit' onClick={onSubmit}>Submit</button>}
          </div>
        </div>
    )
  }

  const fifthForm = () =>{
    const mode = ["Live", "Draft"]
    return(
        <div className='courseMode'>
          <div className='courseModePanel'>
            <label className='courseModeLabel'>Course Mode</label>
            <select className='courseModeInput' label="Mode" id="courseMode" value={values["courseMode"]} onChange={(e) => {
                fieldChanged("courseMode", e.target.value);
              }} defaultValue="None" >
              {
                mode.map(
                  (data) => (<option value={data} >{data}</option>)
                )
              }
            </select>
          </div>
          <div className='formButton'>
            {page > 1 && <button className="formButtonbBack" onClick={prevPage}>Back</button>}&nbsp;
            {page < 5 && <button className='formButtonNext' onClick={nextPage}>Next</button>}
            {page === 5 && <button className='formButtonSubmit' onClick={onSubmit}>Submit</button>}
          </div>
        </div>
    )
  }

  const executeForm = (page) =>{
    if(page === 1){
      return firstForm()
    }
    if(page === 2){
      return secondForm()
    }
    if(page === 3){
      return thirdForm()
    }
    if(page === 4){
      return forthForm()
    }
    if(page === 5){
      return fifthForm()
    }
  }

  const navigatePages = (direction) => () => {
      const findNextPage = (page) => {

          const upcomingPageData = executeForm(page);
          if (upcomingPageData.conditional && upcomingPageData.conditional.field) {

            const segments = upcomingPageData.conditional.field.split("_");
            const fieldId = segments[segments.length - 1];
            const fieldToMatchValue = values[fieldId];
            if (fieldToMatchValue !== upcomingPageData.conditional.value) {
              return findNextPage(direction === "next" ? page + 1 : page - 1);
            }
          }
        return page;
      };
      setPage(findNextPage(direction === "next" ? page + 1 : page - 1));
  };

  const nextPage = navigatePages("next");
  const prevPage = navigatePages("prev");

  const [currentPageData, setCurrentPageData] = useState(executeForm(page));

  const fieldChanged = (fieldId, value) => {
    setValues((currentValues) => {
      currentValues[fieldId] = value;
      return currentValues;
    });
  
    setCurrentPageData((currentPageData) => {
      return Object.assign({}, currentPageData);
    });
  };

  return (
    <div className='upload'>
        {
          executeForm(page)
        }
    </div>
  )
}


